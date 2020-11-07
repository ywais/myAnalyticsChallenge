///<reference path="types.ts" />

import express from "express";
import { Request, Response } from "express";

// some useful database functions in here:
import { createEvent, getAllEvents } from "./database";
import { Event, weeklyRetentionObject } from "../../client/src/models/event";
import { ensureAuthenticated, validateMiddleware } from "./helpers";
import { OneHour, OneDay, OneWeek } from "./timeFrames"

const today = new Date (new Date().toDateString()).getTime();

import {
  shortIdValidation,
  searchValidation,
  userFieldsValidator,
  isUserValidator,
} from "./validators";
const router = express.Router();

// Routes

interface Filter {
  sorting: string;
  type: string;
  browser: string;
  search: string;
  offset: number;
}

router.get("/all", (req: Request, res: Response) => {
  const events: Event[] = getAllEvents();
  res.json(events);
});

router.get("/all-filtered", (req: Request, res: Response) => {
  const filters: Partial<Filter> = req.query;
  let events: Event[] = [...getAllEvents()];
  let more = false;
  if(filters.type) {
    events = events.filter((event: Event) => event.name === filters.type);
  }
  if(filters.browser) {
    events = events.filter((event: Event) => event.browser === filters.browser);
  }
  if(filters.search) {
    const regex: RegExp = new RegExp(filters.search, "i");
    events = events.filter((event) => {
      return Object.keys(event).map(key => {
        if(typeof event[key] === "string") {
          return regex.test(event[key] as string) ? true : false
        }
        return false;
      }).includes(true);
      // handle search of date or geolocation
    });
  }
  if(filters.sorting) {
    events.sort((firstEvent: Event, secondEvent: Event) =>
      filters.sorting === "-date" ?
        secondEvent.date - firstEvent.date :
        firstEvent.date - secondEvent.date
    );
  }
  if(filters.offset && filters.offset < events.length) {
    events = events.slice(0, filters.offset);
    more = true;
  }
  res.json({events, more});
});

router.get("/by-days/:offset", (req: Request, res: Response) => {
  const offset = req.params.offset;
  const weeklySessions: {date: number, uniqueSessions: string[]}[] = [];
  for(let i = 6; i >= 0; i--) {
    weeklySessions.push(
      {
        date: (today - parseInt(offset) * OneDay - i * OneDay),
        uniqueSessions: []
      }
    );
  }
  const addUniqueSessions = (day: number, sessionId: string) => {
    if(weeklySessions[day].uniqueSessions.length === 0 || !weeklySessions[day].uniqueSessions.includes(sessionId)) {
      weeklySessions[day].uniqueSessions.push(sessionId);
    }
  };
  const events: Event[] = getAllEvents();
  events.forEach(event => {
    if(event.date < weeklySessions[6].date + OneDay) {
      for(let i = 6; i >= 0; i--){
        if(event.date > weeklySessions[i].date) {
           return addUniqueSessions(i, event.session_id);
        }
      }
    }
  });
  res.json(weeklySessions.map(day => ({date: new Date(day.date).toDateString(), count: day.uniqueSessions.length})));
});

router.get("/by-hours/:offset", (req: Request, res: Response) => {
  const offset = req.params.offset;
  const dailySessions: {hour: number, uniqueSessions: string[]}[] = [];
  for(let i = 0; i < 24; i++) {
    dailySessions.push(
      {
        hour: (today - parseInt(offset) * OneDay + i * OneHour),
        uniqueSessions: []
      }
    );
  }
  const addUniqueSessions = (hour: number, sessionId: string) => {
    if(dailySessions[hour].uniqueSessions.length === 0 || !dailySessions[hour].uniqueSessions.includes(sessionId)) {
      dailySessions[hour].uniqueSessions.push(sessionId);
    }
  };
  const events: Event[] = getAllEvents();
  events.forEach(event => {
    if(event.date < dailySessions[0].hour + OneDay) {
      for(let i = 23; i >= 0; i--){
        if(event.date > dailySessions[i].hour) {
           return addUniqueSessions(i, event.session_id);
        }
      }
    }
  });
  res.json(dailySessions.map(day => {
    const nettoHour: number = new Date(day.hour).getHours();
    return {
      hour: `${nettoHour < 10 ? "0"+nettoHour : nettoHour}:00`,
      count: day.uniqueSessions.length
    }
  }));
});

router.get("/today", (req: Request, res: Response) => {
  res.send("/today")
});

router.get("/week", (req: Request, res: Response) => {
  res.send("/week")
});

router.get("/retention", (req: Request, res: Response) => {
  const events: Event[] = getAllEvents();
  const dayZero = Date.parse(new Date(parseInt(req.query.dayZero)).toDateString());
  const weeksFromZero = Math.ceil((today - dayZero + (OneHour * 6)) / OneWeek);
  const weeklySignups: string[][] = [];
  const weeklyLogins: string[][] = [];
  const retentionData: weeklyRetentionObject[] = [];

  for(let i = 0; i < weeksFromZero; i++) {
    retentionData.push(
    {
        registrationWeek: i, 
        newUsers: 0, 
        weeklyRetention: new Array(weeksFromZero - i).fill(100, 0, 1).fill(0, 1, weeksFromZero - i),
        start: new Date(dayZero + (OneWeek * i) + (OneHour * 6)).toDateString(),
        end: new Date(dayZero + (OneWeek * (i + 1)) + (OneHour * 6) - OneDay).toDateString()
      }
    );
    weeklySignups.push([]);
    weeklyLogins.push([]);
  }

  const sortEvents = (event: Event, array: string[][]) => {
    for(let i = 0; i < retentionData.length - 1; i++) {
      if(event.date < Date.parse(retentionData[i + 1].start)) {
        event.name === "signup" && retentionData[i].newUsers++;
        return array[i].push(event.distinct_user_id);
      }
    }
    event.name === "signup" && retentionData[retentionData.length - 1].newUsers++;
    return array[retentionData.length - 1].push(event.distinct_user_id);
  }

  events.forEach(event => {
    if(event.date > dayZero) {
      if(event.name === "signup") {
        sortEvents(event, weeklySignups);
      } else if(event.name === "login") {
        sortEvents(event, weeklyLogins);
      }
    }
  });

  for(let week = 0; week < weeklySignups.length - 1; week++) {
    weeklySignups[week].forEach(user => {
      for(let nextWeek = week + 1; nextWeek < weeklySignups.length; nextWeek++) {
        if(weeklyLogins[nextWeek].includes(user)) {
          retentionData[week].weeklyRetention[nextWeek - week]++;
        }
      }
    });
    for(let nextWeek = 1; nextWeek < retentionData[week].weeklyRetention.length; nextWeek++) {
      retentionData[week].weeklyRetention[nextWeek] = Math.round(
        retentionData[week].weeklyRetention[nextWeek] * 100 / retentionData[week].newUsers
      );
    }
  }
  res.json(retentionData)
});

router.get("/:eventId",(req : Request, res : Response) => {
  res.send("/:eventId")
});

router.post("/", (req: Request, res: Response) => {
  const event: Event = req.body;
  try {
    createEvent(event);
    res.send("Event added successfully");
  } catch (err) {
    res.send("Failed to add event");
  }
});

router.get("/chart/os",(req: Request, res: Response) => {
  const events: Event[] = getAllEvents();
  const osUsage: {name: string, usage: number}[] = [];
  let index;
  events.forEach(event => {
    index = osUsage.findIndex(os => os.name === event.os);
    index >= 0 ? osUsage[index].usage++ : osUsage.push({name: event.os, usage: 1});
  })
  res.json(osUsage);
})

router.get("/chart/pageview/",(req: Request, res: Response) => {
  const events: Event[] = getAllEvents();
  const pageViews: {name: string, views: number}[] = [];
  let index;
  events.forEach(event => {
    index = pageViews.findIndex(page => page.name === event.url.substring(21));
    index >= 0 ? pageViews[index].views++ : pageViews.push({name: event.url.substring(21), views: 1});
  })
  res.json(pageViews);
})

router.get("/chart/timeonurl/:time",(req: Request, res: Response) => {
  res.send("/chart/timeonurl/:time")
})

router.get("/chart/geolocation/:time",(req: Request, res: Response) => {
  res.send("/chart/geolocation/:time")
})

export default router;

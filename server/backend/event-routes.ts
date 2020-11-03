///<reference path="types.ts" />

import express from "express";
import { Request, Response } from "express";

// some useful database functions in here:
import { createEvent, getAllEvents } from "./database";
import { Event, weeklyRetentionObject } from "../../client/src/models/event";
import { ensureAuthenticated, validateMiddleware } from "./helpers";
import { OneHour, OneDay, OneWeek } from './timeFrames'

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

router.get('/all', (req: Request, res: Response) => {
  const events: Event[] = getAllEvents();
  res.json(events);
});

router.get('/all-filtered', (req: Request, res: Response) => {
  const filters: Partial<Filter> = req.query;
  let events: Event[] = getAllEvents();
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
      return Object.keys(event).map(key => 
        regex.test(event[key].toString()) ? true : false
      ).includes(true);
      // handle search of date or geolocation
    });
  }
  if(filters.sorting) {
    events.sort((firstEvent: Event, secondEvent: Event) =>
      filters.sorting === "+date" ?
        firstEvent.date - secondEvent.date :
        secondEvent.date - firstEvent.date
    );
  }
  if(filters.offset && filters.offset < events.length) {
    events = events.slice(0, filters.offset);
    more = true;
  }
  res.json({events, more});
});

router.get('/by-days/:offset', (req: Request, res: Response) => {
  const offset = req.params.offset;
  const today = new Date (new Date().toDateString()).getTime();
  const weeklySessions: {date: number, uniqueSessions: string[]}[] = [];
  for(let i = 6; i >= 0; i--) {
    weeklySessions.push(
      {
        date: (today - parseInt(offset) * OneDay - i * OneDay),
        uniqueSessions: []
      });
  }
  const addUniqueSessions = (day: number, sessionId: string) => {
    if(weeklySessions[day].uniqueSessions.length === 0 || !weeklySessions[day].uniqueSessions.includes(sessionId)) {
      weeklySessions[day].uniqueSessions.push(sessionId);
    }
  };
  let events: Event[] = getAllEvents();
  events.forEach(event => {
    if(event.date < weeklySessions[6].date + OneDay) {
      if(event.date > weeklySessions[6].date) {
        addUniqueSessions(6, event.session_id);
      } else if(event.date > weeklySessions[5].date) {
        addUniqueSessions(5, event.session_id);
      } else if(event.date > weeklySessions[4].date) {
        addUniqueSessions(4, event.session_id);
      } else if(event.date > weeklySessions[3].date) {
        addUniqueSessions(3, event.session_id);
      } else if(event.date > weeklySessions[2].date) {
        addUniqueSessions(2, event.session_id);
      } else if(event.date > weeklySessions[1].date) {
        addUniqueSessions(1, event.session_id);
      } else if(event.date > weeklySessions[0].date) {
        addUniqueSessions(0, event.session_id);
      }
    }
  });
  res.json(weeklySessions.map(day => ({date: new Date(day.date).toDateString(), count: day.uniqueSessions.length})));
});

router.get('/by-hours/:offset', (req: Request, res: Response) => {
  res.send('/by-hours/:offset')
});

router.get('/today', (req: Request, res: Response) => {
  res.send('/today')
});

router.get('/week', (req: Request, res: Response) => {
  res.send('/week')
});

router.get('/retention', (req: Request, res: Response) => {
  const {dayZero} = req.query
  res.send('/retention')
});
router.get('/:eventId',(req : Request, res : Response) => {
  res.send('/:eventId')
});

router.post('/', (req: Request, res: Response) => {
  const event: Event = req.body;
  try {
    createEvent(event);
    res.send("Event added successfully");
  } catch (err) {
    res.send("Failed to add event");
  }
});

router.get('/chart/os/:time',(req: Request, res: Response) => {
  res.send('/chart/os/:time')
})

  
router.get('/chart/pageview/:time',(req: Request, res: Response) => {
  res.send('/chart/pageview/:time')
})

router.get('/chart/timeonurl/:time',(req: Request, res: Response) => {
  res.send('/chart/timeonurl/:time')
})

router.get('/chart/geolocation/:time',(req: Request, res: Response) => {
  res.send('/chart/geolocation/:time')
})


export default router;

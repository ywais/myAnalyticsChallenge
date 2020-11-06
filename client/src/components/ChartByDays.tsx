import React, { useEffect, useState } from "react";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"; 
import axios from "axios";

interface dailyEvents {
  date: string;
  count: number;
}

const ChartByDays: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [events, setEvents] = useState<dailyEvents[]>([]);
  
  const getData = async (offset: number) => {
    const { data } = await axios.get(`http://localhost:3001/events/by-days/${offset}`);
    setEvents(data);
  }

  useEffect(() => {
    const today = new Date();
    const offset = Math.floor((today.getTime() - selectedDate!.getTime()) / (1000 * 3600 * 24));
    getData(offset);
  }, [selectedDate])

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="chartTile">
      <div className="chartTileHeader">
        <h1>Sessions (Days):</h1>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="by-days-date-picker"
            label="Pick chart's last day"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className="chartTileLineChart">
        <LineChart width={730} height={250} data={events}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#3f51b5" />
        </LineChart>
      </div>
    </div>
  );
};

export default ChartByDays;

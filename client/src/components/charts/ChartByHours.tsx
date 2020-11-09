import React, { useEffect, useState } from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import { AnalyticsChartHeader } from '../Styled';
import 'date-fns';

interface dailyEvents {
  hour: string;
  count: number;
}

const ChartByHours: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [events, setEvents] = useState<dailyEvents[]>([]);

  const getData = async (offset: number) => {
    const { data } = await axios.get(`http://localhost:3001/events/by-hours/${offset}`);
    setEvents(data);
  };

  useEffect(() => {
    const today = new Date();
    const offset = Math.floor((today.getTime() - selectedDate!.getTime()) / (1000 * 3600 * 24));
    getData(offset);
  }, [selectedDate]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className='chartTile'>
      <AnalyticsChartHeader>
        <h1>Sessions (Hours):</h1>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant='inline'
            format='dd/MM/yyyy'
            margin='normal'
            style={{ maxWidth: '150px' }}
            id='by-hours-date-picker'
            label="Pick chart's day"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </AnalyticsChartHeader>
      <div className='chartTileLineChart'>
        <ResponsiveContainer width='100%' height={250}>
          <LineChart
            data={events}
            margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='hour' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='count' stroke='#00C853' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartByHours;

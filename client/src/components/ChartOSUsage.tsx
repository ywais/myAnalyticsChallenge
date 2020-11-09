import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { AnalyticsChartHeader } from './Styled';
import { Event } from '../models/event';
import axios from 'axios';

const ChartOSUsage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const getData = async () => {
    const { data } = await axios.get('http://localhost:3001/events/chart/os');
    setEvents(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='chartTile'>
      <AnalyticsChartHeader>
        <h1>Usage by OS:</h1>
      </AnalyticsChartHeader>
      <div className='chartTilePieChart'>
        <ResponsiveContainer width='100%' height={300}>
          <PieChart>
            <Pie dataKey='usage' data={events} cx='50%' cy='50%' outerRadius='60%' fill='#3f51b5' label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartOSUsage;

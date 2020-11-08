import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts"; 
import { Event } from "../models/event";
import axios from "axios";

const ChartPageViews: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  
  const getData = async () => {
    const { data } = await axios.get("http://localhost:3001/events/chart/pageview");
    setEvents(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="chartTile">
      <div className="chartTileHeader">
        <h1>Total views in pages:</h1>
      </div>
      <div className="chartTilePieChart">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie dataKey="views" data={events} cx="50%" cy="50%" outerRadius={80} fill="#00C853" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartPageViews;

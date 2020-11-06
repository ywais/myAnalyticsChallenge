import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts"; 
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
      <div className="chartTileLineChart">
        <PieChart width={400} height={400}>
          <Pie dataKey="views" isAnimationActive={false} data={events} cx={200} cy={200} outerRadius={80} fill="#00C853" label />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default ChartPageViews;

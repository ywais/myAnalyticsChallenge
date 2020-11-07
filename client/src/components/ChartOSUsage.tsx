import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts"; 
import { Event } from "../models/event";
import axios from "axios";

const ChartOSUsage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  
  const getData = async () => {
    const { data } = await axios.get("http://localhost:3001/events/chart/os");
    setEvents(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="chartTile">
      <div className="chartTileHeader">
        <h1>Usage by OS:</h1>
      </div>
      <div className="chartTilePieChart">
        <PieChart width={400} height={400}>
          <Pie dataKey="usage" isAnimationActive={false} data={events} cx={200} cy={200} outerRadius={80} fill="#3f51b5" label />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default ChartOSUsage;

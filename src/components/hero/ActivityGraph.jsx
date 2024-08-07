import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Select, MenuItem } from '@mui/material';

// Sample data
const dataDaily = [
  { day: 'Day 1', revenue1: 5, revenue2: 10, revenue3: 15 },
  { day: 'Day 2', revenue1: 8, revenue2: 12, revenue3: 20 },
  { day: 'Day 3', revenue1: 7, revenue2: 14, revenue3: 13 },
  { day: 'Day 4', revenue1: 12, revenue2: 16, revenue3: 18 },
  { day: 'Day 5', revenue1: 10, revenue2: 15, revenue3: 20 },
];

const dataWeekly = [
  { day: 'Week 1', revenue1: 25, revenue2: 50, revenue3: 70 },
  { day: 'Week 2', revenue1: 35, revenue2: 60, revenue3: 80 },
  { day: 'Week 3', revenue1: 40, revenue2: 70, revenue3: 90 },
  { day: 'Week 4', revenue1: 50, revenue2: 80, revenue3: 100 },
];

const dataMonthly = [
  { day: 'Month 1', revenue1: 100, revenue2: 150, revenue3: 200 },
  { day: 'Month 2', revenue1: 120, revenue2: 170, revenue3: 210 },
  { day: 'Month 3', revenue1: 140, revenue2: 180, revenue3: 220 },
];

// Custom shape for bars
const RoundedBar = (props) => {
  const { x, y, width, height, fill } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={18} // radius for both top and bottom
      />
    </g>
  );
};

const ActivityGraph = () => {
  const [timeframe, setTimeframe] = useState('daily');
  const data = timeframe === 'daily' ? dataDaily : timeframe === 'weekly' ? dataWeekly : dataMonthly;

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  // Determine y-axis tick values based on timeframe
  const yAxisTicks = timeframe === 'daily'
    ? [0, 5, 10, 15, 20]
    : timeframe === 'weekly'
      ? [0, 25, 50, 75, 100]
      : [0, 100, 150, 200, 250];

  return (
    <div>
      <div className='flex justify-between'>
        <div>
          Activity
        </div>
        <div>
          <Select className='bg-slate-400 h-8 mb-4' value={timeframe} onChange={handleTimeframeChange} >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="day" />
          <YAxis
            domain={[0, 'auto']}
            ticks={yAxisTicks}
            tickFormatter={(value) => `${value}k`} // Append "k" to tick values
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue1" fill="#8884d8" shape={<RoundedBar />} />
          <Bar dataKey="revenue2" fill="#8884d8" shape={<RoundedBar />} />
          <Bar dataKey="revenue3" fill="#8884d8" shape={<RoundedBar />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityGraph;

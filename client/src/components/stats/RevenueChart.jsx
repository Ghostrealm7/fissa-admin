import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Corporate: 400000,
    Home: 340000,
  },
  {
    name: "Feb",
    Corporate: 440000,
    Home: 350000,
  },
  {
    name: "Mar",
    Corporate: 540000,
    Home: 360000,
  },
  {
    name: "Apr",
    Corporate: 640000,
    Home: 370000,
  },
  {
    name: "May",
    Corporate: 600000,
    Home: 380000,
  },
  {
    name: "Jun",
    Corporate: 670000,
    Home: 390000,
  },
  {
    name: "July",
    Corporate: 700000,
    Home: 400000,
  },
  {
    name: "Aug",
    Corporate: 740000,
    Home: 440000,
  },
  {
    name: "Sep",
    Corporate: 690000,
    Home: 420000,
  },
  {
    name: "Oct",
    Corporate: 710000,
    Home: 440000,
  },
  {
    name: "Nov",
    Corporate: 700000,
    Home: 450000,
  },
  {
    name: "Dec",
    Corporate: 740000,
    Home: 554300,
  },
];

export default function RevenueChart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm shadow-lg flex flex-col flex-1">
      <strong className="text-gray-500 text-sm font-bold">
        Revenue Generated
      </strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Corporate" fill="#3376BD" />
            <Bar dataKey="Home" fill="#52489C" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

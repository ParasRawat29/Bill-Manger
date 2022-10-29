import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// name - > date
//

function EveryMonthLine() {
  const { bills } = useSelector((state) => state.bill);
  const [maxVal, setMaxVal] = useState(0);

  useEffect(() => {
    let m = 0;
    bills.forEach((bill) => {
      if (Number(bill.amount) > m) m = Number(bill.amount);
    });
    setMaxVal(m);
  }, [bills]);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={bills}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis domain={[0, maxVal]} />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EveryMonthLine;

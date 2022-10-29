import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { convertObjToArray } from "../helper";

function CatPieChart() {
  const { categories } = useSelector((state) => state.categories);
  const [data, setData] = useState(convertObjToArray(categories));
  const [totalAmount, setTotalAmount] = useState("...");
  useEffect(() => {
    setData(convertObjToArray(categories));
  }, [categories]);

  useEffect(() => {
    let t = 0;
    data.forEach((d) => {
      t += d.value;
    });
    setTotalAmount(t);
  }, [data]);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#ef3164",
    "#1ceed9",
    "#7e6fbe",
    "#e78522",
    "#77b011",
  ];

  return (
    <PieChart width={200} height={220}>
      <Pie
        data={totalAmount === 0 ? [{ name: "ALL paid", value: 10 }] : data}
        cx={95}
        cy={100}
        innerRadius={70}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={totalAmount === 0 ? "green" : COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <text
        x={95}
        y={70}
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight={500}
        fill="gray"
        fontFamily="Roboto"
        fontSize="1rem"
      >
        {totalAmount === 0 ? <>ALL PAID</> : <>Total Bill</>}
      </text>

      <text
        x={95}
        y={120}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="black"
        fontWeight={700}
        fontFamily="Roboto"
        fontSize="1.7rem"
        width="100px"
      >
        {totalAmount > 0 ? "₹ " + totalAmount : "✔️"}
      </text>
      {totalAmount > 0 && <Tooltip />}
    </PieChart>
  );
}

export default CatPieChart;

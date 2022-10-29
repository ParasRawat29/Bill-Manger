import React from "react";
import CatPieChart from "./CatPieChart";
import MonthlyBudget from "./MonthlyBudget";

function MonthyExpPie() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div className="chart">
        <CatPieChart />
      </div>
      <div>
        <MonthlyBudget />
      </div>
    </div>
  );
}

export default MonthyExpPie;

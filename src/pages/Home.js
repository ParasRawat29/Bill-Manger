import React from "react";
import { useEffect } from "react";
import Bills from "../components/Bills";
import EveryMonthLine from "../components/EveryMonthLine";
import MonthyExpPie from "../components/MonthyExpPie";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "calc(100vh - 50px)",
        width: "100%",
      }}
    >
      <section
        className="left"
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <MonthyExpPie />
        <EveryMonthLine />
      </section>
      <section
        className="right"
        style={{
          width: "60%",
          overflowY: "scroll",
          borderLeft: "1px solid gray",
        }}
      >
        <Bills />
      </section>
    </div>
  );
}

export default Home;

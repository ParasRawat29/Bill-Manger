import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { calculateCategories } from "../helper";
import SingleBill from "./SingleBill";

function BillsList({ currSelectedCat, viewPaid }) {
  const { bills } = useSelector((state) => state.bill);
  const [filteredBills, setFilteredBills] = useState(bills);

  useEffect(() => {
    calculateCategories();
    localStorage.setItem("bills", JSON.stringify(bills));
    setFilteredBills(bills);
  }, [bills]);

  useEffect(() => {
    const temp = bills.filter((item) => {
      if (
        (item.category.toLowerCase() === currSelectedCat.toLowerCase() ||
          currSelectedCat === "all") &&
        ((viewPaid && item.paid) || !viewPaid)
      ) {
        return item;
      }
    });
    setFilteredBills(temp || []);
  }, [currSelectedCat, viewPaid, bills]);

  return (
    <div
      className="billsListWrapper"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {filteredBills && filteredBills.length === 0 && <h2>No Bills Found</h2>}
      {filteredBills &&
        filteredBills.length > 0 &&
        filteredBills.map((item) => {
          return (
            <SingleBill
              key={item.id}
              id={item.id}
              category={item.category}
              amount={item.amount}
              description={item.description}
              date={item.date}
              paid={item.paid}
            />
          );
        })}
    </div>
  );
}

export default BillsList;

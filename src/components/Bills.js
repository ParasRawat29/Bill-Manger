import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { calculateCanBePaid, calculateCategories } from "../helper";
import BillsList from "./BillsList";
import EditBillCard from "./EditBillCard";

function Bills() {
  const [isAdd, setIsAdd] = useState(false);
  const { categories } = useSelector((state) => state.categories);
  const [currSelectedCat, setCurrSelectedCat] = useState("all");
  const [viewPaid, setViewPaid] = useState(false);

  const handleCategoryChange = (e) => {
    setCurrSelectedCat(e.target.value);
  };

  useEffect(() => {
    calculateCategories();
    calculateCanBePaid();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <header
        className="header"
        style={{
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          width: "100%",
          maxWidth: "2000px",
        }}
      >
        <div className="filters">
          <div className="catfilter">
            <select
              name="category"
              value={currSelectedCat}
              onChange={handleCategoryChange}
              style={{
                fontSize: "1rem",
                cursor: "pointer",
                padding: "3px 10px",
                outline: "none",
              }}
            >
              <option value="all">All</option>
              {Object.keys(categories).map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="viewPaidFilter">
            <label htmlFor="viewPaid">View Paid : </label>
            <input
              id="viewPaid"
              type="checkbox"
              name="viewPaid"
              value={viewPaid}
              onChange={(e) => {
                console.log(e.target.checked);
                setViewPaid(e.target.checked);
              }}
            />
          </div>
        </div>
        <h1 style={{ fontFamily: "Roboto", textAlign: "center" }}>Bills</h1>
        <button
          className="addBtn"
          style={{
            fontSize: "1.1rem",
            padding: "0px 10px",
            background: isAdd ? "indianred" : "var(--greenBtn)",
            color: "white",
            fontWeight: 700,
          }}
          onClick={() => setIsAdd(!isAdd)}
        >
          {isAdd ? <>Close</> : <>Add</>}
        </button>
      </header>
      <div className="main">
        {isAdd && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3>Add New Bill</h3>
            <EditBillCard setIsAdd={setIsAdd} />
          </div>
        )}
        <p className="info">
          Highlighted card shows that bill can be paid considering the current
          budget
        </p>
        <BillsList currSelectedCat={currSelectedCat} viewPaid={viewPaid} />
      </div>
    </div>
  );
}

export default Bills;

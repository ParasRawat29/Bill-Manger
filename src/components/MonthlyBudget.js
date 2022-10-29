import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsAction } from "../store/userDetails";

function MonthlyBudget() {
  const [edit, setEdit] = useState(false);
  const { budget } = useSelector((state) => state.userDetails);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.value.trim() === "") {
      alert("budget cannot be 0 ");
      return;
    }
    dispatch(userDetailsAction.updateBudget(e.target.value));
    localStorage.setItem("budget", e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "200px",
        minWidth: "200px",
        width: "fit-content",
        maxWidth: "300px",
      }}
    >
      <p
        style={{
          color: "gray",
          fontFamily: "Roboto",
          fontSize: "1rem",
        }}
      >
        Monthly Budget
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        {!edit ? (
          <>
            <h4
              style={{
                fontWeight: 700,
                fontFamily: "Roboto",
                fontSize: "1.7rem",
                margin: "1rem 0",
              }}
            >
              ₹ {budget}
            </h4>
            <p
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={() => setEdit(true)}
            >
              ✏️
            </p>
          </>
        ) : (
          <>
            <p style={{ fontFamily: "Roboto", fontSize: "2rem" }}>₹</p>
            <input
              type="number"
              name="budget"
              onChange={handleChange}
              value={budget}
              style={{
                border: "none",
                borderBottom: "1px solid black",
                fontWeight: 700,
                fontFamily: "Roboto",
                fontSize: "2rem",
                margin: "1rem 0",
                width: "170px",
                outline: "none",
              }}
              max="1000000000"
            />
            <p
              style={{ marginLeft: "10px", cursor: "pointer" }}
              onClick={() => setEdit(false)}
            >
              ✔️
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default MonthlyBudget;

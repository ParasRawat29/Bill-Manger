import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { billActions } from "../store/billReducer";

import EditBillCard from "./EditBillCard";
function SingleBill({ id, category, amount, description, date, paid }) {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  return isEdit ? (
    <EditBillCard
      id={id}
      setIsEdit={setIsEdit}
      category={category}
      amount={amount}
      description={description}
      date={date}
    />
  ) : (
    <div
      className="billWrapper"
      style={{
        minWidth: "250px",
        width: "250px",
        margin: "15px 5px",
        padding: "5px",
        borderRadius: "10px",
        border: "1px solid black",
      }}
    >
      <span className="category">{category}</span>

      <h4
        className="date"
        style={{
          float: "right",
          clear: "both",
          display: "inline-block",
          color: "gray",
          fontFamily: "Roboto",
        }}
      >
        {new Date(date).toLocaleDateString()}
      </h4>

      <h2
        className="amount"
        style={{
          margin: "10px 0px",
          fontSize: "1.7rem",
          textAlign: "center",
          color: "darkgreen",
        }}
      >
        ₹ {amount}
      </h2>

      <p className="description" style={{ padding: "5px", margin: "10px 0" }}>
        {description}
      </p>

      <div className="actionBtnsWrapper" style={{ textAlign: "center" }}>
        {paid ? (
          <button
            style={{
              fontSize: "0.8rem",
              padding: "4px 15px",
              borderRadius: "5px",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
              color: "black",
              border: "1px solid black",
              margin: "7px 0",
            }}
            onClick={() => dispatch(billActions.markPaid({ id, paid: false }))}
          >
            Mark As Unpaid
          </button>
        ) : (
          <button
            style={{
              fontSize: "0.8rem",
              padding: "4px 15px",
              borderRadius: "5px",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
              color: "var(--green)",
              border: "1px solid var(--green)",
              margin: "7px 0",
            }}
            onClick={() => dispatch(billActions.markPaid({ id, paid: true }))}
          >
            Mark As Paid
          </button>
        )}
        <br />
        {!paid && (
          <button
            style={{
              fontSize: "0.8rem",
              padding: "4px 15px",
              borderRadius: "5px",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
              color: "var(--purple)",
              border: "1px solid var(--purple)",
              margin: "0px 5px",
            }}
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
        <button
          style={{
            fontSize: "0.8rem",
            padding: "4px 15px",
            borderRadius: "5px",
            fontWeight: "bolder",
            fontFamily: "sans-serif",
            color: "indianred",
            margin: "0px 5px",
            border: "1px solid indianred",
          }}
          onClick={() => dispatch(billActions.deleteBill(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleBill;

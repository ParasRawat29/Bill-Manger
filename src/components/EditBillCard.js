import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { billActions } from "../store/billReducer";
import { v4 as uuidv4 } from "uuid";

function EditBillCard({
  id,
  setIsEdit,
  category,
  amount,
  description,
  date,
  setIsAdd,
}) {
  const [newData, setNewData] = useState({
    category: category,
    date: date,
    description: description,
    amount: amount,
    paid: false,
  });
  const dispatch = useDispatch();

  const handelChange = (e) => {
    const tag = e.target.name;
    let val = e.target.value;
    setNewData((pre) => {
      return {
        ...pre,
        [tag]: val,
      };
    });
  };

  const handleSubmit = (id) => {
    if (
      newData.category.trim() === "" ||
      !newData.date ||
      newData.description.trim() === "" ||
      !newData.amount
    ) {
      alert("Fill all the data");
      return;
    }
    if (id) {
      dispatch(billActions.updateBill({ id, data: newData }));
      setIsEdit(false);
    } else {
      dispatch(billActions.addBill({ id: uuidv4(), ...newData }));
      setIsAdd(false);
    }
  };

  return (
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
      <input
        onChange={handelChange}
        value={newData.category}
        type="text"
        name="category"
        style={{
          border: "none",
          borderBottom: "1px solid black",
          width: "50%",
          outline: "none",
          fontSize: "0.9rem",
          padding: "0 5px",
        }}
        placeholder="category"
        required
      />
      <input
        onChange={handelChange}
        value={new Date(newData.date).toLocaleDateString("en-ca")}
        type="date"
        name="date"
        style={{
          width: "45%",
          float: "right",
          clear: "both",
        }}
        required
        max={new Date(Date.now()).toLocaleDateString("en-ca")}
      />
      <input
        onChange={handelChange}
        value={newData.amount}
        type="number"
        style={{
          border: "none",
          borderBottom: "1px solid black",
          outline: "none",
          fontSize: "1.7rem",
          margin: "20px auto 10px 0",
          color: "darkgreen",
          width: "100%",
          padding: "0 10px",
        }}
        required
        name="amount"
        placeholder="Amount"
      />
      <textarea
        onChange={handelChange}
        value={newData.description}
        rows={3}
        style={{ width: "100%", padding: "5px", resize: "none" }}
        name="description"
        required
      ></textarea>
      <button
        style={{
          fontSize: "0.8rem",
          padding: "4px 15px",
          borderRadius: "5px",
          fontWeight: "bolder",
          fontFamily: "sans-serif",
          color: "var(--purple)",
          border: "1px solid var(--purple)",
        }}
        onClick={() => {
          handleSubmit(id);
        }}
      >
        {id ? <>Save</> : <>Add</>}
      </button>
    </div>
  );
}

export default EditBillCard;

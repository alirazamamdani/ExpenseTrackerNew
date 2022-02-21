import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Addtransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const {addTransaction} = useContext(GlobalContext)

  const HandleSubmit = (e) => {
    e.preventDefault();

    const newTransction = {
      id : Math.floor(Math.random() * 10000000),
      text : text,
      amount : Number(amount)
    }
    addTransaction(newTransction);

    setText("")
    setAmount("")
  }

  return (
    <div>
      {" "}
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={HandleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            autoComplete="off"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            autoComplete="off"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

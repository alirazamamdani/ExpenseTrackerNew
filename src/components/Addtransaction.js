import React, { useState } from 'react'

export const Addtransaction = () => {
    const [text , setText] =  useState("");
    const [amount , setAmount] = useState("")
  return (
    <div> <h3>Add new transaction</h3>
    <form id="form">
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" id="text" autoComplete='off' value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input type="number" value={amount} autoComplete="off" onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
  </div>
  )
}

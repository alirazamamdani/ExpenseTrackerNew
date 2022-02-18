import React from "react";

export const Transactionlist = ({ transactions }) => {
    const sign = transactions.amount < 0 ? '-' : '+';
  return (
    <li className={transactions.amount < 0 ? 'minus' : 'plus'} key={transactions.id} >
      {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span>
      <button className="delete-btn">X</button>
    </li>
  );
};

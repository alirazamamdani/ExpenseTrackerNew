import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
export const Transactionlist = ({ transactions }) => {
    const sign = transactions.amount < 0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext)
  return (
    <li className={transactions.amount < 0 ? 'minus' : 'plus'} key={transactions.id} >
      {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transactions.id)}>X</button>
    </li>
  );
};

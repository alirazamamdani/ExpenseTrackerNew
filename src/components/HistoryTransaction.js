import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transactionlist } from "./Transactionlist";
export const HistoryTransaction = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          return <Transactionlist key={transaction.id} transactions={transaction} />;
        })}
      </ul>
    </div>
  );
};

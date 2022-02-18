import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { HistoryTransaction } from "./components/HistoryTransaction";
import { Addtransaction } from "./components/Addtransaction";

import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <HistoryTransaction />
        <Addtransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

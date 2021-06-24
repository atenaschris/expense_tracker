import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

import React, { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Desk 2019",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];
const App = () => {
  const [newitems, setNewItem] = useState(DUMMY_EXPENSES);

  const saveExpenseDataFromNewExpense = (dataPassedThroughNewExpense) => {
    setNewItem((prewExpenses) => {
      return [dataPassedThroughNewExpense, ...prewExpenses];
    });
  };

  return (
    <div>
      <NewExpense
        onSaveDataHandlerFromNewExpense={saveExpenseDataFromNewExpense}
      />
      <Expenses data={newitems} />
    </div>
  );
};

export default App;

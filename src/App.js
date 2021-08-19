import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

import React, { useEffect, useState } from "react";
import useHttp from "./hooks/use-http";

const App = () => {
  const {
    isLoading: getAllExpensesIsLoading,
    error: getAllExpensesError,
    didSubmit: getAllexpensesDidSubmit,
    fetchData: fetchExpenses,
  } = useHttp();

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const transformData = (data) => {
      console.log(data);
      const expensesData = [];

      for (const key in data) {
        expensesData.push({
          id: key,
          ...data[key],
        });
      }

      const formattedExpenses = expensesData.map((el) => {
        return { ...el, date: new Date(el.date) };
      });

      console.log(formattedExpenses);

      setExpenses(formattedExpenses);

      console.log(expensesData);
    };

    fetchExpenses(
      {
        url: "https://react-expenses-tracker-default-rtdb.firebaseio.com/expenses.json",
      },
      transformData
    );
  }, [fetchExpenses]);

  const saveExpenseDataFromNewExpense = (dataPassedThroughNewExpense) => {
    console.log(dataPassedThroughNewExpense);
    const formattedDataPassedThroughNewExpense = {
      ...dataPassedThroughNewExpense,
      date: new Date(dataPassedThroughNewExpense.date),
    };
    console.log(formattedDataPassedThroughNewExpense);
    setExpenses((prevExpenses) =>
      prevExpenses.concat(formattedDataPassedThroughNewExpense)
    );
  };

  return (
    <>
      <NewExpense onAddingNewExpense={saveExpenseDataFromNewExpense} />
      {
        <Expenses
          isLoading={getAllExpensesIsLoading}
          error={getAllExpensesError}
          didSubmit={getAllexpensesDidSubmit}
          data={expenses}
        />
      }
    </>
  );
};

export default App;

import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import useHttp from "../../hooks/use-http";

const NewExpense = (props) => {
  const {
    isLoading: sendExpensesIsLoading,
    error: sendExpensesError,
    didSubmit: sendExpensesDidSubmit,
    fetchData: sendExpenses,
  } = useHttp();

  const transformData = (enteredExpenseData, fetchedNewExpenseData) => {
    console.log(enteredExpenseData, fetchedNewExpenseData);

    const generatedId = fetchedNewExpenseData.name;
    console.log(generatedId);
    const createdNewExpense = {
      id: generatedId,
      ...enteredExpenseData,
    };

    props.onAddingNewExpense(createdNewExpense);
  };

  const saveExpenseDataHandler = async (enteredExpenseData) => {
    sendExpenses(
      {
        url: "https://react-expenses-tracker-default-rtdb.firebaseio.com/expenses.json",
        method: "POST",
        body: {
         ...enteredExpenseData
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      transformData.bind(null, enteredExpenseData)
    );
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

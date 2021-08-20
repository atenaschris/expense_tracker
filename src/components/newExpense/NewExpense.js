import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../ui/LoadingSpinner";
import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const {
    isLoading: sendExpensesIsLoading,
    error: sendExpensesError,
    didSubmit: sendExpensesDidSubmit,
    fetchData: sendExpenses,
  } = useHttp();

  const [isMessageOpened,setIsMessageOpened] = useState(false);

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
          ...enteredExpenseData,
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      transformData.bind(null, enteredExpenseData)
    );
  };

  const closeMessageHandler = ()=>{
    setIsMessageOpened(true);
  }

  let content;

  if (sendExpensesIsLoading) {
    content = (
      <div className="loading-spinner-centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (sendExpensesError) {
    content = <p className="error-centered">{sendExpensesError}</p>;
  }

  if (!sendExpensesError && sendExpensesDidSubmit && !isMessageOpened) {
    content = (
      <div className={classes['error-control']}>
        <p className="error-centered">Request sent successfully!!</p>
        <button onClick={closeMessageHandler} className={classes.alternative}>x</button>
      </div>
    );
  }

  return (
    <div className={classes["new-expense"]}>
      {content}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

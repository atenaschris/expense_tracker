import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredtitle] = useState("");

  const [enteredAmount, setEnteredAmount] = useState("");

  const [enteredDate, setEnteredDate] = useState("");

  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  const titleChangeHandler = (event) => setEnteredtitle(event.target.value);

  /*  setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    }); */

  /* setUserInput((prevState)=>{return {...prevState,enteredTitle:event.target.value}}) */

  const amountChangeHandler = (event) => setEnteredAmount(event.target.value);

  /* setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */

  /* setUserInput((prevState)=>{return {...prevState,enteredAmount: event.target.value}}) */

  const dateChangeHandler = (event) => setEnteredDate(event.target.value);

  /* setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    }); */
  /* setUserInput((prevState)=>{return {...prevState,enteredDate:event.target.value} }) */
  let [errorMessage, setErrorMessage] = useState("");
  let [isOpened, changeIsOpened] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    function isInputValid(enteredTitle, enteredAmount, enteredDate) {
      if (enteredTitle === "" || enteredAmount === "" || enteredDate === "")
        return false;

      return true;
    }
    setErrorMessage(
      "Please, make sure you fill all the forms before submitting the form!!!"
    );
    const isInputValidd = isInputValid(
      enteredTitle,
      enteredAmount,
      enteredDate
    );
    
    if (isInputValidd) {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };
      
      props.onSaveExpenseData(expenseData);
      setEnteredtitle("");
      setEnteredAmount("");
      setEnteredDate("");
      changeIsOpened(!isOpened);
      setErrorMessage("");
    }
   
  };
  const changeIsOpededHandler = () => {
    changeIsOpened(!isOpened);
    setErrorMessage("");
  };

  return (
    <div>
      {<p className="new-expense-error"> {errorMessage}</p>}

      {isOpened && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                value={enteredTitle}
                type="text"
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                value={enteredAmount}
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                value={enteredDate}
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={changeIsOpededHandler}>Close</button>
            <button type="submit">Add Expenses</button>
          </div>
        </form>
      )}
      {!isOpened && (
        <button onClick={changeIsOpededHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default ExpenseForm;

import React, { useState } from "react";
import useInput from "../../hooks/use-input";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {

  let [isOpened, changeIsOpened] = useState(false);

  const validateTitleInput = (value) => {
    return value.trim() !== "" && value.trim().length < 30;
  };
  const validateAmountInput = (value) => {
    return value.trim() !== "" && value.trim().length < 30;
  };

  const validateDateInput = (value) => {
    return value.trim() !== "";
  };

  const {
    value: titleValue,
    error: titleHasError,
    isValid: titleIsValid,
    changeInputHandler: changeTitleInputHandler,
    blurInputHandler: blurTitleInputHandler,
    resetInput: resetInputTitle,
  } = useInput((value) => validateTitleInput(value));

  const {
    value: amountValue,
    error: amountHasError,
    isValid: amountIsValid,
    changeInputHandler: changeAmountInputHandler,
    blurInputHandler: blurAmountInputHandler,
    resetInput: resetInputAmount,
  } = useInput((value) => validateAmountInput(value));

  const {
    value: dateValue,
    error: dateHasError,
    isValid: dateIsValid,
    changeInputHandler: changeDateInputHandler,
    blurInputHandler: blurDateInputHandler,
    resetInput: resetInputDate,
  } = useInput((value) => validateDateInput(value));

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const expenseData = {
      id:Math.random().toString(),
      title: titleValue,
      amount: +amountValue,
      date: dateValue,
    };

    props.onSaveExpenseData(expenseData);

    resetInputTitle();
    resetInputAmount();
    resetInputDate();
    changeIsOpened((prevState) => !prevState);
  };
  const changeIsOpededHandler = () => {
    changeIsOpened((prevState) => !prevState);
  };

  let formIsValid = false;

  if (titleIsValid && amountIsValid && dateIsValid) {
    formIsValid = true;
  }

  return (
    <div>
      {isOpened && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={titleValue}
                onChange={changeTitleInputHandler}
                onBlur={blurTitleInputHandler}
              />
            </div>
            {titleHasError && (
              <p className="error">
                Cannot enter neither an empty value nor a value less than 30
                chars
              </p>
            )}
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={amountValue}
                onChange={changeAmountInputHandler}
                onBlur={blurAmountInputHandler}
              />
            </div>
            {amountHasError && (
              <p className="error">
                Cannot enter neither an empty value nor a value less than 30
                chars
              </p>
            )}
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={dateValue}
                onChange={changeDateInputHandler}
                onBlur={blurDateInputHandler}
                min="2019-01-01"
                max="2022-12-31"
              />
            </div>
            {dateHasError && (
              <p className="error">Cannot enter an empty value</p>
            )}
          </div>
          <div className="new-expense__actions">
            <button onClick={changeIsOpededHandler}>Close</button>
            <button disabled={!formIsValid} type="submit">
              Add Expenses
            </button>
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

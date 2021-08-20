import classes from "./Expenses.module.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import LoadingSpinner from "../ui/LoadingSpinner";

const Expenses = (props) => {
  let [Data, changeData] = useState("2019");

  const { isLoading, error, didSubmit } = props;

  const getDataSelected = (dataSelected) => {
    changeData(dataSelected);
  };

  let content;

  if (isLoading) {
    content = (
      <div className="loading-spinner-centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    content = <p className="error-centered">{error}</p>;
  }

  if (!error && didSubmit) {
    content = <p className="error-centered">Request sent successfully!!</p>;
  }

  const filteredData = props.data.filter(
    (el) => el.date.getFullYear().toString() === Data
  );

  return (
    <Card className={classes.expenses}>
      <ExpensesFilter
        dataToShowDefault={Data}
        dataSelectedHandler={getDataSelected}
      />
      <ExpensesChart expenses={filteredData} />
      {content}
      <ExpensesList
        didSubmit={didSubmit}
        error={error}
        filteredExpenses={filteredData}
      />
    </Card>
  );
};

export default Expenses;

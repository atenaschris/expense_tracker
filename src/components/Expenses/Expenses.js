import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  let [Data, changeData] = useState("2019");

  const{isLoading,error,didSubmit} = props;

  const getDataSelected = (dataSelected) => {
    changeData(dataSelected);
  };

   let content;

  if (isLoading) {
    content =  <p className="centered">Is loading...</p>;
  }

   if (error) {
    content = <p className="centered">{error}</p>;
  }

  if (!error && didSubmit) {
    content = <p className="centered">Request sent successfully!!</p>
  }
 
  const filteredData = props.data.filter(
    (el) => el.date.getFullYear().toString() === Data
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        dataToShowDefault={Data}
        dataSelectedHandler={getDataSelected}
      />
      <ExpensesChart expenses={filteredData} />
     {content}
     <ExpensesList didSubmit={didSubmit} error={error} filteredExpenses={filteredData} />
    </Card>
  );
};

export default Expenses;

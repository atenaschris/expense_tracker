import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [Data, changeData] = useState("2019");

  const getDataSelected = (dataSelected) => {
    changeData(dataSelected);
  };
  const filteredData = props.data.filter(
    (el) => el.date.getFullYear().toString() === Data
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          dataToShowDefault={Data}
          dataSelectedHandler={getDataSelected}
        />
        <ExpensesList filteredExpenses={filteredData} />
      </Card>
    </div>
  );
};

export default Expenses;

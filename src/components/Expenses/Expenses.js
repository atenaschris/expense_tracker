import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  let [Data, changeData] = useState("2019");
  
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
        <ExpensesChart expenses={filteredData}/>
        <ExpensesList filteredExpenses={filteredData} />
      </Card>
    </div>
  );
};

export default Expenses;

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [Data, changeData] = useState("2019");

  



  const getDataSelected = (dataSelected) => {
    changeData(dataSelected);
  };

 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          dataToShowDefault={Data}
          dataSelectedHandler={getDataSelected}

        />
        {props.data
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )).filter((el) => el.props.date.getFullYear().toString() === Data)
        
          }
        {/*  <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      />
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      />
      <ExpenseItem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      /> */}
      </Card>
    </div>
  );
};

export default Expenses;

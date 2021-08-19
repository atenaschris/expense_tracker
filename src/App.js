import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

import React, { useEffect, useState } from "react";
import useHttp from './hooks/use-http';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Desk 2019",
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];

const App = () => {

   const {isLoading,error,didSubmit, fetchData: fetchExpenses} = useHttp();

   const [expenses,setExpenses] = useState([]);

  useEffect(()=>{

    const transfomrData = data =>{

      console.log(data);
      const expensesData = [];

      for (const key in data) {
       expensesData.push({
         id:key,
         ...data[key],
       })

      }

     const formattedExpenses =  expensesData.map((el)=>{
        return {...el,date: new Date(el.date)}
      });

      console.log(formattedExpenses);

      setExpenses(formattedExpenses);

      console.log(expensesData);

    }

    fetchExpenses({url:'https://react-expenses-tracker-default-rtdb.firebaseio.com/expenses.jsonnnn'},transfomrData);

  },[])
  /*  const saveExpenseDataFromNewExpense = (dataPassedThroughNewExpense) => {
    setNewItem((prewExpenses) => {
      return [dataPassedThroughNewExpense, ...prewExpenses];
    });
  }; */

  return (
    <>
      <NewExpense
      /*   onSaveDataHandlerFromNewExpense={saveExpenseDataFromNewExpense} */
      />
      {<Expenses isLoading={isLoading} error={error} didSubmit={didSubmit} data={expenses} />}
    </>
  );
};

export default App;

import classes from"./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  if (props.filteredExpenses.length === 0 && props.didSubmit && !props.error) {
    return <p className={classes['expenses-list__fallback']}> No results found !</p>;
  }

  return (
    <ul className={classes['expenses-list']}>
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

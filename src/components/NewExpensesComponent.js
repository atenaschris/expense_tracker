import "./NewExpensesComponent.css";
import ExpenseItem from "./ExpenseItem";

function NewExpensesComponent(props) {
  return (
    <div className="expenses">
      {props.data.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
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
    </div>
  );
}

export default NewExpensesComponent;

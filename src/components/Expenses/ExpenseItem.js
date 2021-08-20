import classes from "./ExpenseItem.module.css";

import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className={classes['expense-item']}>
        <ExpenseDate date={props.date} />
        <div className={classes['expense-item__description']}>
          <h2>{props.title}</h2>
          <div className={classes['expense-item__price']}>{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

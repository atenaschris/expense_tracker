
import classes from './ExpensesFilter.module.css';

const ExpensesFilter = (props) => { 
  const setDataValue = event =>{
    props.dataSelectedHandler(event.target.value);
  }
  return (
    <div className={classes['expenses-filter']}>
      <div className={classes['expenses-filter__control']}>
        <label>Filter by year</label>
        <select value={props.dataToShowDefault} onChange={setDataValue}>
          <option value="2022" >2022</option>
          <option value="2021" >2021</option>
          <option value="2020" >2020</option>
          <option value="2019" >2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

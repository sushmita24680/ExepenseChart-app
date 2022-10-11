/** @format */
import './ExpensesItem.css';

function ExpensesItem() {
const expenseDate = new Date(2021,2,28);
const expenseTitle = 'Car Insurance';
const  expensePrice = 294.67;

    return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h1>{expenseTitle}</h1>
        <div className='expense-item__price'>${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpensesItem;

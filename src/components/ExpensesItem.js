/** @format */
import './ExpensesItem.css';

function ExpensesItem(props) {
    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expensePrice = props.amount;

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

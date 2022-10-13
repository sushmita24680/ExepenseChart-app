/** @format */
import ExpenseDate from './ExpenseDate';
import './ExpensesItem.css';
import Card from    './Card';

function ExpensesItem(props) {
    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expensePrice = props.amount;

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expenseDate} />
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expensePrice}</div>
            </div>
        </Card>
    );
}

export default ExpensesItem;

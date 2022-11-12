/** @format */
import ExpenseDate from './ExpenseDate';
import './ExpensesItem.css';
import Card from    '../UI/Card';
// import {useState} from "react";
function ExpensesItem(props) {
      const expenseTitle = props.title; 
       const expenseDate = props.date;
    const expensePrice = props.amount;

    return (
       <li>
            <Card className='expense-item'>
                <ExpenseDate date={expenseDate} />
                <div className='expense-item__description'>
                    <h2>{expenseTitle}</h2>
                    <div className='expense-item__price'>${expensePrice}</div>
                </div>
            </Card>
       </li>
    );
}

export default ExpensesItem;

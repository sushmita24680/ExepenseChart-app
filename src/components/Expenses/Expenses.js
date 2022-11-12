/** @format */

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((item)=>{
   
    return item.date.getFullYear().toString()=== filteredYear;

  })
  


  return (
    <>
      <Card className='expenses'>
       
        <ExpensesFilter
          selected={filteredYear}
          onChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        < ExpensesList expensesList={filteredExpenses}/>
         
        {/* {props.item.map((index) => {
            const {date, title, amount} = index;
            return (
                <ExpensesItem
                    date={date}
                    title={title}
                    amount={amount}
                >
                </ExpensesItem>)
 })}  
 
 if we donot want write return use()  parenthsises after map function for respective 
 callback example given below.
 */}

        
      </Card>
    </>
  );
};

export default Expenses;

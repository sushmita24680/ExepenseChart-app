/** @format */

// import logo from './logo.svg';
import './index.css';
import NewExpense from './components/NewExpense/NewExpenses';
import Expenses from './components/Expenses/Expenses';
import {useState} from 'react';
// import Chart from './components/Chart';
 const intialExpense= [
   
    {
      id: 'e2',
      date: new Date(2020, 0, 11),
      title: ' Grossary',
      amount: 1237.9,
    },
    {
      id: 'e3',
      date: new Date(2019, 2, 7),
      title: ' Semester fee',
      amount: 59700.0,
    },
    {
      id: 'e4',
      date: new Date(2021, 2, 2),
      title: ' Toilet Paper',
      amount: 507.64,
    },
    {
      id: 'e6',
      date: new Date(2020, 4, 11),
      title: ' Grossary',
      amount: 1237.9,
    },
    {
      id: 'e7',
      date: new Date(2022, 8, 4),
      title: ' Semester fee',
      amount: 59700.0,
    },
    {
      id: 'e8',
      date: new Date(2020, 9, 2),
      title: ' Toilet Paper',
      amount: 507.64,
    }
  ];
  
  function App() {
    const [updateExpense, setUpdateExpense] = useState(intialExpense);



  const NewExpenseHandler = ex =>{
    // expense.push(ex);
    setUpdateExpense((preexpenses)=>{
      return [ex, ...preexpenses];
    }
      
    );
  }
  return (
    <div className='App'>
   
      <NewExpense newItem={NewExpenseHandler} /> 
     
    <Expenses item={updateExpense} />
    </div>
  );
}

export default App;

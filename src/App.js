/** @format */

// import logo from './logo.svg';
import './index.css';
import NewExpense from './components/NewExpense/NewExpenses';
import Expenses from './components/Expenses/Expenses';
function App() {
  const expense = [
    {
      id: 'e1',
      date: new Date(2021, 2, 28),
      title: ' car Insurance',
      amount: 297.64,
    },
    {
      id: 'e2',
      date: new Date(2021, 2, 11),
      title: ' Grossary',
      amount: 1237.9,
    },
    {
      id: 'e3',
      date: new Date(2021, 2, 7),
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
      id: 'e5',
      date: new Date(2021, 2, 18),
      title: ' New Desktop',
      amount: 12905.34,
    },
  ];
  return (
    <div className='App'>
    
      <NewExpense/>
    <Expenses item={expense} />
    </div>
  );
}

export default App;

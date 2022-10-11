/** @format */

// import logo from './logo.svg';
// import './App.css';
import ExpensesItem from './components/ExpensesItem';
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
      <h1>start learning</h1>
      <ExpensesItem
        date={expense[0].date}
        title={expense[0].title}
        amount={expense[0].amount}
      ></ExpensesItem>
      <ExpensesItem
        date={expense[1].date}
        title={expense[1].title}
        amount={expense[1].amount}
      ></ExpensesItem>
      <ExpensesItem
        date={expense[2].date}
        title={expense[2].title}
        amount={expense[2].amount}
      ></ExpensesItem>
      <ExpensesItem
        date={expense[3].date}
        title={expense[3].title}
        amount={expense[3].amount}
      ></ExpensesItem>
    </div>
  );
}

export default App;

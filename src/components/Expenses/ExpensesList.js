import ExpensesItem from "./ExpensesItem";
import "./ExpensesList.css";
const ExpensesList =(props)=>{

if(props.expensesList.length===0){
    return <h2 className="expenses-list__fallback">No expenses Found</h2>;
}
return(
    <>
        <ul className="expenses-list">

            {props.expensesList.map((index) => (
                <ExpensesItem
                    key={index.id}
                    date={index.date}
                    title={index.title}
                    amount={index.amount}
                />
            ))

            }
    </ul>
    </>
);
}
export default ExpensesList;

    import ExpenseForm from "./ExpenseForm";
    import './NewExpenses.css';
    import {useState} from 'react';
    const NewExpense = (props) =>{
        const [showExpenseForm, setShowExpenseForm] = useState(true);

        const cancelButtonHandler =(click)=>{
            setShowExpenseForm(click);
        }

        const addExpenseHandler =()=>{
            setShowExpenseForm(false);
        }
        const saveExpeneseHandler = (expenseData) =>{
       if(showExpenseForm===false){
                const newExpense = {
                    ...expenseData,
                    id: Math.random().toString()
                };
                props.newItem(newExpense);
            
            }
        }


      
        return (
        <div className="new-expense">
            { (showExpenseForm === false  )? (<ExpenseForm onSaveExpeneseData={saveExpeneseHandler} onCancel={cancelButtonHandler} />)
            :
               ( 
                <button onClick={addExpenseHandler}>Add New Expense</button>
               
               
               )}
    </div>
        );

    }

    export default NewExpense;
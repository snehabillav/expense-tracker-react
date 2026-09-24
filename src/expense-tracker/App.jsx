import { useState } from "react";
import "./App.css";

function ExpenseTracker() {
    const [ expenses, setExpenses ] = useState([]);
    const [ expenseName, setExpenseName ] = useState("");
    const [ amount, setAmount ] = useState("");

    const total = expenses.reduce((sum, expense) => {
        return sum + Number(expense.amount);
    }, 0);

    function addExpense() {
        if (expenseName === "" || amount === "") {
            return;
        }
            setExpenses([
                ...expenses,
                {
                    name: expenseName,
                    amount: amount
                } 
            ]); 
              setExpenseName("");
                setAmount("");
    }

    function deleteExpense(index) {
        setExpenses(expenses.filter((expense, i) => {
          return i !== index;
    }));
}

    return(
        <div className="expense-container">
            <h1 className="title"> Expense Tracker</h1>

            <div className="expense-form">

            <input
            type = "text" 
            placeholder= "Expense Name"
            value ={expenseName}
            onChange={(e) => {
                setExpenseName(e.target.value);
            }}/>
        

            <input
            type = "number"
            placeholder= "Amount"
            value ={amount}
            onChange={(e) => {
                setAmount(e.target.value);
            }}/>

            <button onClick={addExpense}>
                Add Expense
            </button>

        </div>

            <h2>Expenses</h2>

            {expenses.length === 0 && (
                <p>No expenses added yet</p>
            )}

            {expenses.map((expense, index) => {
                return(
                    <ExpenseItem
                       key={index}
                       expense={expense}
                       index={index}
                       onDelete={deleteExpense}
                       />
                );
            })}

            <p>Total: {total}</p>
        </div>
    )
}


function ExpenseItem({ expense, index, onDelete }) {
    return(
        <div className="expense-item">
            <p>{expense.name}</p>
            <p>{expense.amount}</p>
            
            <button onClick={() => onDelete(index)}>
                Delete
            </button>
        </div>
    )

}

function App() {
    return(
        <div>
            <ExpenseTracker />
        </div>
    )
}
export default App;
import { useState } from "react";
import "./App.css";


function App() {
    const [list, setList] = useState([]);

    return(
        <div className="todo-container">
            <h1>To-Do List</h1>

            <TodoInput list={list} setList={setList} />
            <TodoList list={list} />
        </div>
    );
}

function TodoInput({ list, setList }) {
    const [input, setInput] = useState("");

    function handleAdd() {
        if(input === "") {
            return;
        }

        setList([...list, input]);
        setInput("");
    }

    return (
        <div className="todo-input">
            <input
            type="text"
            placeholder="Add a new todo"
            value={input}
            onChange={(e) => setInput(e.target.value)    
            }
            />
            <button onClick={handleAdd}>
                Add
            </button>
        </div>
    );
}

function TodoList({ list }) {
    return(
        <div className="todo-list">
            <h2>Tasks</h2> 
            {list.map((todo, index) => (
                <TodoItem key={index} todo={todo} />

            ))}
        </div>
    );
}

function TodoItem({ todo }) {
    return(
        <div className="todo-item">
            <span>{todo}</span>
        </div>

    );
}

export default App;
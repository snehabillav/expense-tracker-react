import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
    if (action.type === "increment") {
        return state + action.payload;
    }
    if (action.type === "decrement") {
        return state - action.payload;
    }

    if (action.type === "reset") {
        return 0;
    }
    
    return state;
}


function App() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div className="counter-container">
        <h1> {count} </h1>


        <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
            Increment
        </button>

        <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
            Decrement
        </button>

        <button onClick={() => dispatch({ type: "reset" })}>
            Reset
        </button>
        </div>
    );
}

export default App;


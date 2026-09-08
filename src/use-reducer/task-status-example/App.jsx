import { useReducer } from "react";
import "./App.css";

function reducer(state, action){
    if (action.type === "start") {
        return "In Progress";
    }

    if (action.type === "complete") {
        return "Completed";
    }

    if (action.type === "reset") {
        return "Not Started";
    }
}

function App() {
    const [ status, dispatch ] = useReducer(reducer, "Not Started");
    return(
    <div className="task-container">
        <h1> {status} </h1>

        <button onClick={() => dispatch({ type: "start"})}>
            Start
        </button>

        <button onClick={() => dispatch({ type: "complete"})}>
            Complete
        </button>

        <button onClick={() => dispatch({ type: "reset"})}>
            Reset
        </button>
    </div>
    );
}

export default App;
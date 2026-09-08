import { useReducer } from "react";
import "./App.css";



function reducer(state, action){
    if(action.type === "login") {
        return true;
    }
    
    if(action.type === "logout") {
        return false;
    }
}

function App() {
    const [ login, dispatch ] = useReducer(reducer, false);
    return(
        <div className="login-container">
            <h1>{login ? "Logged In" : "Logged out"}</h1>

            <button onClick={() => dispatch({ type: "login"})}>
                Login
            </button>

            <button onClick={() => dispatch({ type: "logout"})}>
                Logout
            </button>
        </div>
    );
}

export default App;
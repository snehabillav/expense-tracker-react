import { useReducer } from "react";
import "./App.css";

function reducer(state, action){
    if (action.type === "add") {
        return [...state, action.payload];
    }

    if (action.type === "remove") {
        return state.filter(item => item !== action.payload);
    }

    if (action.type === "clear") {
        return [];
    }

}

function App() {
    const [ cart, dispatch ] = useReducer(reducer, []);
    return(
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <ul>
                {cart.map(item => (
                    <li>{item}</li>
                ))}
            </ul>


            <button onClick={() => dispatch({ type: "add", payload: "Apple"})}>
                Add Apple
            </button>

            <button onClick={() => dispatch({ type: "add", payload: "Banana"})}>
                Add Banana
            </button>

            <button onClick={() => dispatch({ type: "remove", payload: "Apple"})}>
                Remove Apple
            </button>

            <button onClick={() => dispatch({ type: "remove", payload: "Banana"})}>
                Remove Banana
            </button>

            <button onClick={() => dispatch({ type: "clear"})}>
                Clear Cart
            </button>

        </div>
    );
}

export default App;
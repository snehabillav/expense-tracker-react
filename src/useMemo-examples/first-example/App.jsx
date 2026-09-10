import { useMemo, useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(15);
    const [ name, setName ] = useState("");


    const doubledCount = useMemo(() => {
        console.log("calculating");
        return count * 2;
    },[count]);

    return(
        <div className = "container">
            <h1>{doubledCount}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>


            <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
                setName(e.target.value);
            }}
            />

            <p>Hello {name}</p>
        </div>
    )
}

export default App;
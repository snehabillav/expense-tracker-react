import useCounter from "./useCounter";

function App() {
    const data = useCounter();
    return(
        <div>
            <h1>Count: {data.count}</h1>
            <button onClick={() => data.setCount(data.count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default App;
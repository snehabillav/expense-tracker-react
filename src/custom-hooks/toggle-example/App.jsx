import useToggle from "./useToggle";

function App() {
    const data = useToggle();
    return(
        <div>
            <h1>Current state: {data.isOn}</h1>
            <button onClick={() => data.setIsOn(data.isOn ? "false" : "true")}>
                Toggle
            </button>
        </div>
    );
}

export default App;
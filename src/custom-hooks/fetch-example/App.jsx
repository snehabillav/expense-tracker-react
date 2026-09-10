import  useFetch from "./useFetch";


function App() {
    const data = useFetch();
    return(
        <div>
            <h1>{data.data?.fact}</h1>
        </div>
    );
}

export default App;
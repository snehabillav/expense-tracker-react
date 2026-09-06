import { useState, useEffect} from "react";

function useFetch() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://catfact.ninja/fact")
        .then((response) => response.json())
        .then((result) => { setData(result)})
    }, []);


    return{
        data, 
        setData 
    };
}

export default useFetch;
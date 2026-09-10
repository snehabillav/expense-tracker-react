import { useMemo } from "react";
import { useState } from "react";
import "./App.css";


function App() {
    const [ search, setSearch] = useState("");
    const products = [ "Apple", "Banana", "Mango", "Orange" ];

    const filteredProducts = useMemo(() => {
        return products.filter(item => item.includes(search));
    }, [search]);

    return(
        <div className="container">
            <input
            type="text"
            placeholder="Search product"
            onChange={(e) => {
                setSearch(e.target.value);
            }}
            />
            <ul>
                {filteredProducts.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/products">Go to Products</Link>
        </div>
    );
}


function Products () {
    return (
        <div>
            <h1>Products</h1>
            <Link to="/products/101">View Product 101</Link>
        </div>
    );
}


function ProductDetails() {
    const id = useParams();
    return (
    <div>
        <h1>Product Details</h1>
        <h1>Product ID: {id.id}</h1>
        
    </div>
    );
}

function App() {
    return(
     <div>
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/products" element={<Products />} />
             <Route path="/products/:id" element={<ProductDetails />} />
       </Routes>
        </div>
    );
}

export default App;
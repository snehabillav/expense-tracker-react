import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";




function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/products"> Go to Products</Link>
        </div>
    );
}

function Products() {
    return (
        <div>
            <h1>Products</h1>
            <Link to="/products/101"> Product 101 </Link>
            <Link to="/products/102"> Product 102 </Link>
            <Link to="/products/103"> Product 103 </Link>

            <Link to="/products/phones"> Phones </Link>
            <Link to="/products/laptops"> Laptops </Link>


            <Outlet />
        </div>
    );
}

function Phones() {
    return <h1>Phones</h1>
}

function Laptops() {
    return <h1>Laptops</h1>
}


function ProductDetails() {
    const id = useParams();
    return (
        <div>
            <h1>Product Details</h1>
            <p>Product ID: {id.id}</p>
        </div>
    );
}



function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products" element={<Products />}>
                    <Route path="phones" element={<Phones />} />
                    <Route path="laptops" element={<Laptops />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App;
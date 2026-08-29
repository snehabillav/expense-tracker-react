import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const id = useParams();
  return <h1>Product ID: {id.id}</h1>
}

function App() {
  return (
    <Routes>
      <Route
        path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
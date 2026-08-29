import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";


function Products() {
  return (
  <div>
    <h1>Products</h1>
    <Outlet />

    </div>
  );
}

function Phones() {
  return <h2>Phones</h2>;
}

function App() {
  return (
<Routes>
  <Route path="/products" element={<Products />}>
  <Route path="phones" element={<Phones />}>
  </Route>
  </Route>
</Routes>
  );
}

export default App;
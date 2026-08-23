import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
      setProducts(data.products);
    })

    .catch(() => {
      setError(true);
  });
  }, []);


  return (
    <div>
      {error && <p>Something went wrong!</p>}

      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
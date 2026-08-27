import {
   Routes, 
   Route,
   NavLink, 
   useNavigate 
} from "react-router-dom";
import "./App.css";

function Home() {
  return <h1>Home Page</h1>;
}

function Contact() {
  const navigate = useNavigate();
  return(
  <div>
    <h1>Contact</h1>
    <button onClick={ () => {
      navigate("/home")
    }}
    >
      Go to Home
    </button>
  </div>
  );
}

function Products() {
  const navigate = useNavigate();
  return (
  <div>
    <h1>Products</h1>
    <button onClick={ () => {
      navigate("/home")
    }}
    >
      Go to Home
    </button>
    </div>
  );
}

function App() {
  return(
    <div>
      <nav>
    <NavLink to="/home"
    className = {
      ( { isActive }) => {
        return isActive ? "active" : ""
      }
    }
    >
      Home
      </NavLink>

    <NavLink 
    to="/contact"
      className = { 
        ( { isActive }) => {
          return isActive ? "active" : ""
        }
      }
      >
       Contact
    </NavLink>


    <NavLink to="/products"
    className = {
      ( { isActive }) => {
        return isActive ? "active" : ""
      }
    }
    >
      Products
      </NavLink>
    </nav>
    <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/products" element={<Products />} />
</Routes>
</div>
  )
}

export default App;
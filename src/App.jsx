import { Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Home() {
    return (
    <div>
        <h1>Home</h1>
        <Link to= "/about"> Go to About </Link>
        <Link to= "/contact"> Go to Contact </Link>
        <Link to= "/login"> Go to Login </Link>
    </div>
    );
}

function About() {
    return (
    <div>
        <h1>About</h1>
        <Link to= "/"> Back to Home </Link>
    </div>
  );
}

function Contact() {
    return(
    <div>
        <h1>Contact</h1>
        <NavLink 
        to= "/"
        className={({ isActive }) => isActive ? "active" : ""}
        > 
        Home 
        </NavLink>

        <NavLink 
        to= "/about"
        className={({ isActive }) => isActive ? "active" : ""}
        >
             About
              </NavLink>


        <NavLink
         to= "/login"
         className={({ isActive }) => isActive ? "active" : ""}
         > 
         Login 
         </NavLink>
    </div>
    );
}

function Login() {
    const navigate = useNavigate(); 
    
    function handleLogin() {
        navigate("/")
    }
        return(
            <div>
                <h1>Login</h1>
                <button onClick={handleLogin}>
                    Login
                </button>
            </div>
        );
    }

    

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default App;

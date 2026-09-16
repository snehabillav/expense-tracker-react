import { useState } from "react";
import "./App.css";

function App() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const correctEmail = "admin@gmail.com";
    const correctPassword = "12345";

    const handleLogin= () => {
        setLoading(true);
        setError("");

        setTimeout(() => {
            if (email === correctEmail && password === correctPassword) {
            setIsLoggedIn(true);
        } else {
            setError("Invalid email or password");
        }
        setLoading(false);
        }, 1000);


        if (email === correctEmail && password === correctPassword) {
            setIsLoggedIn(true);
        } else {
            setError("Invalid email or password");
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail("");
        setPassword("");
    }

    return (
    <div className="auth-box">
        {isLoggedIn ? (
            <div>
                <h2>Welcome back</h2>

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        ) : (
            <div>
                <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                    }}
                />

                <input
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                    }}
                />

                <p className = "error">{error}</p>
                
    
            
                <button onClick={handleLogin} disabled={loading}>
                    {loading ? "Loading..." : "Login"}
                </button>
            </div>
        )}
    </div>
);

}

export default App;


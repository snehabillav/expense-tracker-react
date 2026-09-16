import { useState } from "react";
import "./App.css";

function App() {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ error, setError ] = useState("");
    const [ success, setSuccess ] = useState("");

    const handleSubmit=(e) => {
        e.preventDefault();
        setSuccess("");
        console.log(name);
        console.log(email);

        if(name === "") {
            setError("Name Required");
            return;
        } 

        if(email === "") {
            setError("Email Required");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            setError("Invalid Email");
            return;
        }

        setError("");
        setSuccess("Form submitted successfully!");
        setName("");
        setEmail("");
    }

    return(
        <form onSubmit={(handleSubmit)} noValidate>
        <h1>Login Form</h1>
        <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => {
            setName(e.target.value);
            setError("");
            setSuccess("");
        }}
        />

        <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => {
            setEmail(e.target.value);
            setError("");
            setSuccess("");
        }}
        />

        <p>{error}</p>
        <p>{success}</p>

        <button>
            Submit
        </button>
    </form>
    
    );
}

export default App;
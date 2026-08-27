import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/home");
  }
  return(
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={username}
      onChange = { (e) => {
        setUsername(e.target.value);
      }}
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
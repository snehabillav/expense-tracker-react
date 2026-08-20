import { useState, useEffect } from "react";

function App() {
  const [ users, setUsers] = useState([]);
  const[loading, setLoading] = useState(true);

useEffect( () => {

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => 
    response.json() )
    .then(data => {
      setUsers(data);
      setLoading(false);
      
    });
  }, []);
  
  return(
    <div>
      <h1>API Practice</h1>

      {loading && <p>Loading users..</p>}

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}


export default App;
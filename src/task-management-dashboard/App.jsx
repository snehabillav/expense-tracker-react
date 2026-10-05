import { useState } from "react";
import "./App.css";

function App() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const [ tasks, setTasks ] = useState([
        {
            id: 1,
            title: "Learn React",
            status: "Pending",
            priority: "High",
            dueDate: "1 October"
        }
    ]);
    const [ newTask, setNewTask ] = useState("");
    const [ editingTask, setEditingTask ] = useState(null);

    function handleLogin() {
        if(email === "") {
            alert("Email is required");
        } else {
            if(password === "") {
                alert("Password is required");
            } else {
                setIsLoggedIn(true);
            }
        }
    }

    function handleAddTask() {
        if(newTask === "") {
            alert("Please enter a task");
        } else {
            const task = {
                id: Date.now(),
                title: newTask,
                status: "Pending",
                priority: "High",
                dueDate: "01 October"
            };

            setTasks([...tasks, task]);
            setNewTask("");
        }
    }

    function handleDeleteTask(id) {
        setTasks(tasks.filter((task) => 
        task.id !== id));
    }

    function handleCompleteTask(id) {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        status: "Completed"
                    };
                }
                  return task;
            })
        )
    }

    function handleEditTask(id) {
        setEditingTask(id);
    }

    function handleSaveTask() {
        setEditingTask(null);
    }

    return(  
        <div>

            {isLoggedIn ? (

        <div className="dashboard">
            <h1>Task Management Dashboard</h1>

            
        <div className="add-task">

            <input
            type="text"
            placeholder="Enter Task"
            value={newTask}
            onChange={(e) => {
                setNewTask(e.target.value);
            }}
            />

            <button onClick={handleAddTask}>
                Add Task
            </button>
        </div>


            {tasks.map((task) => (
                <div className="task-card" key={task.id}>
                    {editingTask === task.id ? (
                        <input
                           type="text"
                           value={task.title}
                           onChange={(e) => {
                            setTasks(tasks.map((task) => {
                                if(task.id === editingTask) {
                                    return {
                                        ...task,
                                        title: e.target.value
                                    };
                                }
                                    return task;
                                })
                            );
                           }}
                        />
                    ) : (
                    <h2>{task.title}</h2>
                    )}   
                    <p>Status: {task.status}</p>
                    <p>Priority: {task.priority}</p>
                    <p>Due Date: {task.dueDate}</p>

                    <div className="task-actions">

                    <button onClick={() => handleCompleteTask(task.id)}>
                        Complete
                    </button>

                {editingTask === task.id ? (
                    <button onClick={handleSaveTask}>
                        Save
                    </button>

                    ) : (

                        <button onClick={() => handleEditTask(task.id)}>
                            Edit
                        </button>
                    )}

                    <button onClick={() => handleDeleteTask(task.id)}>
                        Delete
                    </button>
                </div>
            </div>
                    ))} 
            


        <br />
       
        <button className ="logout-btn" onClick={() =>
                        setIsLoggedIn(false)}>
                            Logout
                        </button>
                    </div>
            ) : (

        <div className="login-container">
        <div className="login-section">
            <h1>Login</h1>
                    
            <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            />

            <br />

            <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            />

            <br />

            <button onClick={handleLogin}>
                Login
            </button>

            </div>
        </div>
            )}
        </div>
    );
}

export default App;
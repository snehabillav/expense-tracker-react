import { Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";


function Home() {
    return(
        <div>
            <h1>Home</h1>
            
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Home
            </NavLink>

            <NavLink
                to="/students"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Students
            </NavLink>

            <NavLink
                to="/profile"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Profile
            </NavLink>

           <NavLink
                to="/courses"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Courses
            </NavLink>
        </div>
    );
}

function Students() {
    return(
        <div>
            <h1>Students</h1>
            <Link to="/students/101"> Student 101 </Link>
            <Link to="/students/102"> Student 102 </Link>
            <Link to="/students/103"> Student 103 </Link>
        </div>
    );
}

function StudentDetails() {
    const id = useParams();
    const navigate = useNavigate();

    function handleBack() {
        navigate("/students")
    }
    return(
        <div>
            <h1>Student Details</h1>
            <p>Student ID: {id.id}</p>  

            <button onClick={handleBack}>
                Back to Students
                </button> 

    
        </div>
    );
}

function Courses() {
    return(
        <div>
            <h1>Courses</h1>
            <Link to="/courses/javascript"> JavaScript </Link>
            <Link to="/courses/react"> React </Link>

            <Outlet />

        </div>
    );
}

function Profile() {
    return <h1>Profile</h1>
}


function JavaScript() {
    return <h1>JavaScript</h1>
}

function React() {
    return <h1>React</h1>
}


function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/students/:id" element={<StudentDetails />} />
                <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} >
                 <Route path="javascript" element={<JavaScript />} />
                 <Route path="react" element={<React />} />
            </Route>
              </Routes>
        </div>
    );
}

export default App;
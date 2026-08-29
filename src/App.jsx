import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Dashboard() {
    return(
        <div>
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    );
}

function Profile() {
    return <h2>Profile</h2>
}

function Settings() {
    return <h2>Settings</h2>
}

function App() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    );
}

export default App;
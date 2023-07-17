import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./Pages/Homepage";
import StoriesPage from "./Pages/StoriesPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import DrivePage from "./Pages/DrivePage";

function App() {
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light");
    } else {
        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark");
        }
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/stories" element={<StoriesPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/files" element={<DrivePage />} />
            </Routes>
        </Router>
    );
}

export default App;

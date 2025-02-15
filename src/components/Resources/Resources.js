import { useState, useEffect } from "react";
import "./Resources.css";

const PASSWORD = process.env.REACT_APP_PASSWORD || "default_password"; // Fetch from environment variable

const Resources = () => {
    const [inputPassword, setInputPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedAuth = localStorage.getItem("authenticated");
        if (storedAuth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = () => {
        if (inputPassword === PASSWORD) {
            setIsAuthenticated(true);
            localStorage.setItem("authenticated", "true");
            setInputPassword("");
        } else {
            alert("Incorrect password");
            setInputPassword("");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("authenticated");
    };

    if (!isAuthenticated) {
        return (
            <div className="container">
                <h2>What is the Magic Word?</h2>
                <input
                    type="password"
                    className="input"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                />
            </div>
        );
    }

    return (
        <div className="container">
            <h1>Resources coming soon! </h1>
            <button onClick={handleLogout} className="button logout">Logout</button>
        </div>
    );
};

export default Resources;

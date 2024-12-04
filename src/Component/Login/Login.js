import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        // Basic form validation
        if (!username || !password) {
            setMessage("Please fill in both fields.");
            return;
        }
    
        setLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Save the token in localStorage
                localStorage.setItem("token", data.token);
                setMessage("Login successful!");
                navigate("/home");
            } else if (response.status === 401) {
                setMessage("Invalid username or password.");
            } else {
                setMessage(data.message || "Login failed.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="bg-gradient-to-r from-purple-900 to-purple-800 font-[sans-serif] w-full flex items-center justify-center p-4 md:h-screen">
            <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6 transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-black text-2xl font-bold mb-4 text-left">Login to Your Account</h3>
                <div className="space-y-4">
                    <div>
                        <label className="text-black text-sm mb-1 block">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="text-black bg-white border border-purple-300 w-full text-sm px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
                            placeholder="Enter your username"
                            required
                            aria-label="Username"
                        />
                    </div>
                    <div>
                        <label className="text-black text-sm mb-1 block">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="text-black bg-white border border-purple-300 w-full text-sm px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 ease-in-out shadow-sm hover:shadow-md"
                                placeholder="Enter your password"
                                required
                                aria-label="Password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-500 hover:text-purple-500"
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                </div>
                <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full py-3 mt-6 tracking-wider text-sm rounded-md text-white ${loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"} focus:outline-none transition duration-200 ease-in-out shadow-lg hover:shadow-xl`}
                >
                    {loading ? "Logging In..." : "Login"}
                </button>
                {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
                <p className="text-black text-sm text-center">
                    Don’t have an account? <a href="/signup" className="text-purple-600 font-semibold hover:underline transition duration-200 ease-in-out">Signup here</a>
                </p>
            </form>
        </div>
    );
};

export default Login;

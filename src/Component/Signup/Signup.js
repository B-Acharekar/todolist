import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Signup successful! Redirecting...");
                setTimeout(() => navigate("/login"), 2000);
            } else {
                setMessage(data.message || "Signup failed.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
            <form onSubmit={handleSignup} className="w-full py-6 px-6 sm:px-16">
                <h3 className="text-gray-800 text-2xl font-bold mb-6">Create an Account</h3>
                <div className="space-y-6">
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="w-full py-3 px-4 mt-8 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
                    Create Account
                </button>
                {message && <p className="mt-4 text-red-500">{message}</p>}
                <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Login here</Link></p>
            </form>
        </div>
    );
};

export default Signup;

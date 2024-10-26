import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(    
        <header className="navbar bg-white fixed flex top-0 right-0 left-0 justify-between items-center w-full px-5 py-2 shadow-md bg-gray-50 z-50">
            <Link to="/">
                <h1 className="text-2xl font-extrabold text-purple-700 tracking-wider">2Doist</h1>
            </Link>
            <Link to="/add">
                <button className="px-5 py-2 bg-transparent text-purple-700 font-semibold rounded-lg hover:shadow-lg hover:scale-105 transform transition">
                    Add Task
                </button>
            </Link>
        </header>
    )
}

export default Navbar;
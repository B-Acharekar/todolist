// Topbar.js
import React from "react";

const Topbar = ({ toggleSidebar }) => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between">
            {/* Sidebar Toggle Button */}
            <button
                className="text-purple-700 dark:text-white"
                onClick={toggleSidebar}
            >
                <i className="bi bi-layout-sidebar text-2xl"></i>
            </button>
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Dashboard
            </h1>
        </header>
    );
};

export default Topbar;


import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="w-full min-h-screen">
            <button
                className="ms-2 pt-6 p-2 text-white dark:text-purple-700 rounded-md z-50"
                onClick={toggleSidebar}
            >
                <i className="bi bi-layout-sidebar text-2xl"></i>
            </button>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default Home;

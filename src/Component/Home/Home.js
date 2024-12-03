// Home.js
import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import MainContent from "./MainContent/MainContent";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
            {/* Topbar */}
            <Topbar toggleSidebar={toggleSidebar} />

            {/* Layout containing Sidebar and MainContent */}
            <div className="flex w-full">
                {/* Sidebar */}
                <div
                    className={`${
                        isSidebarOpen ? "w-64" : "w-0"
                    } transition-width duration-300`}
                >
                    <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </div>

                {/* Main Content */}
                <div className="flex-grow transition-all duration-300">
                    <MainContent />
                </div>
            </div>
        </div>
    );
};

export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const [isProjectOpen, setIsProjectOpen] = useState(false);

    const toggleProjectDropdown = () => {
        setIsProjectOpen(!isProjectOpen);
    };

    return (
        <aside
            id="default-sidebar"
            className={`fixed top-0 left-0 z-40 w-72 h-screen transform transition-transform duration-300 ease-in-out bg-gray-50 dark:bg-gray-800 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-2 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <li className="flex justify-between items-center border-b p-2">
                        <Link
                            to="/"
                            className="items-center p-2 text-gray-900 dark:text-white rounded-lg hover:text-purple-400 group"
                        >
                            <span>2Doist</span>
                        </Link>
                        <button
                            className="p-2 text-white rounded-md z-50"
                            onClick={toggleSidebar}
                        >
                            <i className="bi bi-layout-sidebar text-2xl"></i>
                        </button>
                    </li>
                    <li>
                        <Link
                            to="/add"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <i className="bi bi-plus-circle"></i>
                            <span className="ml-3">Add Task</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/inbox"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <i className="bi bi-inbox-fill"></i>
                            <span className="ml-3">Inbox</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/today"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <i className="bi bi-calendar-date"></i>
                            <span className="ml-3">Today</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/upcoming"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <i className="bi bi-calendar3"></i>
                            <span className="ml-3">Upcoming</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/filter-label"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <i className="bi bi-grid-fill"></i>
                            <span className="ml-3">Filters & Labels</span>
                        </Link>
                    </li>
                </ul>
                <div className="font-medium">
                    <div className="flex justify-between items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span>My Project</span>
                        <span onClick={toggleProjectDropdown} style={{ cursor: "pointer" }}>
                            <i
                                className={`bi ${
                                    isProjectOpen ? "bi-caret-down-fill" : "bi-caret-right-fill"
                                }`}
                            ></i>
                        </span>
                    </div>
                    {isProjectOpen && (
                        <ul className="pl-6 space-y-1">
                            <li>
                                <Link
                                    to="/project1"
                                    className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    Project 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/project2"
                                    className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    Project 2
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

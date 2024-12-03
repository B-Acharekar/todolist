// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {

    return (
        <aside
            className={`bg-gray-50 dark:bg-gray-800 transform transition-transform duration-300 ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } fixed h-full z-40`}
        >
            <div className="p-4">
                <h2 className="font-bold text-xl text-purple-500 mb-6">2Doist</h2>
                <ul className="space-y-4">
                    <li>
                        <Link to="/inbox" className="text-gray-700 dark:text-gray-200">
                            Inbox
                        </Link>
                    </li>
                    <li>
                        <Link to="/today" className="text-gray-700 dark:text-gray-200">
                            Today
                        </Link>
                    </li>
                    <li>
                        <Link to="/upcoming" className="text-gray-700 dark:text-gray-200">
                            Upcoming
                        </Link>
                    </li>
                </ul>
                <button onClick={toggleSidebar} className="mt-4 text-purple-500">
                    Toggle Sidebar
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

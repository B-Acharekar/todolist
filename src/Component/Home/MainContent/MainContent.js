import React, { useState, useEffect } from "react";

const MainContent = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [newTaskDescription, setNewTaskDescription] = useState("");
    const [newTaskDueDate, setNewTaskDueDate] = useState("");
    const [newTaskPriority, setNewTaskPriority] = useState("Medium");  // Default priority
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sortCriteria, setSortCriteria] = useState("priority");  // New state for sorting criteria

    // Fetch tasks from backend
    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://127.0.0.1:5000/tasks");
                if (!response.ok) throw new Error("Failed to fetch tasks");
                const data = await response.json();
                setTasks(data.tasks); // Assuming API response structure
            } catch (error) {
                setError("Unable to load tasks. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, []);

    // Add a new task
    const addTask = async () => {
        if (!newTaskTitle.trim()) {
            setError("Task title cannot be empty.");
            return;
        }
        if (!newTaskDueDate) {
            setError("Please select a due date.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:5000/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: newTaskTitle,
                    description: newTaskDescription,
                    due_date: newTaskDueDate,
                    priority: newTaskPriority
                }),
            });
            if (!response.ok) throw new Error("Failed to add task");
            const data = await response.json();
            setTasks([...tasks, data.task]);
            setNewTaskTitle("");
            setNewTaskDescription("");
            setNewTaskDueDate("");
            setNewTaskPriority("Medium");
            setError(null); // Clear any previous errors
        } catch (error) {
            setError("Failed to add the task. Please try again.");
        }
    };

    // Delete a task
    const deleteTask = async (taskId) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/tasks/${taskId}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Failed to delete task");
            setTasks(tasks.filter((task) => task.id !== taskId));
        } catch (error) {
            setError("Failed to delete the task. Please try again.");
        }
    };

    // Toggle Task Completion
    const toggleCompletion = async (taskId, currentStatus) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/tasks/${taskId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ completed: !currentStatus }),
            });
            if (!response.ok) throw new Error("Failed to update task");
            setTasks(
                tasks.map((task) =>
                    task.id === taskId ? { ...task, completed: !currentStatus } : task
                )
            );
        } catch (error) {
            setError("Failed to update the task. Please try again.");
        }
    };

    // Sort tasks based on the selected criteria
    const sortedTasks = tasks.sort((a, b) => {
        if (sortCriteria === "priority") {
            return a.priority.localeCompare(b.priority); // Sorting by priority
        }
        if (sortCriteria === "due_date") {
            return new Date(a.due_date) - new Date(b.due_date); // Sorting by due date
        }
        return 0;
    });

    return (
        <div className="p-6 lg:px-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Task Management</h2>

            {/* Error Message */}
            {error && (
                <div className="bg-red-100 text-red-800 p-3 rounded mb-4">{error}</div>
            )}

            {/* Add Task Form */}
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="border border-gray-300 rounded p-2 mr-2 flex-grow"
                />
                <input
                    type="text"
                    placeholder="Task Description"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                    className="border border-gray-300 rounded p-2 mr-2 flex-grow"
                />
                <input
                    type="date"
                    value={newTaskDueDate}
                    onChange={(e) => setNewTaskDueDate(e.target.value)}
                    className="border border-gray-300 rounded p-2 mr-2"
                />
                <select
                    value={newTaskPriority}
                    onChange={(e) => setNewTaskPriority(e.target.value)}
                    className="border border-gray-300 rounded p-2 mr-2"
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button
                    onClick={addTask}
                    className="bg-purple-500 text-white px-4 py-2 rounded"
                >
                    Add Task
                </button>
            </div>

            {/* Sort Tasks */}
            <select
                onChange={(e) => setSortCriteria(e.target.value)}
                className="border border-gray-300 rounded p-2 mb-4"
            >
                <option value="priority">Sort by Priority</option>
                <option value="due_date">Sort by Due Date</option>
            </select>

            {/* Loading Spinner */}
            {loading ? (
                <div className="text-center py-4">Loading tasks...</div>
            ) : (
                <ul>
                    {sortedTasks.map((task) => (
                        <li
                            key={task.id}
                            className={`p-4 mb-2 rounded shadow flex justify-between items-center ${task.completed ? "bg-green-100 dark:bg-green-800" : "bg-white dark:bg-gray-800"}`}
                        >
                            <div>
                                <h3 className="font-semibold">
                                    {task.title}
                                    {task.completed && <span className="text-sm text-green-600 ml-2">(Completed)</span>}
                                </h3>
                                <p className="text-sm text-gray-500">Due: {task.due_date}</p>
                                <p className="text-sm text-gray-600">Priority: {task.priority}</p>
                                <p className="text-sm text-gray-500">Description: {task.description}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => toggleCompletion(task.id, task.completed)}
                                    className={`px-3 py-1 rounded ${task.completed ? "bg-gray-400 text-white" : "bg-green-500 text-white"}`}
                                >
                                    {task.completed ? "Undo" : "Complete"}
                                </button>
                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="text-red-500"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MainContent;

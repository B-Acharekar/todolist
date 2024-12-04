import React, { useState, useEffect } from "react";

const MainContent = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [newTaskDescription, setNewTaskDescription] = useState("");
    const [newTaskDueDate, setNewTaskDueDate] = useState("");
    const [newTaskPriority, setNewTaskPriority] = useState("Medium");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sortCriteria, setSortCriteria] = useState("priority");

    // Get JWT token from localStorage or sessionStorage
    const token = localStorage.getItem('jwt_token'); // or sessionStorage
    console.log(token);


    // Fetch tasks from backend
    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://127.0.0.1:5000/tasks", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                if (!response.ok) throw new Error("Failed to fetch tasks");
                const data = await response.json();
                const validatedData = Array.isArray(data)
                    ? data.map(task => ({
                          ...task,
                          completed: task.completed || false,
                          title: task.title || "Untitled Task",
                          priority: task.priority || "Medium",
                          due_date: task.due_date || null,
                          description: task.description || "",
                      }))
                    : [];

                setTasks(validatedData);
            } catch (error) {
                setError("Unable to load tasks. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, [token]);

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
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,  // Pass JWT token
                },
                body: JSON.stringify({
                    title: newTaskTitle,
                    description: newTaskDescription,
                    due_date: newTaskDueDate,
                    priority: newTaskPriority,
                }),
            });
            if (!response.ok) throw new Error("Failed to add task");

            const data = await response.json();
            const newTask = {
                id: data.task_id,
                title: newTaskTitle,
                description: newTaskDescription,
                due_date: newTaskDueDate,
                priority: newTaskPriority,
                completed: false,
            };

            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTaskTitle("");
            setNewTaskDescription("");
            setNewTaskDueDate("");
            setNewTaskPriority("Medium");
            setError(null);
        } catch (error) {
            setError("Failed to add the task. Please try again.");
        }
    };

    // Delete a task
    const deleteTask = async (taskId) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/tasks/${taskId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,  // Pass JWT token
                },
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
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,  // Pass JWT token
                },
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
    const sortedTasks = (tasks || []).sort((a, b) => {
        if (sortCriteria === "priority") {
            return a.priority?.localeCompare(b.priority) || 0;
        }
        if (sortCriteria === "due_date") {
            return new Date(a.due_date || 0) - new Date(b.due_date || 0);
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
                    {sortedTasks.map((task) => {
                        if (!task) return null;
                        const {
                            id,
                            title = "Untitled Task",
                            description = "No description",
                            due_date = "No due date",
                            priority = "Medium",
                            completed = false,
                        } = task;
                        return (
                            <li
                                key={id}
                                className={`p-4 mb-2 rounded shadow flex justify-between items-center ${
                                    completed ? "bg-green-100 dark:bg-green-800" : "bg-white dark:bg-gray-800"
                                }`}
                            >
                                <div>
                                    <h3 className="font-semibold">
                                        {title}
                                        {completed && <span className="text-sm text-green-600 ml-2">(Completed)</span>}
                                    </h3>
                                    <p className="text-sm text-gray-500">Due: {due_date}</p>
                                    <p className="text-sm text-gray-600">Priority: {priority}</p>
                                    <p className="text-sm text-gray-500">Description: {description}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => toggleCompletion(id, completed)}
                                        className={`px-3 py-1 rounded ${
                                            completed ? "bg-gray-500" : "bg-green-500"
                                        } text-white`}
                                    >
                                        {completed ? "Undo" : "Complete"}
                                    </button>
                                    <button
                                        onClick={() => deleteTask(id)}
                                        className="bg-red-500 px-3 py-1 rounded text-white"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default MainContent;

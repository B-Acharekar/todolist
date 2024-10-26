import React from 'react';

const Benefits = () => {
    return(
        <section className="w-full h-screen py-20 px-10 flex flex-col items-center justify-center bg-white">
            <div className='mb-12 p-2 text-center'>
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl p-2 font-extrabold text-transparent bg-clip-text bg-purple-700">
                    Benefits of Our 2Doist App
                </h2>
                <p className="text-center text-gray-500 mt-4">
                    Discover the unique features and benefits of our 2Doist app, which will help you organize your day and empower your life.
                </p>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Benefit 1 */}
                <div className="flex flex-col items-center bg-purple-600 shadow-lg rounded-2xl p-8 text-center backdrop-blur-md border border-gray-600">
                    <div className="bg-gradient-to-r from-teal-400 to-blue-400 p-4 rounded-full mb-4 shadow-md transform hover:scale-105 transition duration-300">
                        <i className="bi bi-tree-fill text-4xl text-gray-900"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Productivity Tracking</h3>
                    <p className="mt-2 text-gray-200">
                    Visual indicators of progress help users track their accomplishments and stay motivated.
                    Statistics and Insights: Analytics on task completion and productivity patterns help users identify areas for improvement.                    </p>
                </div>
                {/* Benefit 2 */}
                <div className="flex flex-col items-center bg-purple-600 shadow-lg rounded-2xl p-8 text-center backdrop-blur-md border border-gray-600">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-4 rounded-full mb-4 shadow-md transform hover:scale-105 transition duration-300">
                        <i className="bi bi-calendar-check text-4xl text-gray-900"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Task Prioritization</h3>
                    <p className="mt-2 text-gray-200">
                    Set task priorities and deadlines, and receive reminders to keep you on track.
                    Task Progress: Progress bars and visual indicators help users stay organized and motivated.                    
                    </p>
                </div>
                {/* Benefit 3 */}
                <div className="flex flex-col items-center bg-purple-600 shadow-lg rounded-2xl p-8 text-center backdrop-blur-md border border-gray-600">
                    <div className="bg-gradient-to-r from-pink-400 to-red-400 p-4 rounded-full mb-4 shadow-md transform hover:scale-105 transition duration-300">
                        <i className="bi bi-stopwatch text-4xl text-gray-900"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Time Management</h3>
                    <p className="mt-2 text-gray-200">
                    Set daily goals, track your progress, and stay focused on achieving them.
                    Time Tracking: Real-time tracking of your time spent on tasks and productivity.                    
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Benefits;
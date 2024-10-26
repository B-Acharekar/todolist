import React from 'react';

const Features = () => {
    return (
        <section className="w-full h-screen py-20 px-10 flex flex-col items-center justify-center bg-white">
            <div className='mb-12 p-2 text-center'>
                <h2 className="text-4xl md:text-5xl p-2 font-extrabold text-transparent bg-clip-text bg-purple-600">
                    Why Choose Our 2Doist App?
                </h2>
                <p className="text-lg text-purple-400 mt-4">
                    Discover a powerful tool designed to enhance your productivity and help you reach your goals effortlessly.
                </p>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* AI-Powered Personal Assistant */}
                <div className="flex flex-col items-center bg-purple-600 shadow-lg rounded-2xl p-8 text-center backdrop-blur-md border border-gray-600">
                    <div className="bg-gradient-to-r from-teal-400 to-blue-400 p-4 rounded-full mb-4 shadow-md transform hover:scale-105 transition duration-300">
                        <i className="bi bi-cpu-fill text-4xl text-gray-900"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">AI-Powered Personal Assistant</h3>
                    <p className="mt-2 text-gray-200">
                        Receive tailored task suggestions based on your past behavior and current workload, ensuring that you always stay on track.
                    </p>
                </div>
                {/* Enhanced Productivity */}
                <div className="flex flex-col items-center bg-purple-600 shadow-lg rounded-2xl p-8 text-center backdrop-blur-md border border-gray-600 ">
                    <div className="bg-gradient-to-r from-green-400 to-lime-400 p-4 rounded-full mb-4 shadow-md transform hover:scale-105 transition duration-300">
                        <i className="bi bi-list-check text-4xl text-gray-900"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Enhanced Productivity</h3>
                    <p className="mt-2 text-gray-200">
                        Set recurring tasks, create subtasks, and collaborate seamlessly with team members to ensure all project goals are met efficiently.
                    </p>
                </div>
                {/* Continuous Growth */}
                <div className="flex flex-col items-center bg-purple-600 shadow-lg rounded-2xl p-8 text-center backdrop-blur-md border border-gray-600 ">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-full mb-4 shadow-md transform hover:scale-105 transition duration-300">
                        <i className="bi bi-graph-up-arrow text-4xl text-gray-900"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Continuous Growth</h3>
                    <p className="mt-2 text-gray-200">
                        Track your progress towards long-term goals while receiving motivational quotes and tips to keep you inspired along the way.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Features;
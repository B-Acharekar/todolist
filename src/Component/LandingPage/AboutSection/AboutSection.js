import React, { useState } from "react";

const About =({image = []}) => {
    const [imageUrl] = useState(image);
    return(
        <section className="h-screen px-10 md:px-20 py-20 flex flex-col md:flex-row items-center bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 justify-between w-full space-x-6 space-y-12 md:space-y-0">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About 2Doist</h2>
                <p className="text-gray-50 text-lg leading-relaxed mb-6">
                    2Doist is your ultimate productivity companion, built to streamline your tasks and help you achieve more every day. With powerful features like personalized task suggestions, seamless collaboration tools, and insightful progress tracking, 2Doist adapts to your unique work style. Whether you’re working solo or managing a team, 2Doist ensures you stay organized, focused, and always a step ahead. Designed for both desktop and mobile, it lets you manage projects, set reminders, and track goals from anywhere, turning your plans into actions and ideas into accomplishments.
                </p>
                <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
                    Learn More
                </button>
            </div>
            
            {/* Image Content */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={imageUrl}
                    alt="2Doist App Interface"
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                />
            </div>
        </section>
    )
}

export default About;
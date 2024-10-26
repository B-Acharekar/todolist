import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({image = []}) => {
    const [imageState, setImageState] = useState(image);
    return (
        <section className="h-screen px-10 md:px-20 py-20 flex flex-col md:flex-row items-center bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 justify-between w-full space-x-6 space-y-12 md:space-y-0">
            <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
                <h1 className="text-5xl sm:text-6xl font-extrabold p-2  tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-md">
                    Organize Your Day, Empower Your Life
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
                    Our intuitive, sleek to-do list app helps you focus on what matters. Designed for simplicity, productivity, and growth.
                </p>
                <div className="space-x-4">
                    <Link>
                    <button className="px-10 py-3 mt-6 bg-gradient-to-r from-purple-200 to-fuchsia-200 text-purple-800 rounded-full shadow-xl transform hover:scale-105 transition duration-200 ease-out">
                        Get Started for Free
                    </button>
                    </Link>
                    <button className="text-white font-medium underline mt-3 hover:text-green-400">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="rounded-3xl">
                    <img src={imageState} alt="To-Do List App Screenshot" className="w-full rounded-lg" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
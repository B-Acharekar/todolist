import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return(
        <section className="w-full h-screen py-20 px-10 flex flex-col items-center justify-center bg-white text-center">
            {/* Call to Action Section */}
            <h1 className="text-5xl sm:text-6xl p-2 font-extrabold tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-900 drop-shadow-md mb-6">
                Organize Your Day, Empower Your Life
            </h1>
            
            <h2 className="mb-12 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-500">
                Ready to Get Started?
            </h2>
            
            <button className="w-full max-w-md flex items-center justify-center px-8 py-4 bg-gradient-to-br from-purple-400 to-purple-900 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-tl hover:from-purple-400 hover:to-purple-900 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out transform">
                <i className="bi bi-person-plus-fill text-2xl mr-3"></i>
                Sign Up Now
            </button>
            
            {/* Additional Info */}
            <p className="mt-8 text-gray-400 text-sm max-w-md">
                Join thousands of users transforming their productivity journey. Discover tools, stay organized, and achieve more every day with 2Doist.
            </p>
        </section> 
    )
}

export default CTA;
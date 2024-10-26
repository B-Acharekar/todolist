import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="w-full py-10 px-6 bg-gradient-to-b from-purple-900 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Logo and Description */}
            <div className="flex flex-col items-center md:items-start">
                <h2 className="text-3xl font-bold text-purple-400">2Doist</h2>
                <p className="mt-3 text-gray-300 text-center md:text-left">
                    Your trusted companion for managing tasks, staying organized, and boosting productivity. Achieve more every day with 2Doist.
                </p>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center md:items-start">
                <h3 className="text-lg font-semibold text-purple-400">Quick Links</h3>
                <ul className="mt-3 space-y-2 text-gray-300">
                    <li><a href="#about" className="hover:text-purple-500 transition duration-200">About Us</a></li>
                    <li><a href="#features" className="hover:text-purple-500 transition duration-200">Features</a></li>
                    <li><a href="#pricing" className="hover:text-purple-500 transition duration-200">Pricing</a></li>
                    <li><a href="#support" className="hover:text-purple-500 transition duration-200">Support</a></li>
                    <li><a href="#contact" className="hover:text-purple-500 transition duration-200">Contact Us</a></li>
                </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center md:items-start">
                <h3 className="text-lg font-semibold text-purple-400">Follow Us</h3>
                <div className="mt-3 flex space-x-4">
                    <a href="https://twitter.com" className="text-gray-300 hover:text-purple-500 transition duration-200">
                        <i className="bi bi-twitter text-2xl"></i>
                    </a>
                    <a href="https://facebook.com" className="text-gray-300 hover:text-purple-500 transition duration-200">
                        <i className="bi bi-facebook text-2xl"></i>
                    </a>
                    <a href="https://instagram.com" className="text-gray-300 hover:text-purple-500 transition duration-200">
                        <i className="bi bi-instagram text-2xl"></i>
                    </a>
                    <a href="https://linkedin.com" className="text-gray-300 hover:text-purple-500 transition duration-200">
                        <i className="bi bi-linkedin text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} 2Doist. All rights reserved.
        </div>
    </footer>
    )
}

export default Footer;
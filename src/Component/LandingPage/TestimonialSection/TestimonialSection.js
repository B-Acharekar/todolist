import React from 'react';

const Testimonials = () =>{
    return(
        <section className="w-full h-screen py-20 px-10 flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
            <div className='mb-12 p-2 text-center'>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white bg-clip-text bg-white">
                    What Our Users Say
                </h2>
                <p className="text-lg text-gray-200 mt-4">
                    See what our satisfied users are saying about 2Doist.
                </p>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Testimonial 1 */}
                <div className="flex flex-col items-center bg-gray-100 shadow-lg rounded-2xl p-8 text-center backdrop-blur-md border border-gray-600 ">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-4 rounded-full mb-4 shadow-md transform hover:scale-105 transition duration-300">
                        <i className="bi bi-person-circle text-4xl text-gray-900"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">John Doe</h3>
                    <p className="mt-2 text-gray-700">
                        "2Doist has revolutionized my daily
                    task management experience. It's made it easier than ever to stay organized and focused."
                    </p>
                </div>
                {/* Testimonial 2 */}
                <div className="flex flex-col items-center bg-gray-100 shadow-lg rounded-2xl p-8 text-center backdrop-blur-md border border-gray-600 ">
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-400 p-4 rounded-full mb-4 shadow-md transform hover:scale-105 transition duration-300">
                        <i className="bi bi-person-circle text-4xl text-gray-900"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">Jane Smith</h3>
                    <p className="mt-2 text-gray-700">
                        "2Doist has made my life easier. I can now focus on what matters most, rather than worrying about tasks."
                    </p>
                </div>
                {/* Testimonial 3 */}
                <div className="flex flex-col items-center bg-gray-100 shadow-lg rounded-2xl p-8 text-center backdrop-blur-md border border-gray-600 ">
                    <div className="bg-gradient-to-r from-pink-400 to-red-400 p-4 rounded-full mb-4 shadow-md transform hover:scale-105 transition duration-300">
                        <i className="bi bi-person-circle text-4xl text-gray-900"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">Michael Johnson</h3>
                    <p className="mt-2 text-gray-700">
                        "2Doist has helped me stay organized and focused. It's made my life more efficient and enjoyable."
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
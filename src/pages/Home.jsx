import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 text-center">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 drop-shadow-sm">
          Welcome to <br /> React Multi-Page
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Start building powerful web applications with React Router. Experience
          seamless navigation and dynamic content.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/about"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 text-2xl">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Fast Performance
            </h3>
            <p className="text-gray-400 text-base mb-0">
              Powered by Vite for lightning fast hot module replacement and
              build times.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300">
            <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400 text-2xl">
              🎨
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Modern Styling
            </h3>
            <p className="text-gray-400 text-base mb-0">
              Beautifully styled with Tailwind CSS for a utility-first approach.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors duration-300">
            <div className="h-12 w-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 text-indigo-400 text-2xl">
              🔄
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Dynamic Routing
            </h3>
            <p className="text-gray-400 text-base mb-0">
              Seamless client-side routing using React Router Dom v6.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

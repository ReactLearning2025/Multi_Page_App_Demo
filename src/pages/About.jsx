import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-4xl w-full bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700 animate-slide-in-right">
        <div className="p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full opacity-20 filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-full opacity-20 filter blur-3xl"></div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6 relative z-10">
            About This Project
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 relative z-10">
            This is a simple yet powerful multi-page application built to
            demonstrate the capabilities of{" "}
            <span className="text-blue-400 font-semibold">React</span> and{" "}
            <span className="text-red-400 font-semibold">React Router Dom</span>
            .
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-gray-700/50 p-6 rounded-2xl border border-gray-600 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-green-400">✓</span> React Router Setup
              </h3>
              <p className="text-gray-400 text-sm">
                Implementing BrowserRouter, Routes, and Route for SPA
                navigation.
              </p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-2xl border border-gray-600 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-purple-400">✓</span> Responsive Navigation
              </h3>
              <p className="text-gray-400 text-sm">
                Building a mobile-responsive navbar with active link
                highlighting.
              </p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-2xl border border-gray-600 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Page Layouts
              </h3>
              <p className="text-gray-400 text-sm">
                Structuring content with utility-first CSS classes using
                Tailwind.
              </p>
            </div>
            <div className="bg-gray-700/50 p-6 rounded-2xl border border-gray-600 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-pink-400">✓</span> Modern Styling
              </h3>
              <p className="text-gray-400 text-sm">
                Using gradients, shadows, and animations for a premium feel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

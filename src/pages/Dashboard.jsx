import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-6">
        Dashboard
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl text-center">
        Welcome to the protected Dashboard! Only authenticated users can see
        this page.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">User Stats</h2>
          <p className="text-gray-400">
            View your activity and engagement metrics here.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-pink-500 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Settings</h2>
          <p className="text-gray-400">
            Manage your profile and account preferences.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <Link to="/" className="text-blue-400 hover:text-blue-300 underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mb-6">
        Login Page
      </h1>
      <p className="text-gray-300 text-lg mb-8 max-w-md">
        This is a simulated login page. Click the button below to authenticate
        and access protected routes.
      </p>
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;

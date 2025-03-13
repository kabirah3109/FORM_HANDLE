import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/login");
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
                        navigate("/login");
                      };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.firstName} {user?.middleName} {user?.lastName} !</h1>
      <p className="text-lg">This is your dashboard.</p>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-800"
        >
        Logout
      </button>
      <button></button>
    </div>
  
  );
};

export default DashBoard;
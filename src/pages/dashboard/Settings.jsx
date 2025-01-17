// src/pages/dashboard/Settings.jsx
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleNotifications = () => setNotifications(!notifications);

  return (
    <div className="p-6 md:  lg:p-10 xl bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-600 text-left lg:text-center mb-8">
        Settings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Preferences */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              {darkMode ? (
                <FaMoon className="text-xl text-gray-700" />
              ) : (
                <FaSun className="text-xl text-yellow-500" />
              )}
              <span>Dark Mode</span>
            </div>
            <button
              onClick={toggleTheme}
              className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition ${
                darkMode ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>

          {/* Notification Toggle */}
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <button
              onClick={toggleNotifications}
              className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition ${
                notifications ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  notifications ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

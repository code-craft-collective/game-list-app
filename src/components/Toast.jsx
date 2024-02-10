import React, { useState, useEffect } from "react";

const Toast = ({ color = "red" }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, []);

  const toastStyle = {
    backgroundColor: color,
    color: "white",
    padding: "1rem",import React, { useState, useEffect } from 'react';

    const ThemeSwitcher = () => {
      const [darkMode, setDarkMode] = useState(false);
    
      useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
      }, []);
    
      useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
      }, [darkMode]);
    
      const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
      };
    
      return (
        <div className="flex justify-center items-center h-screen">
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-full ${
              darkMode ? 'bg-yellow-400' : 'bg-gray-800'
            } ${
              darkMode ? 'text-gray-900' : 'text-white'
            } transition-colors duration-200`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      );
    };
    
    export default ThemeSwitcher;
    
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    opacity: 1,
  };

  return (
    <div className={`fixed bottom-10 right-10 ${visible ? "block" : "hidden"}`}>
      <div style={toastStyle}>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-white mr-2 rounded-full"></div>
          <div className="fw-bold flex-grow"></div>
          <small className="text-xs"></small>
          <button
            onClick={handleClose}
            className="ml-2 cursor-pointer border-none bg-transparent text-white"
          >
            Close
          </button>
        </div>
        <div>Hello, world! This is a toast message.</div>
      </div>
    </div>
  );
};

export default Toast;

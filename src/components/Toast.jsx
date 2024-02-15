import React, { useState, useEffect } from "react";

const Toast = ({ type }) => {
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

  let toastMessage, toastColor;

  switch (type) {
    case "success":
      toastMessage =
        "You have successfully added the game to your profile page";
      toastColor = "green";
      break;
    case "remove":
      toastMessage =
        "You have successfully removed the game from your profile page";
      toastColor = "red";
      break;
    default:
      return null;
  }

  const toastStyle = {
    backgroundColor: toastColor,
    color: "white",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    opacity: 1,
    position: "fixed",
    top: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
  };

  return (
    <div className={`${visible ? "block" : "hidden"}`}>
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
        <div>{toastMessage}</div>
      </div>
    </div>
  );
};

export default Toast;

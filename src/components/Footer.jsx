import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-grow"></div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <div>
          <p>
            Our GitHub:{" "}
            <a
              href="https://github.com/nindyahapsari/game-list-app"
              className="text-blue-500 underline"
            >
              GameShelf Studios
            </a>
          </p>
          <p>
            Follow us on{" "}
            <a
              href="https://www.instagram.com/"
              className="text-blue-500 underline"
            >
              Instagram
            </a>{" "}
            and{" "}
            <a
              href="https://www.facebook.com/"
              className="text-blue-500 underline"
            >
              Facebook
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

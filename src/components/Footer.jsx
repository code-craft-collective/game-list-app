import React from "react";

const Footer = () => {
  return (
    <div className="border border-red">
      <footer className="flex flex-row justify-between px-10 py-3 w-full bg-slate-900">
        <div className="text-white flex flex-row">
          <p className="mx-2">GitHub</p>
          <p className="mx-2">LinkedIn</p>
        </div>
        <div className="text-white">
          <h3>Logo</h3>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

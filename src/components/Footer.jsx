import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function App() {
  return (
    <footer className=" text-white dark:bg-neutral-910 p-10">
      <div className="flex justify-end space-x-5 mb-5">
        <div className="logo">
          <SocialIcon
            url="https://twitter.com/TextBeatApp"
            bgColor="black"
            fgColor="white"
            style={{ width: 30, height: 30 }} // Adjust size as needed
          />
        </div>
        <div className="logo">
          <SocialIcon
            url="https://www.linkedin.com/in/vignesh-⚡%EF%B8%8F-106443260/"
            bgColor="black"
            fgColor="white"
            style={{ width: 30, height: 30 }} // Adjust size as needed
          />
        </div>
      </div>

      {/* Copyright, Privacy Policy, Terms of Use, and Email */}
      <div className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex space-x-2 " style={{ width: 120, height: 30 }}>
          <p className="text-neutral-500">&copy; 2024 pixease</p>
        </div>
        {/* Center */}
        <div className="flex space-x-2">
          <Link to="/privacy">
            <p className="text-neutral-500">Privacy</p>
          </Link>
          <p className="text-neutral-500">|</p>
          <Link to="/terms">
            {" "}
            <p className="text-neutral-500">Terms</p>
          </Link>
        </div>
        {/* Right side */}
        <a
          href="mailto:robzapps1@gmail.com"
          className="text-neutral-500"
          style={{ width: 120, height: 30 }}
        >
          robzapps1@gmail.com
        </a>
      </div>
    </footer>
  );
}

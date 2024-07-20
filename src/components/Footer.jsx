import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function App() {
  return (
    <footer className=" text-white dark:bg-neutral-910 p-10">
      <div className="flex-row ">
        <div className="flex justify-center  lg:justify-start space-x-5 mb-5">
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
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-2">
          <div className="w-40">
            <a href="mailto:contact@robzapps.com" className="text-neutral-500">
              contact@robzapps.com
            </a>
          </div>

          <div>
            <p className="text-neutral-500 text-xs">&copy; 2024 textbeat</p>
          </div>

          <div className="flex space-x-2 text-neutral-500 w-40 justify-center">
            <Link to="/privacy">Privacy</Link>
            <p>|</p>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

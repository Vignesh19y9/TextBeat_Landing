import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <footer className="text-center text-white dark:bg-neutral-910">
      {/* <div className="container "> */}
      <div className="mb-9 flex justify-center" style={{ paddingTop: "5rem" }}>
        <a className="mr-9 text-neutral-800 dark:text-neutral-200"></a>
        <a
          href="https://twitter.com/TextBeatApp"
          className="mr-9 text-neutral-800 dark:text-neutral-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-twitter-x"
            viewBox="0 0 24 24"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/vignesh-⚡%EF%B8%8F-106443260/"
          className="mr-9 text-neutral-800 dark:text-neutral-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
      </div>
      <div className="pb-5">
        <a
          href="mailto:robzapps1@gmail.com"
          className="text-neutral-800 dark:text-neutral-400 justify-center space-x-4"
        >
          robzapps1@gmail.com
        </a>
      </div>
      {/* </div> */}

      <div className="flex justify-center space-x-4">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms"> Terms of Service</Link>
      </div>
      <div className=" p-4 text-center text-neutral-700  dark:text-neutral-200">
        © 2024 TextBeat
        <a className="text-neutral-800 dark:text-neutral-400" href=""></a>
      </div>
    </footer>
  );
}

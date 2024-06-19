import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { checklistItems } from "../constants";
import Accordion from "./Accordion";
import "./Accordion.css";
import DownloadButton from "./DownloadButton";

const panels = [
  {
    label: "1. Begin with Text",
    content: "Introduce the text content you want to showcase in your video.",
  },
  {
    label: "2. Choose your Music and Colors",
    content: "Select high-energy music and colors that complement each other.",
  },
  {
    label: "3. Video Creation",
    content:
      "Text Beat will detect beats and automatically add text at the correct points.",
  },
  {
    label: "4. Customize",
    content:
      "Adjust colors, fonts, and backgrounds to match your brand or personal style.",
  },
  {
    label: "5. There's Already a Better Way",
    content: "xxxx",
  },
];

const Workflow = () => {
  const [activeVideo, setActiveVideo] = useState(video1);

  const videos = [video1, video2];

  const handleTabChange = (activeTab) => {
    setActiveVideo(videos[activeTab] || video1);
  };

  return (
    <div className="mt-20 py-20">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-wide font-bold ">
        How it{" "}
        <span className="bg-gradient-to-l from-pink-500 to-pink-500 text-transparent bg-clip-text font-light">
          works
        </span>
      </h2>
      <h3 className="text-2xl sm:text-2xl lg:text-2xl text-center mt-6 tracking-wide ">
        Turn text to video in just a few clicks
      </h3>
      <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-2 lg:space-x-8">
        <div>
          <Accordion panels={panels} onTabChange={handleTabChange} />
          <DownloadButton />
        </div>
        <Video videoSrc={activeVideo} />
      </div>
    </div>
  );
};

export default Workflow;

const Video = ({ videoSrc }) => {
  return (
    <div className="flex mt-10 justify-center">
      <video
        autoPlay
        loop
        className="rounded-3xl w-10/12 shadow-2xl border border-gray-700"
        controls
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

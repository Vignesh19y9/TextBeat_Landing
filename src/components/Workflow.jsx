import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { checklistItems } from "../constants";
import Accordion from "./Accordion";
import "./Accordion.css";

const panels = [
  {
    label: "Begin with Text",
    content: "Introduce the text content you want to showcase in your video.",
  },
  {
    label: "Choose your Music and Colors",
    content: "Select high-energy music and colors that complement each other.",
  },
  {
    label: "Video Creation",
    content:
      "Text Beat will detect beats and automatically add text at the correct points.",
  },
  {
    label: "Customize",
    content:
      "Adjust colors, fonts, and backgrounds to match your brand or personal style.",
  },
  {
    label: "There's Already a Better Way",
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
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-tight font-bold ">
        How it{" "}
        <span className="bg-gradient-to-l from-purple-500 to-violet-800 text-transparent bg-clip-text">
          Works
        </span>
      </h2>
      <h3 className="text-3xl sm:text-3xl lg:text-3xl text-center mt-6 tracking-tight ">
        Turn text to video in just a few clicks
      </h3>
      <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-2 lg:space-x-8">
        <Accordion panels={panels} onTabChange={handleTabChange} />
        <Video videoSrc={activeVideo} />
      </div>
    </div>
  );
};

export default Workflow;

const Video = ({ videoSrc }) => {
  return (
    <div className="hidden lg:flex mt-10 justify-center">
      <video
        autoPlay
        loop
        className="rounded-lg w-10/12 border mx-2 my-4"
        controls
        style={{
          backgroundImage: "linear-gradient(to right, #560DF8, #2B00B0)",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

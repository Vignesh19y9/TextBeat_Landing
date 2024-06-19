import React, { useState } from "react";
import image1 from "../assets/1text.png";
import image2 from "../assets/2audio.png";
import image3 from "../assets/3color.png";
import image4 from "../assets/4create.png";
import Accordion from "./Accordion";
import DownloadButton from "./DownloadButton";
import "./Accordion.css";

const panels = [
  {
    label: "1. Begin with Text",
    content: "Introduce the text content you want to showcase in your video.",
  },
  {
    label: "2. Choose Your Music",
    content: "Select high-energy music with good beats.",
  },
  {
    label: "3. Choose Your Colors",
    content: "Choose colors that complement your style.",
  },
  {
    label: "4. Video Creation",
    content:
      "TextBeat automatically detects beats, places words in sync with the beats, and adds colors.",
  },
];

const Workflow = () => {
  const [activeImage, setActiveImage] = useState(image1);

  const images = [image1, image2, image3, image4];

  const handleTabChange = (activeTab) => {
    setActiveImage(images[activeTab] || image1);
  };

  return (
    <div className="mt-20 ">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-wide font-bold py-10">
        How it{" "}
        <span className="bg-gradient-to-l from-pink-500 to-pink-500 text-transparent bg-clip-text font-light">
          works
        </span>
      </h2>

      <div className="  bg-[#1a1a1a] rounded-3xl  flex flex-col lg:flex-row items-center mt-6 lg:mt-2 py-5">
        <div className="flex flex-1 flex-col items-center">
          <h3 className="text-2xl sm:text-2xl lg:text-2xl text-center mb-6 tracking-wide">
            Turn text to video in just a few clicks
          </h3>
          <Accordion panels={panels} onTabChange={handleTabChange} />
          <h3 className="text-l sm:text-l lg:text-l text-center mt-6 tracking-wide text-gray-600">
            Zero editing skill required
          </h3>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image imageSrc={activeImage} />
        </div>
      </div>
      <DownloadButton />
    </div>
  );
};

export default Workflow;

const Image = ({ imageSrc }) => {
  return (
    <div className="flex justify-center w-full">
      <img
        src={imageSrc}
        alt="Workflow step"
        className="rounded-3xl w-10/12 shadow-2xl border border-gray-700"
      />
    </div>
  );
};

import video1 from "../assets/created1.mp4";
import video2 from "../assets/created2.mp4";
import video3 from "../assets/created3.mp4";

const DemosSection = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-wide font-bold ">
        Created with{" "}
        <span className="bg-gradient-to-l from-violet-300 to-violet-500 text-transparent bg-clip-text font-bold">
          TextBeat{" "}
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row items-center  ">
        <Video videoSrc={video1} />
        <Video videoSrc={video2} />
        <Video videoSrc={video3} />
      </div>
    </div>
  );
};

export default DemosSection;

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

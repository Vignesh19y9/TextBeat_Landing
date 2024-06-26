import video1 from "../assets/faster.webm";
const FasterSection = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-wide font-bold ">
        Reels can't get{" "}
        <span className="bg-gradient-to-l from-orange-300 to-orange-500 text-transparent bg-clip-text font-bold">
          faster{" "}
        </span>
        than this
      </h2>
      <div className="flex flex-col lg:flex-col items-center mt-6 lg:mt-2 ">
        <h3 className="text-lg mt-6 tracking-wide">
          Attractive videos without spending hours
        </h3>
        <Video videoSrc={video1} />
      </div>
    </div>
  );
};

export default FasterSection;

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

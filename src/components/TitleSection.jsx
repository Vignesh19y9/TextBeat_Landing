import video1 from "../assets/faster.mp4";
const TitleSection = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center mt-6 tracking-wide font-bold ">
        Titles that{" "}
        <span className="bg-gradient-to-l from-blue-300 to-blue-500 text-transparent bg-clip-text font-bold">
          grabs{" "}
        </span>
        Attention
      </h2>
      <div className="flex flex-col lg:flex-col items-center mt-6 lg:mt-2 ">
        <div className="flex flex-col space-y-16"></div>
        <Video videoSrc={video1} />
      </div>
    </div>
  );
};

export default TitleSection;

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

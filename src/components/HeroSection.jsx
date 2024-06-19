import video1 from "../assets/video1.mp4";
import waveImg from "../assets/AudioWave.svg";
import DownloadButton from "./DownloadButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-2 lg:space-x-8">
      <div className="flex flex-col space-y-16">
        <Heading />
        {/* <Subtitle waveImg={waveImg} /> */}
        <p className="text-2xl text-center max-w-4xl tracking-wide font-light">
          Eliminate hours of complex video editing.
        </p>
        <DownloadButton />
      </div>
      <Video videoSrc={video1} />
    </div>
  );
};

export default HeroSection;

const Heading = () => {
  return (
    <h1 className="text-5xl sm:text-6xl lg:text-6xl text-center tracking-tight font-bold">
      <span
        className="bg-gradient-to-r text-transparent bg-clip-text"
        style={{
          backgroundImage: "linear-gradient(to bottom,#fff9, #fff, #fff9)",
        }}
      >
        Turn Words into
      </span>
      <span
        className="bg-gradient-to-r text-transparent bg-clip-text font-extrabold tracking-light"
        style={{
          backgroundImage: "linear-gradient(to bottom,#ffff, #560DF8)",
        }}
      >
        {" "}
        Narrative{" "}
      </span>
      <div>
        Videos
        <span className="h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-extrabold ">
          {" "}
          Instantly
        </span>
      </div>
    </h1>
  );
};

const Subtitle = ({ waveImg }) => {
  return (
    <div className="py-10">
      <p className="text-xl sm:text-xl lg:text-xl text-center tracking-wide font-light pt-10">
        <span
          className="bg-gradient-to-r text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to bottom, #fff5, #fff, #fff5)",
          }}
        >
          " All synced to Beat "
        </span>
      </p>
      <img className="h-3 w-100 mr-2 fill-blue-500" src={waveImg} alt="wave" />
    </div>
  );
};

const Video = ({ videoSrc }) => {
  return (
    <div className="flex mt-10 justify-center">
      <video
        autoPlay
        loop
        className="rounded-lg w-11/12 shadow-2xl border border-gray-700"
        controls
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

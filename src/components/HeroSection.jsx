import video1 from "../assets/video1.mp4";
import waveImg from "../assets/AudioWave.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-2 lg:space-x-8">
      <div className="flex flex-col space-y-16">
        <Heading />
        {/* <Subtitle waveImg={waveImg} /> */}
        <p className="text-2xl text-center max-w-4xl tracking-wide font-light">
          Eliminate hours of complex video editing.
        </p>
        <CallToAction />
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

const CallToAction = () => {
  return (
    <div className="flex justify-center my-10">
      <a href="https://apps.apple.com/in/app/text-beat-music-video-maker/id6478076101">
        <button
          type="button"
          className="text-black bg-[#fff] hover:bg-[#fff]/90 focus:ring-5 focus:outline-none focus:ring-[#560DF8] font-bold rounded-full text-xl px-10 py-3 text-center inline-flex items-center dark:focus:ring-[#560DF8] dark:hover:bg-[#fff]/80 me-2 mb-2"
        >
          <svg
            className="w-5 h-5 me-2 -ms-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="apple"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="#000"
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            ></path>
          </svg>
          Free Download
        </button>
      </a>
    </div>
  );
};

const Video = ({ videoSrc }) => {
  return (
    <div className="flex mt-10 justify-center">
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

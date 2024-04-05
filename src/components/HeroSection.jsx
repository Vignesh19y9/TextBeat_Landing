import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide font-extrabold">
        Turn Words into
        <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-transparent bg-clip-text">
          {" "}
          Stunning{" "}
        </span>
        Videos
        <span className="bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text">
          {" "}
          Instantly
        </span>
      </h1>
      <p className="mt-10 text-3xl text-center text-neutral-300 max-w-4xl">
        Eliminate hours of complex video editing.
      </p>
      <p className="mt-5 text-lg text-center text-white max-w-4xl">
        Simply Type, Preview, Export, and Share
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://robsapp1.ck.page/textbeats"
          className="bg-gradient-to-r from-purple-500 to-violet-700 py-5 px-10 mx-5 font-bold rounded-full"
        >
          Start Testing Now →
        </a>
        {/* <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a> */}
      </div>
      Supported on iOS 14+ devices.
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-10/12 border border-purple-700 shadow-sm shadow-violet-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  );
};

export default HeroSection;

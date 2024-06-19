import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo2 from "../assets/logo2.png";
import { navItems } from "../constants";

const Logo = () => (
  <div className="flex items-center flex-shrink-0">
    <img className="h-8 w-8 mr-2 rounded-md" src={logo2} alt="Logo" />
    <span className="text-sm font-bold tracking-wide">Text Beat</span>
  </div>
);

const NavLinks = () => (
  <ul className="hidden lg:flex ml-14 space-x-12">
    {navItems.map((item, index) => (
      <li key={index}>
        <a href={item.href}>{item.label}</a>
      </li>
    ))}
  </ul>
);

const NavActions = () => (
  <div className="hidden lg:flex justify-center space-x-4 items-center">
    <a href="https://robsapp1.ck.page/textbeats">
      <button
        type="button"
        className="text-white hover:text-white bg-[#454545] hover:bg-[#5b5b5b] focus:ring-4 focus:outline-none focus:ring-[#2c2035] font-bold rounded-full text-sm px-4 py-2 text-center inline-flex items-center transition-colors duration-300"
      >
        BECOME TESTER
      </button>
    </a>

    <a href="https://apps.apple.com/in/app/text-beat-music-video-maker/id6478076101">
      <button
        type="button"
        className="text-white hover:text-white bg-[#007AFF] hover:bg-[#75b7fff3] focus:ring-4 focus:outline-none focus:ring-[#2c2035] font-bold rounded-full text-sm px-6 py-2 text-center inline-flex items-center transition-colors duration-300"
      >
        GET
      </button>
    </a>
  </div>
);

const MobileDrawer = ({ mobileDrawerOpen, toggleNavbar }) => (
  <div className="lg:hidden md:flex flex-col justify-end">
    <button onClick={toggleNavbar}>
      {mobileDrawerOpen ? <X /> : <Menu />}
    </button>
  </div>
);

const MobileMenu = ({ mobileDrawerOpen }) =>
  mobileDrawerOpen && (
    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden py-10">
      <ul>
        {navItems.map((item, index) => (
          <li key={index} className="py-4">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col space-y-4 mt-6">
        <a href="https://robsapp1.ck.page/textbeats">
          <button
            type="button"
            className="text-white hover:text-white bg-[#454545] hover:bg-[#5b5b5b] focus:ring-4 focus:outline-none focus:ring-[#2c2035] font-bold rounded-full text-sm px-4 py-2 text-center inline-flex items-center transition-colors duration-300"
          >
            BECOME TESTER
          </button>
        </a>

        <div className="text-center">
          <a href="https://apps.apple.com/in/app/text-beat-music-video-maker/id6478076101">
            <button
              type="button"
              className="text-white hover:text-white bg-[#007AFF] hover:bg-[#75b7fff3] focus:ring-4 focus:outline-none focus:ring-[#2c2035] font-bold rounded-full text-sm px-6 py-2 text-center inline-flex items-center transition-colors duration-300"
            >
              GET
            </button>
          </a>
        </div>
      </div>
    </div>
  );

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="z-50 py-3 backdrop-blur-lg">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <Logo />
          <NavLinks />
          <NavActions />
          <MobileDrawer
            mobileDrawerOpen={mobileDrawerOpen}
            toggleNavbar={toggleNavbar}
          />
        </div>
        <MobileMenu mobileDrawerOpen={mobileDrawerOpen} />
      </div>
    </nav>
  );
};

export default Navbar;

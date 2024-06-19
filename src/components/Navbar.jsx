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
  <div className="hidden lg:flex justify-center space-x-12 items-center">
    <a
      href="https://robsapp1.ck.page/textbeats"
      className="py-2 px-3 border rounded-md"
    >
      Become a tester
    </a>
    <a
      href="https://apps.apple.com/in/app/text-beat-music-video-maker/id6478076101"
      className="bg-gradient-to-r py-2 px-6 rounded-full font-bold"
      style={{
        backgroundImage: "linear-gradient(to right, #560DF8, #560DF8)",
      }}
    >
      <span className="text-sm font-bold tracking-normal">Download Now</span>
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
    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
      <ul>
        {navItems.map((item, index) => (
          <li key={index} className="py-4">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex space-x-6">
        <a href="#" className="py-2 px-3 border rounded-md">
          Sign In
        </a>
        <a
          href="https://apps.apple.com/in/app/text-beat-music-video-maker/id6478076101"
          className="bg-gradient-to-r py-2 px-6 rounded-full font-bold"
          style={{
            backgroundImage: "linear-gradient(to right, #560DF8, #2B00B0)",
          }}
        >
          <span className="text-sm font-bold tracking-normal">
            Download Now
          </span>
        </a>
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

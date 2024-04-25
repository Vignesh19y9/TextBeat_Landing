import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo2 from "../assets/logo2.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    // sticky top-0 border-b border-neutral-700/80
    <nav className=" z-50 py-3 backdrop-blur-lg ">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-8 w-8 mr-2 rounded-md" src={logo2} alt="Logo" />
            <span className="text-sm font-bold tracking-wide">Text Beat</span>
          </div>
          {/* <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul> */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a> */}
            <a
              href="https://robsapp1.ck.page/textbeats"
              //   className="bg-gradient-to-r from-green-600 to-green-800 py-2 px-6 rounded-full font-bold"
              // >
              className="bg-gradient-to-r py-2 px-6 rounded-full font-bold"
              style={{
                backgroundImage: "linear-gradient(to right, #560DF8, #560DF8)",
              }}
            >
              <span className="text-sm font-light tracking-widest">
                Try now
              </span>
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            {/* <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul> */}
            <div className="flex space-x-6">
              {/* <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a> */}
              <a
                href="https://robsapp1.ck.page/textbeats"
                className="bg-gradient-to-r py-2 px-6 rounded-full font-bold"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #560DF8, #2B00B0)",
                }}
              >
                <span className="text-sm font-light tracking-widest">
                  Try now
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

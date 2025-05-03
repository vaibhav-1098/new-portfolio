import React, { useRef, useState } from "react";
import logo from "../images/vr.png";

function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const trigger = useRef(null);
    const mobileNav = useRef(null);

    return (
      <header className="absolute w-full z-30">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 bg-gray-800">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4 relative">
              {/* Light Source */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-lg opacity-80 -z-10"></div>
              {/* Logo */}
              <img
                src={logo}
                alt="vr"
                className="select-none cursor-pointer h-[35px]"
                draggable="false"
              />
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop social links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <a
                    href="https://github.com/vaibhav-1098?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-2xl text-white bg-orange-500 hover:text-gray-100 hover:bg-red-500 w-10 h-10 rounded-lg"
                    aria-label="github"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="mailto:vaibhav.2003.rana@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-2xl text-white bg-orange-500 hover:text-gray-100 hover:bg-red-500 w-10 h-10 rounded-lg"
                    aria-label="email"
                  >
                    <i className="bi bi-envelope"></i>
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="https://www.linkedin.com/in/vaibhav-rana-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-2xl text-white bg-orange-500 hover:text-gray-100 hover:bg-red-500 w-10 h-10 rounded-lg"
                    aria-label="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="https://wa.link/s8ydl0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-2xl text-white bg-orange-500 hover:text-gray-100 hover:bg-red-500 w-10 h-10 rounded-lg"
                    aria-label="whatsapp"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile menu */}
            <div className="md:hidden">
              {/* Hamburger button */}
              <button
                ref={trigger}
                className={`hamburger ${mobileNavOpen && "active"}`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <span className="sr-only">Menu</span>
                <svg
                  className="w-6 h-6 fill-current text-gray-300 hover:text-blue-200 transition duration-150 ease-in-out"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="4" width="24" height="2" rx="1" />
                  <rect y="11" width="24" height="2" rx="1" />
                  <rect y="18" width="24" height="2" rx="1" />
                </svg>
              </button>

              {/* Mobile navigation */}
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="absolute top-full z-20 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out"
                style={
                  mobileNavOpen
                    ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                    : { maxHeight: 0, opacity: 0.8 }
                }
              >
                <ul className="bg-gray-700 px-4 py-2">
                  <li className="flex items-center">
                    <a
                      href="https://github.com/vaibhav-1098?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-white text-orange-400 py-2 w-full justify-start"
                    >
                      <i className="bi bi-github text-2xl mr-2"></i>
                      <span>Github</span>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="mailto:vaibhav.2003.rana@gmail.com"
                      className="flex items-center hover:text-white text-orange-400 py-2 w-full justify-start"
                    >
                      <i className="bi bi-envelope text-2xl mr-2"></i>
                      <span>Email</span>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="https://www.linkedin.com/in/vaibhav-rana-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-white text-orange-400 py-2 w-full justify-start"
                    >
                      <i className="bi bi-linkedin text-2xl mr-2"></i>
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="https://wa.link/s8ydl0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-white text-orange-400 py-2 w-full justify-start"
                    >
                      <i className="bi bi-whatsapp text-2xl mr-2"></i>
                      <span>WhatsApp</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;

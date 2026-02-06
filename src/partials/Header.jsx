import React, { useRef, useState, useEffect } from "react";
import logo from "../images/vr.png";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  const navLinks = [
    { name: "Home", path: "/", end: true },
    { name: "Blogs", path: "/blogs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];

  const closeMobileNav = () => setMobileNavOpen(false);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      closeMobileNav();
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [mobileNavOpen]);

  // 1. Base styles for all links
  const baseStyles = "p-1 px-2 text-white transition duration-150 ease-in-out";

  // 2. Logic to determine active vs inactive styles
  const getLinkClassName = ({ isActive }) =>
    `${baseStyles} ${isActive
      ? "text-blue-400 underline decoration-blue-400"
      : "hover:text-blue-400"
    }`;

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 bg-gray-800">
        <div className="flex items-center justify-between h-20">

          {/* LEFT SECTION: Logo */}
          <div className="flex flex-1 items-center justify-start">
            <div className="shrink-0 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-lg opacity-80 -z-10"></div>
              <Link to="/" aria-label="Home">
                <img
                  src={logo}
                  alt="Logo"
                  className="select-none cursor-pointer h-[35px]"
                  draggable="false"
                />
              </Link>
            </div>
          </div>

          {/* CENTER SECTION: Desktop Nav */}
          <nav className="hidden md:flex shrink-0">
            <ul className="flex items-center">
              {navLinks.map((link, index) => (
                <li key={link.path} className={index === 0 ? "" : "ml-8"}>
                  <NavLink
                    end={link.end}
                    to={link.path}
                    className={getLinkClassName}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT SECTION: Button */}
          <div className="hidden md:flex flex-1 items-center justify-end">
            <Link
              to="/contact"
              className="btn px-6 py-2 bg-blue-600 text-white rounded-full transition hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              ref={trigger}
              className={`p-2 text-gray-300 hover:text-white transition ${mobileNavOpen && "text-white"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/* Mobile navigation tray */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out bg-gray-800 border-t border-gray-700"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0 }
              }
            >
              <ul className="px-6 py-6 flex flex-col items-center gap-4">
                {navLinks.map((link) => (
                  <li key={link.path} className="w-fit">
                    <NavLink
                      end={link.end}
                      to={link.path}
                      className={getLinkClassName}
                      onClick={closeMobileNav}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
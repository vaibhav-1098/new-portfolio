import React from "react";
import logo from "../images/vr.png";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer>
            <div className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Top area: Blocks */}
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
                        {/* 1st block */}
                        <div className="md:col-span-4 lg:col-span-5">
                            <div className="mb-2">
                                {/* Logo */}
                                <img
                                    onClick={scrollToTop}
                                    src={logo}
                                    alt="vr"
                                    className="inline-block select-none h-[25px]"
                                    draggable="false"
                                />
                            </div>
                            <div className="text-gray-400">
                                Offering web development services to build modern, responsive and
                                user-friendly websites, tailored to meet your business needs.
                            </div>
                        </div>

                        {/* 2nd, 3rd and 4th blocks */}
                        <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
                            {/* 2nd block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">
                                    Frontend Techstack
                                </h6>
                                <ul>
                                    <li className="mb-1">
                                        <span className="text-gray-400">React.jsx</span>
                                    </li>
                                    <li className="mb-1">
                                        <span className="text-gray-400">Tailwind CSS</span>
                                    </li>
                                    <li className="mb-1">
                                        <span className="text-gray-400">Redux Toolkit</span>
                                    </li>
                                </ul>
                            </div>

                            {/* 3rd block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">
                                    Backend Techstack
                                </h6>
                                <ul>
                                    <li className="mb-1">
                                        <span className="text-gray-400">Node.js</span>
                                    </li>
                                    <li className="mb-1">
                                        <span className="text-gray-400">Express.js</span>
                                    </li>
                                </ul>
                            </div>

                            {/* 4th block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">
                                    Database <i className="bi bi-database-fill"></i>
                                </h6>
                                <ul>
                                    <li className="mb-1">
                                        <span className="text-gray-400">MongoDB</span>
                                    </li>
                                    <li className="mb-1">
                                        <span className="text-gray-400">MySQL</span>
                                    </li>
                                    <li className="mb-1">
                                        <span className="text-gray-400">FireBase</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom area */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
                        {/* Social links */}
                        <ul className="flex justify-center mb-4 sm:order-1 sm:ml-4 sm:mb-0">
                            <li>
                                <a
                                    href="https://github.com/vaibhav-1098?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center text-2xl text-white bg-gray-800 hover:text-gray-100 hover:bg-red-500 w-10 h-10 rounded-lg"
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
                                    className="flex justify-center items-center text-2xl text-white bg-gray-800 hover:text-gray-100 hover:bg-red-500 w-10 h-10 rounded-lg"
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
                                    className="flex justify-center items-center text-2xl text-white bg-gray-800 hover:text-gray-100 hover:bg-red-500 w-10 h-10 rounded-lg"
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
                                    className="flex justify-center items-center text-2xl text-white bg-gray-800 hover:text-gray-100 hover:bg-red-500 w-10 h-10 rounded-lg"
                                    aria-label="whatsapp"
                                >
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                            </li>
                        </ul>

                        {/* Copyrights note */}
                        <div className="text-gray-300 text-sm">
                            © 2025 All Rights Reserved | vaibhav-rana.in
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

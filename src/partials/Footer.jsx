import React from "react";
import { NavLink } from "react-router-dom"; // Using NavLink for active state logic
import logo from "../images/vr.png";

function Footer() {
    const navLinks = [
        { name: "Home", path: "/", end: true },
        { name: "Blogs", path: "/blogs" },
        { name: "Pricing", path: "/pricing" },
        { name: "Contact", path: "/contact" },
        { name: "FAQs", path: "/faqs" },
    ];

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <footer>
            <hr className="w-4/5 mx-auto mt-12 opacity-80" />
            <div className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
                        {/* 1st block */}
                        <div className="md:col-span-4 lg:col-span-5">
                            <div className="mb-2">
                                <NavLink to="/" onClick={scrollToTop}>
                                    <img
                                        src={logo}
                                        alt="vr"
                                        className="inline-block select-none h-[25px]"
                                        draggable="false"
                                    />
                                </NavLink>
                            </div>
                            <div className="text-gray-400 mb-5">
                                Offering web development services to build modern, responsive and
                                user-friendly websites, tailored to meet your business needs.
                            </div>

                            <div className="mt-5 text-xl text-white">Navigation</div>
                            <ul className="mt-2">
                                {navLinks.map((link, index) => (
                                    <li key={index} className="mb-1">
                                        <NavLink
                                            to={link.path}
                                            end={link.end}
                                            onClick={scrollToTop}
                                            className="inline-block text-gray-400 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:text-white"
                                        >
                                            → {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Techstack Blocks */}
                        <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Frontend Techstack</h6>
                                <ul className="text-gray-400">
                                    <li>React.jsx</li>
                                    <li>NEXT.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>Redux Toolkit</li>
                                </ul>
                            </div>

                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Backend Techstack</h6>
                                <ul className="text-gray-400">
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>Prisma</li>
                                </ul>
                            </div>

                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">
                                    Database <i className="bi bi-database-fill"></i>
                                </h6>
                                <ul className="text-gray-400">
                                    <li>MongoDB</li>
                                    <li>MySQL</li>
                                    <li>FireBase</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom area */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left border-t border-gray-800 pt-8">
                        <ul className="flex justify-center mb-4 sm:order-1 sm:ml-4 sm:mb-0">
                            {[
                                { icon: "bi-github", href: "https://github.com/vaibhav-1098?tab=repositories" },
                                { icon: "bi-envelope", href: "mailto:vaibhav.2003.rana@gmail.com" },
                                { icon: "bi-linkedin", href: "https://www.linkedin.com/in/vaibhav-rana-profile" },
                                { icon: "bi-whatsapp", href: "https://wa.link/s8ydl0" }
                            ].map((social, idx) => (
                                <li key={idx} className="ml-4 first:ml-0">
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex justify-center items-center text-2xl text-white bg-gray-800 hover:bg-red-500 w-10 h-10 rounded-lg transition-all"
                                    >
                                        <i className={`bi ${social.icon}`}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="text-gray-300 text-sm">
                            © {new Date().getFullYear()} All Rights Reserved | rana.net.in
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
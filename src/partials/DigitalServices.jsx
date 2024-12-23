import React from "react";

import FeatImage01 from "../images/hero/1.png";
import FeatImage02 from "../images/hero/2.png";
import FeatImage03 from "../images/hero/3.png";

function DigitalServices() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-orange-500 bg-gray-800 rounded-full mb-4">
                            Strengthen Your Brand Identity
                        </div>
                        <h2 className="h2 mb-4">Elevate Your Digital Presence</h2>
                        <p className="text-xl text-gray-400">
                            All-in-one solutions for domains, hosting, SEO, and Google Ads to grow
                            your online presence and drive success.
                        </p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">
                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                                <img
                                    className="max-w-full mx-auto md:max-w-none h-[350px] md:h-[450px] aspect-[1/1] select-none"
                                    src={FeatImage01}
                                    alt="www"
                                    draggable="false"
                                    data-aos="fade"
                                />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-orange-500 mb-2">
                                        Launch your Brand
                                    </div>
                                    <h3 className="font-architects-daughter h3 mb-3">
                                        Reliable Domain and Hosting
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-4">
                                        Secure, reliable, and hassle-free domain and hosting
                                        solutions with 24/7 support to keep your server running
                                        smoothly.
                                    </p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-orange-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>.com domain for ₹1000 / year</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-orange-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>.in domain for ₹500 / year</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-orange-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>free SSL certificate</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                                <img
                                    className="max-w-full mx-auto md:max-w-none h-[350px] md:h-[450px] aspect-[1/1] select-none"
                                    src={FeatImage02}
                                    alt="seo"
                                    draggable="false"
                                    data-aos="fade"
                                />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <div className="font-architects-daughter text-xl text-orange-500 mb-2">
                                        Rank higher, faster
                                    </div>
                                    <h3 className="font-architects-daughter h3 mb-3">
                                        Boost Visibility with SEO
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-4">
                                        Optimize your website to achieve higher rankings on search
                                        engines, attract your target audience, and drive organic
                                        growth.
                                    </p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-orange-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Comprehensive keyword research analysis</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-orange-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>On-page & Off-page optimization strategies</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-orange-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Track performance for steady growth</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                                <img
                                    className="max-w-full mx-auto md:max-w-none h-[350px] md:h-[450px] aspect-[1/1] select-none"
                                    src={FeatImage03}
                                    alt="ads"
                                    draggable="false"
                                    data-aos="fade"
                                />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-xl text-orange-500 mb-2">
                                        Targeting Audience
                                    </div>
                                    <h3 className="font-architects-daughter h3 mb-3">
                                        Google Ads Campaign
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-4">
                                        Strategically create and manage Google Ads that drive
                                        conversions, enhance visibility, and minimize advertising
                                        costs
                                    </p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-orange-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>Targeted ad strategies for better ROI</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg
                                                className="w-3 h-3 fill-current text-orange-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>
                                                Real-time performance monitoring and adjustments
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg
                                                className="w-3 h-3 fill-current text-orange-500 mr-2 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                            </svg>
                                            <span>
                                                Expert insights to refine campaigns for success
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DigitalServices;

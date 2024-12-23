import React from "react";

function SoftwareSolutions() {
    const features = [
        {
            title: "Responsive Layout",
            description:
                "Designed to work smoothly on desktops, tablets, and phones without any adjustments.",
            icon: "bi bi-phone",
        },
        {
            title: "e-Commerce",
            description:
                "Set up online stores with features like product management and secure checkout.",
            icon: "bi bi-cart",
        },
        {
            title: "Blogs",
            description:
                "Create and manage blogs with tools to improve readability and SEO performance.",
            icon: "bi bi-pen",
        },
        {
            title: "LMS Portal",
            description:
                "Facilitate learning with course management and progress tracking for students.",
            icon: "bi bi-mortarboard-fill",
        },
        {
            title: "Payment Gateway",
            description:
                "Enable payments through UPI and other gateways for easy and secure transactions.",
            icon: "bi bi-piggy-bank",
        },
        {
            title: "Admin Panel",
            description:
                "Manage users, content, and settings from a simple and functional dashboard.",
            icon: "bi bi-person-fill",
        },
    ];

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Web Solutions for Your Business</h2>
                        <p className="text-xl text-gray-400">
                            Offering web development services to build modern, responsive and
                            user-friendly websites to meet your business needs.
                        </p>
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                    >
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center"
                                data-aos-delay={index * 100}
                            >
                                <div
                                    className="w-16 h-16 mb-4 flex items-center justify-center bg-orange-500 rounded-xl hover:bg-red-500"
                                    data-aos="zoom-in"
                                >
                                    <i className={`${feature.icon} text-white text-3xl`}></i>
                                </div>
                                <h4 className="h4 mb-2">{feature.title}</h4>
                                <p className="text-lg text-gray-400 text-center">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SoftwareSolutions;

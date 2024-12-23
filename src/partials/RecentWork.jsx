import React from "react";

function RecentWork() {
    const testimonials = [
        {
            icon: "bi bi-cup-straw",
            name: "SGF - Spice Grill Frame",
            feedback:
                "A food delivery app that allows users to order food online and have it delivered to their doorstep.",
            link: "https://vaibhav-100.github.io/Restaurant-SGF-sec17/",
            dataAos: "flip-up",
            dataAosDelay: "0",
        },
        {
            icon: "bi bi-bank",
            name: "HSJN FinWisdom Pvt Lmt",
            feedback:
                "An online platform offering video courses to enhance trading skills and financial literacy.",
            link: "https://hsjnfinwisdom.com/",
            dataAos: "flip-left",
            dataAosDelay: "200",
        },
        {
            icon: "bi bi-rocket-takeoff-fill",
            name: "Leaders Access",
            feedback:
                "A job portal that connects recruiters with job seekers for seamless hiring opportunities.",
            link: "https://leaders-access.vercel.app/",
            dataAos: "flip-up",
            dataAosDelay: "400",
        },
    ];

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Recent Work Highlights</h2>
                        <p className="text-xl text-gray-400 mb-5 sm:mb-0">
                            Delivering exceptional results that prioritize client satisfaction and
                            success - turning client aspirations into reality.
                        </p>
                    </div>

                    {/* Testimonials */}
                    <div className="max-w-sm mx-auto grid gap-16 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex flex-col h-full p-6 bg-gray-800 rounded-md relative"
                                data-aos={testimonial.dataAos}
                                data-aos-delay={testimonial.dataAosDelay} // AOS delay added here
                            >
                                <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 mb-4">
                                    <a
                                        href={testimonial.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="bg-orange-600 hover:bg-red-500 cursor-pointer text-white rounded-full flex items-center justify-center w-20 h-20">
                                            <i className={`bi ${testimonial.icon} text-4xl`}></i>
                                        </div>
                                    </a>
                                </div>
                                <h3 className="text-xl text-gray-200 font-semibold mb-4 text-center mt-8">
                                    {testimonial.name}
                                </h3>
                                <p className="text-lg text-gray-400 grow">{testimonial.feedback}</p>
                                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 text-center">
                                    <a
                                        className="text-orange-500 hover:text-gray-200 transition duration-150 ease-in-out"
                                        href={testimonial.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit Now <i className="bi bi-box-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecentWork;

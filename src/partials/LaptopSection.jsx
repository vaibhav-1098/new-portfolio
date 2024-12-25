import React, { useEffect, useState } from "react";
import laptop from "../images/laptop.png";
import Loading from "../utils/Loading";
import TypewriterComponent from "../utils/TypewriterComponent";

function LaptopSection() {
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "e-commerce",
            icon: "bi-cart",
            text: "Sell your products online",
        },
        {
            title: "Blogs",
            icon: "bi-search",
            text: "Blogs for better SEO performance",
        },
        {
            title: "Courses",
            icon: "bi-book",
            text: "Launch & Sell your online courses",
        },
    ];

    const handleScroll = (e) => {
        e.preventDefault();
        const scrollHeight = document.documentElement.scrollHeight;
        const targetScrollPosition = scrollHeight * 0.67;

        window.scrollTo({
            top: targetScrollPosition,
            behavior: "smooth",
        });
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [loading]);

    // Handle image loading
    const handleImageLoad = () => {
        setLoading(false); 
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); 
        return () => clearInterval(interval);
    }, [currentSlide]); 


    return (
        <>
            {loading && <Loading />}

            <section className={loading ? "hidden" : ""}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 pt-32 pb-10 md:pt-40 md:pb-16">
                        <div className="text-center lg:text-left">
                            <h1
                                className="h1 mb-4"
                                style={{ fontFamily: "Comic Sans MS, sans-serif" }}
                            >
                                <span className="border-b-2 border-orange-500">
                                    <span>.</span>Vaibhav Rana<span>..</span>
                                </span>
                            </h1>
                            <div className="text-xl text-gray-500 mb-8">
                                Hello, I'm a <TypewriterComponent />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-5 w-full">
                                <a
                                    className="btn mx-auto sm:mx-0"
                                    href="https://drive.google.com/uc?export=download&id=1JHDSUkQyXbHiSf2KdRWawbeuFGqjUxLh"
                                    rel="noopener noreferrer"
                                >
                                    Download CV
                                </a>
                                <a
                                    className="btn mx-auto sm:mx-0"
                                    id="circle-btn"
                                    onClick={handleScroll}
                                >
                                    View Projects
                                </a>
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center">
                            <div className="laptop relative overflow-hidden">
                                <img
                                    src={laptop}
                                    draggable="false"
                                    className="select-none"
                                    onLoad={handleImageLoad}
                                    alt="Laptop"
                                />
                                <div
                                    id="slide"
                                    className="absolute inset-0 flex flex-col items-center justify-evenly pb-3 text-center overflow-hidden text-xl text-white bg-gray-800 transition-opacity duration-1000 ease-in-out"
                                >
                                    <h3 className="sm:text-4xl text-3xl font-architects-daughter">
                                        {slides[currentSlide].title}
                                    </h3>
                                    <i
                                        className={`bi ${slides[currentSlide].icon} slide-icon text-6xl`}
                                    ></i>
                                    <div className="slide-text">{slides[currentSlide].text}</div>
                                </div>
                            </div>

                            <button
                                onClick={prevSlide}
                                className="absolute select-none left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                            >
                                &lt;
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute select-none right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                            >
                                &gt;
                            </button>

                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 flex space-x-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-8 h-2 rounded-full ${
                                            currentSlide === index ? "bg-red-500" : "bg-gray-700"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LaptopSection;

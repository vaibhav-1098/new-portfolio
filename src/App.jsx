import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";
import "./css/new.css";
import "./css/marquee.css";

import AOS from "aos";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import GlowEffect from "./utils/GlowEffect";
import Stars from "./utils/Stars";

function App() {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            // once: true,
            duration: 500,
        });
    }, []);

    useEffect(() => {
        document.querySelector("html").style.scrollBehavior = "auto";
        window.scroll({ top: 0 });
        document.querySelector("html").style.scrollBehavior = "";
    }, [location.pathname]); // triggered on route change

    return (
        <>

            <div className="flex flex-col min-h-screen overflow-hidden">
                <Stars id="stars" />
                {/* <GlowEffect /> */}
                <main className="grow">
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/blogs" element={<Blogs />} />
                        <Route exact path="/pricing" element={<Pricing />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/faqs" element={<FAQs />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                    <Footer />
                </main>
            </div>

        </>
    );
}

export default App;

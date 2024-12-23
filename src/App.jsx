import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";
import "./css/new.css";
import "./css/marquee.css";

import AOS from "aos";

import Home from "./pages/Home";

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
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;

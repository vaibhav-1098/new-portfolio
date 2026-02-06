import React from "react";

import ContactForm from "../partials/ContactForm";
import DigitalServices from "../partials/DigitalServices";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import LaptopSection from "../partials/LaptopSection";
import Numbers from "../partials/Numbers";
import RecentWork from "../partials/RecentWork";
import SoftwareSolutions from "../partials/SoftwareSolutions";
import TechStack from "../partials/TechStack";
import GlowEffect from "../utils/GlowEffect";
import Stars from "../utils/Stars";

function Home() {
    return (

        <>
            <LaptopSection />
            <Numbers />
            <SoftwareSolutions />
            <DigitalServices />
            <RecentWork />
            <TechStack />
            <ContactForm />
        </>

    );
}

export default Home;

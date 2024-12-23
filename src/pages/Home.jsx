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
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <Stars id="stars" />
            <GlowEffect />

            <main className="grow">
                <LaptopSection />
                <Numbers />
                <SoftwareSolutions />
                <DigitalServices />
                <RecentWork />
                <TechStack />
                <ContactForm />
            </main>

            <Footer />
        </div>
    );
}

export default Home;

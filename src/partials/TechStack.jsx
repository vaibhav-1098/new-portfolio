import React from "react";
import logo1 from "../images/logos/1.svg";
import logo2 from "../images/logos/2.svg";
import logo3 from "../images/logos/3.svg";
import logo4 from "../images/logos/4.svg";
import logo5 from "../images/logos/5.svg";
import logo6 from "../images/logos/6.svg";
import logo7 from "../images/logos/7.svg";
import logo8 from "../images/logos/8.svg";

const TechStack = () => {
    return (
        <section className="mb-14 sm:mb-24">
            <h2 className="h2 mb-4 text-center">TechStack used - MERN</h2>
            <div className="wrapper bg-gray-800">
                <div className="item item1" style={{ backgroundImage: `url(${logo1})` }}></div>
                <div className="item item2" style={{ backgroundImage: `url(${logo2})` }}></div>
                <div className="item item3" style={{ backgroundImage: `url(${logo3})` }}></div>
                <div className="item item4" style={{ backgroundImage: `url(${logo4})` }}></div>
                <div className="item item5" style={{ backgroundImage: `url(${logo5})` }}></div>
                <div className="item item6" style={{ backgroundImage: `url(${logo6})` }}></div>
                <div className="item item7" style={{ backgroundImage: `url(${logo7})` }}></div>
                <div className="item item8" style={{ backgroundImage: `url(${logo8})` }}></div>
            </div>
        </section>
    );
};

export default TechStack;

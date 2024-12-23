import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Numbers = () => {
    const items = [
        {
            title: "Clients Serviced",
            count: 10,
        },
        {
            title: "Client Satisfaction",
            count: 100,
        },
        {
            title: "GitHub repositories",
            count: 40,
        },
    ];

    return (
        <section className="mx-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="number-section rounded-lg border-2 border-orange-400 glass p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="text-center">
                            <div className="font-semibold text-3xl text-orange-600">
                                <InView triggerOnce threshold={0.5}>
                                    {({ inView, ref }) => (
                                        <div ref={ref}>
                                            {inView && item.count !== 10 ? (
                                                <CountUp
                                                    start={0}
                                                    end={item.count}
                                                    duration={4}
                                                    separator=","
                                                />
                                            ) : (
                                                item.count
                                            )}
                                            {item.title === "Client Satisfaction" ? "%" : "+"}
                                        </div>
                                    )}
                                </InView>
                            </div>
                            <div className="mt-2 text-lg">{item.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Numbers;

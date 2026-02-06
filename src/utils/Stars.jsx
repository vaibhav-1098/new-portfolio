import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React, { useEffect, useMemo, useRef, useState } from "react";

const Stars = (props) => {
    const [init, setInit] = useState(false);
    const particlesInitialized = useRef(false); 

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "grab",
                    },
                    onHover: {
                        enable: false,
                        mode: "grab",
                    },
                },
                modes: {
                    push: {
                        distance: 200,
                        duration: 15,
                    },
                    grab: {
                        distance: 150,
                    },
                },
            },
            particles: {
                color: {
                    value: [
                        "#FFBD33",
                        "#FF5733",
                        "#33FF57",
                        "#5733FF",
                        "#5733FF",
                        "#FFBD33",
                        "#33FFBD",
                        "#5733FF",
                        "#FF33A1",
                        "#33FFBD",
                        "#FF85E1",
                        "#FF9B00",
                        "#00FFAB",
                        "#FF008C",
                        "#00FFFF",
                        "#FFD700",
                        "#FF00FF",
                        "#FFFF00",
                        "#7DFF33",
                        "#FF6699",
                        "#FF6347",
                    ],
                },
                links: {
                    color: "#FFFFFF",
                    distance: 150,
                    enable: false,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 250,
                },
                opacity: {
                    value: 1.0,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        []
    ); // Only recompute if necessary

    useEffect(() => {
        if (!particlesInitialized.current) {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => {
                setInit(true);
                particlesInitialized.current = true;
            });
        }
    }, []);

    return <Particles id={props.id} options={options} />;
};

export default React.memo(Stars);

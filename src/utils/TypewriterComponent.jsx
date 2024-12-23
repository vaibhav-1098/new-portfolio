import React from "react";
import TypingEffect from "react-typing-effect";

const TypewriterComponent = () => {
    return (
        <div>
            <TypingEffect
                text={["Fullstack Developer", "Freelancer"]}
                speed={80}
                eraseDelay={500}
                typingDelay={0}
                cursorRenderer={(cursor) => <span>{cursor}</span>}
            />
        </div>
    );
};

export default TypewriterComponent;

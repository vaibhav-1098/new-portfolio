import React, { useState, useEffect } from 'react';

const GlowEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the listener when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="full-screen hidden sm:block" style={{ left: mousePosition.x, top: mousePosition.y }}>
      <div className="glowing-box"></div>
    </div>
  );
};

export default GlowEffect;

// components/Marquee.js
import React from 'react';

function Marquee({ children, speed = 200 }) {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <div
        className="flex items-center gap-8 w-fit animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}

export default Marquee;
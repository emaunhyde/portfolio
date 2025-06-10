"use client";

import { useEffect, useState } from "react";

export default function ModernCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let animationFrame;

    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      // Add to trail
      setTrail((prevTrail) => {
        const newTrail = [newPosition, ...prevTrail.slice(0, 15)]; // Keep 15 trail points
        return newTrail;
      });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isClient]);

  const colors = [
    "#ACBE5B",
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#feca57",
    "#ff9ff3",
    "#54a0ff",
  ];

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor only */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Trail */}
      {trail.map((point, index) => (
        <div
          key={`trail-${index}`}
          style={{
            position: "fixed",
            left: point.x,
            top: point.y,
            width: "3px",
            height: "3px",
            backgroundColor: colors[index % colors.length],
            transform: "translate(-50%, -50%)",
            opacity: ((trail.length - index) / trail.length) * 0.7,
            zIndex: 100,
            pointerEvents: "none",
            transition: "opacity 0.1s ease-out",
          }}
        />
      ))}

      {/* Main cursor - rendered last so it appears on top */}
      <div
        style={{
          position: "fixed",
          left: mousePosition.x,
          top: mousePosition.y,
          width: "8px",
          height: "8px",
          backgroundColor: "#ACBE5B",
          transform: "translate(-50%, -50%)",
          zIndex: 101,
          pointerEvents: "none",
        }}
      />
    </>
  );
}

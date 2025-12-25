"use client";

import { useRef } from "react";
import CanvasSnow from "./CanvasSnow";

export default function SnowGlobe() {
  const sceneRef = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent) {
    if (!sceneRef.current) return;
    const { width, height, left, top } =
      sceneRef.current.getBoundingClientRect();

    const x = ((e.clientX - left) / width - 0.5) * 10;
    const y = ((e.clientY - top) / height - 0.5) * 10;

    sceneRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }

  return (
    <div className="globe-wrapper" onMouseMove={handleMove}>
      <div className="globe">
        <div ref={sceneRef} className="scene">
          <CanvasSnow intensity={140} />
          <div className="background" />
          <div className="snow-layer" />
        </div>
      </div>
      <div className="base" />
    </div>
  );
}

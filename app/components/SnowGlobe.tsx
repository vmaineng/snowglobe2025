"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import CanvasSnow from "./CanvasSnow";

export default function SnowGlobe() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [shaking, setShaking] = useState<boolean>(false);
  const [snowIntensity, setSnowIntensity] = useState<number>(140);

  const shakeGlobe = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 400);
  };

  const handleMove = (e: React.MouseEvent) => {
    if (!sceneRef.current) return;
    const { width, height, left, top } =
      sceneRef.current.getBoundingClientRect();

    const x = ((e.clientX - left) / width - 0.5) * 10;
    const y = ((e.clientY - top) / height - 0.5) * 10;

    sceneRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <>
      <div className="globe-wrapper" onMouseMove={handleMove}>
        <div className={`globe ${shaking ? "shaking" : ""}`}>
          <div ref={sceneRef} className="scene">
            <div className="background" />
            <Image
              src="/xmas.png"
              alt="Face"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center 25%",
              }}
              className="z-10"
            />
            <CanvasSnow
              intensity={shaking ? snowIntensity * 2 : snowIntensity}
            />
          </div>
        </div>
        <div className="base" />

        <div className="bg-center">
          <button
            onClick={shakeGlobe}
            style={{
              marginTop: "20px",
              padding: "10px 16px",
              borderRadius: "999px",
              background: "#ffffff22",
              color: "white",
              border: "1px solid #ffffff33",
              cursor: "pointer",
            }}
          >
            Shake ❄️
          </button>
        </div>
      </div>
    </>
  );
}

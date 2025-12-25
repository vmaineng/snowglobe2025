"use client";

export default function SnowGlobe() {
  return (
    <div className="globe-wrapper">
      <div className="globe">
        <div className="scene">
          <div className="background" />
          <div className="snow-layer" />
        </div>
      </div>
      <div className="base" />
    </div>
  );
}

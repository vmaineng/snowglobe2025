import SnowGlobe from "./components/SnowGlobe";

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <h1 className="title">Interactive Snow Globe</h1>
          <p className="subtitle">
            Move your cursor over the globe • Shake for a snowstorm burst
          </p>
        </div>

        <SnowGlobe />
      </div>
    </div>
  );
}

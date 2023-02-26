import lottie from "lottie-web";
import animationData from "./lottie/comingSoon.json";
import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    lottie.destroy();
    lottie.loadAnimation({
      container: lottieContainer.current,
      animationData: animationData,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div ref={lottieContainer} style={{ width: "70vw", margin: "auto" }}></div>

      <div className="content">
        <h1 className="pulse">WebGenie</h1>
        <p className="para">Hang tight! Something exciting is coming soon ;)</p>
      </div>
    </div>
  );
}

export default App;

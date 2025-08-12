import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

function Background() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE, // pass in the THREE instance
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xdfd0b8,
      backgroundColor: 0x222831,
      points: 7,
      spacing: 18,
      maxDistance: 25,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  return (
    <div
      id="vanta"
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] opacity-20"
    ></div>
  );
}

export default Background;

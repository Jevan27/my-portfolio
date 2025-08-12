// src/components/MobileBlocker.jsx
import React from "react";

function MobileBlocker() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md">
      <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center shadow-xl backdrop-blur-lg text-white max-w-sm">
        <h1 className="text-2xl font-bold mb-2">Please view this on desktop</h1>
        <p className="text-sm opacity-80">
          This experience is designed for larger screens.
        </p>
      </div>
    </div>
  );
}

export default MobileBlocker;

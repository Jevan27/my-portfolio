/* eslint-disable react-hooks/exhaustive-deps */
// src/components/ExpertiseLogic.jsx
import React, { useEffect, useRef, useState } from "react";

const ExpertiseLogic = ({ data }) => {
  return data.map((item) => <ExpertiseCard key={item.id} item={item} />);
};

const ExpertiseCard = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-center justify-center w-64 h-80 p-6 rounded-2xl border border-white/20 backdrop-blur-md bg-white/10 shadow-lg hover:scale-105 transition-transform duration-300 ${
        isVisible ? "slide-in-left" : "opacity-0"
      }`}
    >
      <img
        src={item.image}
        alt={item.expertise}
        className="w-20 h-20 object-contain mb-4"
      />
      <h2 className="text-2xl font-bold text">{item.expertise}</h2>
      <p className="text-center text-granite-green/80 mt-2">{item.description}</p>
    </div>
  );
};

export default ExpertiseLogic;

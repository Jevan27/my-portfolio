// src/pages/Expertise.jsx
import React from "react";
import { expertiseData } from "../../data/Expertise";
import ExpertiseLogic from "./ExpertiseLogic";
import "./css/expertise.css"; // Backup CSS (if Tailwind fails)


const Expertise = () => {
  return (
    <div  className=" flex flex-col items-center justify-center mt-22">
      <h1 className="text-4xl font-bold text mb-8 fade-in">Expertise</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <ExpertiseLogic data={expertiseData} />
      </div>
    </div>
  );
};

export default Expertise;

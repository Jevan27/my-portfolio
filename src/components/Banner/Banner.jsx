// src/components/Banner.jsx
import { useState } from "react";
import mypicture from "../../assets/image/mypicture.png";
import acronyms from "../../data/Acronyms";
import Letter from "./Letter";

function Banner() {
  const [hoveredLetter, setHoveredLetter] = useState(null);

  const nameArray = ["J", "E", "V", "A", "N"];
  const surnameArray = ["C", "A2", "M", "P", "I", "L", "L2", "O", "S"];

  return (
    <section id="home" className="flex items-center space-x-16 p-4 mt-14 text mb-56 h-[50vh]">
      {/* Profile Image */}
      <div>
        <img
          src={mypicture}
          alt="Jevan Campillos"
          className="w-[23rem] h-[23rem] object-cover rounded-full fade-in"
        />
      </div>

      {/* Name + Line + Role */}
      <div className="flex flex-col items-start fade-in">
        <h1 className="text-5xl font-bold flex space-x-1">
          {nameArray.map((key) => (
            <Letter
              key={key}
              letterKey={key}
              acronym={hoveredLetter === key ? acronyms[key] : null}
              onHover={setHoveredLetter}
              onLeave={() => setHoveredLetter(null)}
            />
          ))}
          <span className="mx-4" />
          {surnameArray.map((key) => (
            <Letter
              key={key}
              letterKey={key}
              acronym={hoveredLetter === key ? acronyms[key] : null}
              onHover={setHoveredLetter}
              onLeave={() => setHoveredLetter(null)}
            />
          ))}
        </h1>

        <div
          className={`w-[32rem] h-1 bg-granite-green my-0.5 transition-opacity duration-500 ${
            hoveredLetter ? "opacity-0" : "opacity-100"
          }`}
        />
        <h2
          className={`text-4xl transition-opacity duration-500 ${
            hoveredLetter ? "opacity-0" : "opacity-100"
          }`}
        >
          Front-End Developer
        </h2>
      </div>
    </section>
  );
}

export default Banner;

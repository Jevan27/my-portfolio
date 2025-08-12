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
    <section
      id="home"
      className="
        flex flex-col md:flex-row items-center justify-center gap-10 p-4 text h-auto md:h-[80vh]
      "
    >
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={mypicture}
          alt="Jevan Campillos"
          className="
            object-cover rounded-full fade-in
            w-40 h-40
            sm:w-56 sm:h-56
            md:w-[23rem] md:h-[23rem]
          "
        />
      </div>

      {/* Name + Line + Role */}
      <div className="flex flex-col items-center md:items-start fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex flex-wrap justify-center md:justify-start space-x-1">
          {nameArray.map((key) => (
            <Letter
              key={key}
              letterKey={key}
              acronym={hoveredLetter === key ? acronyms[key] : null}
              onHover={setHoveredLetter}
              onLeave={() => setHoveredLetter(null)}
            />
          ))}
          <span className="mx-2" />
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
          className={`w-48 sm:w-72 md:w-[32rem] h-1 bg-granite-green my-0.5 transition-opacity duration-500 ${
            hoveredLetter ? "opacity-0" : "opacity-100"
          }`}
        />
        <h2
          className={`text-xl sm:text-2xl md:text-4xl transition-opacity duration-500 ${
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

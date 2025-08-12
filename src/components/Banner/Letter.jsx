// src/components/Letter.jsx

function Letter({ letterKey, acronym, onHover, onLeave }) {
  const letter = letterKey.replace(/\d/, "");

  return (
    <span
      className="relative cursor-pointer hover:text-granite-green transition-colors duration-300"
      onMouseEnter={() => onHover(letterKey)}
      onMouseLeave={onLeave}
    >
      {letter}
      {acronym && (
        <div className="absolute top-full mt-0.5 left-1/2 -translate-x-1/2 text-center text-2xl text-granite-green drop-in opacity-0 group-hover:opacity-100 space-y-0">
          {acronym.split("").map((char, idx) => (
            <div key={idx}>{char}</div>
          ))}
        </div>
      )}
    </span>
  );
}

export default Letter;
import React from "react";
import useNavbarAnim from "./NavbarAnim"; // import the hook

const Navbar = () => {
  const scrolled = useNavbarAnim();
  const scrollToSection = (id) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};
  return (
    <nav
      className={`w-full text animate-fadeSlideDown sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark/100" : "bg-dark/0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-3xl font-bold cursor-default">JVNCMPLLS</div>

        <ul className="flex space-x-8 font-medium text-[1.3rem]">
          <li className="hover:text-granite-green cursor-pointer transition-colors duration-500" onClick={() => scrollToSection("home")}>Home</li>
          <li className="hover:text-granite-green cursor-pointer transition-colors duration-500" onClick={() => scrollToSection("expertise")}>Expertise</li>
          <li className="hover:text-granite-green cursor-pointer transition-colors duration-500" onClick={() => scrollToSection("projects")}>Projects</li>
          <li className="hover:text-granite-green cursor-pointer transition-colors duration-500" onClick={() => scrollToSection("contacts")}>Contacts</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// src/hooks/NavbarAnim.jsx
import { useState, useEffect } from "react";

const useNavbarAnim = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
};

export default useNavbarAnim;

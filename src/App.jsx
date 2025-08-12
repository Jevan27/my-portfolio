import React from "react";
import { useState, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import Expertise from "./components/Expertise/Expertise";
import Navbar from "./components/Navbar/navbar";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Section from "./components/Layout/Section";
import Footer from "./components/Footer/Footer";
import MobileBlocker from "./components/Layout/MobileBlocker";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // "lg" breakpoint
    };
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Background />
      {isMobile && <MobileBlocker />}
      {!isMobile && (
        <>
          <Navbar />
          <Section id="banner" spacing={null}>
            <Banner />
          </Section>
          <Section id="expertise">
            <Expertise />
          </Section>
          <Section id="projects" spacing={null}>
            <Projects />
          </Section>
          <Section id="contacts">
            <Contacts />
          </Section>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

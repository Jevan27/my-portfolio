import React from "react";
import Banner from "./components/Banner/Banner";
import Expertise from "./components/Expertise/Expertise";
import Navbar from "./components/Navbar/navbar";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Section from "./components/Layout/Section";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Background />
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
      
      <Footer/>
    </>
  );
}

export default App;

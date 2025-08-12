import React from "react";
import Banner from "./components/Banner/Banner";
import Expertise from "./components/Expertise/Expertise";
import Navbar from "./components/Navbar/navbar";
import Background from "./components/Background/Background";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Banner />
      <div id="expertise" className="h-16"></div>
      <Expertise />
      <Projects/>
    </>
  );
}

export default App;

import React from "react";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Navbar from "./components/Navbar/navbar";
import Skills from "./components/skills/Skills";
import Education from "./components/Education/education";
import BlurBlob from "./BlurBlob";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="bg-[#050414]">
        <BlurBlob
          position={{ top: "35%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

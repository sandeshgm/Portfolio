import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skills Categories */}
      <div className="flex flex-wrap gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skill Items - 3 per row on larger screens */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div className="flex flex-col items-center justify-center space-y-2 bg-gray-800 border border-gray-700 rounded-2xl py-3 px-3 hover:shadow-[0_0_15px_rgba(130,69,236,0.4)] transition">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <span className="text-sm sm:text-base text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div
                    className="h-24 sm:h-28 w-full flex flex-col items-center justify-center 
                      bg-gray-800 border border-gray-700 rounded-2xl 
                      hover:shadow-[0_0_15px_rgba(130,69,236,0.4)] 
                      transition"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                    />
                    <span className="text-[clamp(0.65rem,2vw,0.95rem)] text-gray-300 font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

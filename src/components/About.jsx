import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#00334d] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container div */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 py-6 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, this is a portfolio website. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm an IT Fresher eager to kickstart a career in the technology
              industry. Adept at learning new technologies, with a solid
              foundation in programming languages and problem-solving skills.
              Dedicated to contributing effectively to projects and motivated to
              grow both professionally and personally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

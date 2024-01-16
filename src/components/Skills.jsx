import React from "react";

import HTML from "../assests/html.png";
import Java from "../assests/java.png";
import JavaScript from "../assests/javascript.png";
import ReactImg from "../assests/react.png";
import Github from "../assests/github.png";
import Tailwind from "../assests/tailwind.png";
import Next from "../assests/next.png"
import Typescript from "../assests/typescript.png"

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import useSmoothHorizontalScroll from "use-smooth-horizontal-scroll";

const Skills = () => {
  const {scrollContainerRef, scrollTo, handleScroll, isAtStart, isAtEnd} = useSmoothHorizontalScroll();



  return (
    <div name="skills" className="bg-[#00334d] w-full h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-400 inline">
            Skills
          </p>
          <p className="py-8">These are the technologies i have worked with</p>
        </div>

        <div className="flex ">
          <div className="flex flex-nowrap items-center w-full  text-center m-4 py-4">
            <MdChevronLeft
              onClick={() => scrollTo(-500)}
              disabled = {isAtStart}
          
              size={40}
              className=" left bg-black rounded-full opacity-50 z-10 hover:opacity-80 hover:block cursor-pointer"
            />

            <div
              id={"slider"} ref={scrollContainerRef} onScroll={handleScroll}
              className="flex flex-nowrap items-center w-full h-full text-center my-4 py-8 overflow-x-scroll scroll-smooth no-scrollbar"
            >
              <div className="min-w-[300px] lg:min-w-[400px] shadow-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-500 mx-8 p-8">
                <img className="w-20 mx-auto" src={ReactImg} alt="" />
                <p className="my-4">ReactJS</p>
              </div>
              <div className="min-w-[300px] lg:min-w-[400px] shadow-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-500 mx-8 p-8">
                <img className="w-20 mx-auto" src={Next} alt="" />
                <p className="my-4">NextJS</p>
              </div>
              <div className="min-w-[300px] lg:min-w-[400px] shadow-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-500 mx-8 p-8">
                <img className="w-20 mx-auto" src={JavaScript} alt="" />
                <p className="my-4">JavaScript</p>
              </div>
              <div className="min-w-[300px] lg:min-w-[400px] shadow-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-500 mx-8 p-8">
                <img className="w-20 mx-auto" src={Typescript} alt="" />
                <p className="my-4">TypeScript</p>
              </div>
              <div className="min-w-[300px] lg:min-w-[400px] shadow-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-500 mx-8 p-8">
                <img className="w-20 mx-auto" src={Java} alt="" />
                <p className="my-4">Java</p>
              </div>
              <div className="min-w-[300px] lg:min-w-[400px] shadow-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-500 mx-8 p-8">
                <img className="w-20 mx-auto" src={Tailwind} alt="" />
                <p className="my-4">TailwindCSS</p>
              </div>
              <div className="min-w-[300px] lg:min-w-[400px] shadow-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-500 mx-8 p-8">
                <img className="w-20 mx-auto" src={Github} alt="" />
                <p className="my-4">Github</p>
              </div>
              <div className="min-w-[300px] lg:min-w-[500px] w-full shadow-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-500 mx-8 p-8">
                <img className="w-20 mx-auto" src={HTML} alt="" />
                <p className="my-4">HTML</p>
              </div>
            </div>

            <MdChevronRight
              onClick={() => scrollTo(500)}
              disabled={isAtEnd}
              size={40}
              className=" left bg-black rounded-full opacity-50 z-10 hover:opacity-80 hover:block cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

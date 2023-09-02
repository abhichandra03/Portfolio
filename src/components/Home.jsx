import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#00334d] w-full h-screen">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#1affff]">
          Abhishek Chandra
        </h1>
        <h2 className="text-4xl sm:text-6xl text-[#808080]">
          Front end developer
        </h2>
        <p className="text-[#808080] py-4 max-w-[700px]">
          A highly motivated and hardworking computer science professional
          looking for a challenging position to utilize my software skills.
        </p>

        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-pink-600 hover:bg-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Netflix from "../assests/netflix.png";
import Moviebot from "../assests/moviebot.png";
import TicTacToe from "../assests/tictactoe.png"

const Work = () => {
  return (
    <div name="work" className="bg-[#00334d] w-full text-gray-300 md:h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-400">
            Work
          </p>
          <p className="py-6">Here are some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div className="flex flex-col">
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                {" "}
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://netflix-clone-react-pink.vercel.app/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/abhichandra03/Netflix-Clone"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <p className="py-6 justify-center text-center font-bold text-gray-400">Netflix Clone</p>
          </div>
          <div>
          <div
            style={{ backgroundImage: `url(${Moviebot})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                {" "}
                Next JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://movie-bot-eosin-seven.vercel.app/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/abhichandra03/MovieBot"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <p className="py-6 justify-center text-center font-bold text-gray-400">MovieBot</p>
          </div>
          <div>
          <div
            style={{ backgroundImage: `url(${TicTacToe})`}}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                {" "}
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://tic-tac-toe-wwxd.vercel.app/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/abhichandra03/TicTacToe"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <p className="py-6 justify-center text-center font-bold text-gray-400">Tic Tac Toe Game</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

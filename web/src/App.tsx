import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";
import MainTitle from "./components/MainTitle";

function App() {
  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
        <MainTitle />
        <div className="grid grid-cols-6 gap-6 mt-16">
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image01.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                {" "}
                League Of Legends{" "}
              </strong>
              <span className="text-zinc-300 text-sm block mt-1"> 4 Ads </span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image02.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block"> Dota 2 </strong>
              <span className="text-zinc-300 text-sm block mt-1"> 4 Ads </span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image03.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                {" "}
                Counter Strike{" "}
              </strong>
              <span className="text-zinc-300 text-sm block mt-1"> 4 Ads </span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image04.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                {" "}
                Apex Legends{" "}
              </strong>
              <span className="text-zinc-300 text-sm block mt-1"> 4 Ads </span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image05.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block"> Fortnite </strong>
              <span className="text-zinc-300 text-sm block mt-1"> 4 Ads </span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image06.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                {" "}
                World of Warcraft{" "}
              </strong>
              <span className="text-zinc-300 text-sm block mt-1"> 4 Ads </span>
            </div>
          </a>
        </div>

        <div className="pt-1 bg-duo-gradient self-stretch rounded-lg mt-8 overflow-hidden">
          <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
              <strong className="text-2xl text-white font-black block">
                Did not find your DUO?
              </strong>
              <span className="text-zinc-400 block">
                Post an ad to find new players.
              </span>
            </div>

            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={24} />
              Post ad
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

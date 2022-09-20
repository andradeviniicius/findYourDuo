import { MagnifyingGlassPlus } from "phosphor-react";
type Props = {};

export default function CreateGame(params: Props) {
  return (
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
  );
}

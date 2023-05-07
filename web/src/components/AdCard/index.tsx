import { GameController } from "phosphor-react";

import { motion } from "framer-motion";

import transformArrayInDaysAweek from "../../utils/transformArrayInDaysAweek";
import convertMinutesToHourString from "../../../pages/api/utils/convertMinuteStringToHours";

type Props = {
  adId: Number;
  userName: String;
  timePlaying: Number;
  daysOfWeek: number[];
  hourStart: number;
  hourEnd: number;
  voiceCall: boolean;
};

export default function AdCard({
  adId,
  userName,
  timePlaying,
  daysOfWeek,
  hourStart,
  hourEnd,
  voiceCall,
}: Props) {
  return (
    <motion.div className="carousel-item relative w-72 snap-start        text-white">
      <div className="h-full w-full aspect-[3/4] block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 ">
        <div className="w-72 h-fit mx-auto ">
          <div className="border-0 rounded-lg relative flex flex-col w-auto bg-[#2A2634] outline-none focus:outline-none">
            <div className="flex items-start justify-center flex-col py-5 px-5">
              <label className="mb-1 font-light" htmlFor="userName">
                Nome
              </label>
              <p className="mb-4 font-bold" id="userName">
                {userName}
              </p>

              <label className="mb-1 font-light" htmlFor="timePlaying">
                Tempo de jogo
              </label>
              <p className="mb-4 font-bold" id="timePlaying">
                {timePlaying + " Anos"}
              </p>

              <label className="mb-1 font-light" htmlFor="availability">
                Disponibilidade
              </label>
              <div className="mb-4 font-bold" id="availability">
                {transformArrayInDaysAweek(daysOfWeek)?.join(" ● ")} <br />
                {convertMinutesToHourString(hourStart)} -
                {convertMinutesToHourString(hourEnd)}
              </div>

              <label className="mb-1 font-light" htmlFor="voiceCall">
                Chamada de áudio?
              </label>
              <div className="mb-4 font-bold" id="voiceCall">
                {voiceCall ? (
                  <p className="text-emerald-400">Sim</p>
                ) : (
                  <p className="text-red-400">Não</p>
                )}
              </div>

              <button
                type="button"
                onClick={() => window.alert("Sorry something went wrong :(")}
                className=" w-full py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center justify-center gap-3"
              >
                <GameController size={24} />
                Conectar
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

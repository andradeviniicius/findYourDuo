import { GameController } from "phosphor-react";
import getPortugueseDayOfWeek from "../../utils/getPortugueseDayOfWeek";
import isConnectionOnline from "../../utils/isConnectionOnline";

import { motion } from "framer-motion";

type Props = {
  adId: Number;
  userName: String;
  timePlaying: Number;
  daysOfWeek: string[];
  hourStart: string;
  hourEnd: string;
  voiceCall: boolean;
  discordNickname: string;
};

export default function AdCard({
  adId,
  discordNickname,
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
              <div className="flex flex-row justify-between w-full">
                <div className="flex-col">
                  <label className="mb-1 font-light" htmlFor="userName">
                    Nome
                  </label>
                  <p className="mb-4 font-bold" id="userName">
                    {userName}
                  </p>
                </div>

                <p>
                  {isConnectionOnline(hourStart, hourEnd, daysOfWeek) ? (
                    <p className="text-green-500">Online</p>
                  ) : (
                    <p className="text-red">Offline</p>
                  )}
                </p>
              </div>

              <label className="mb-1 font-light" htmlFor="timePlaying">
                Tempo de jogo
              </label>
              <p className="mb-4 font-bold" id="timePlaying">
                {timePlaying + " Horas"}
              </p>

              <label className="mb-1 font-light" htmlFor="availability">
                Disponibilidade
              </label>
              <div className="mb-4 font-bold" id="availability">
                {daysOfWeek.map((el, index) => {
                  let portugueseDayOfWeek = getPortugueseDayOfWeek(el);
                  return ` 
                  ${portugueseDayOfWeek.slice(0, 3)}
                  ${index !== daysOfWeek.length - 1 ? "-" : ""}
                  `;
                })}
                <br />
                {hourStart.slice(0, -3)} - {hourEnd.slice(0, -3)}
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
                disabled={!isConnectionOnline(hourStart, hourEnd, daysOfWeek)}
                onClick={() =>
                  window.alert(
                    "You can connect with this user in discord using the discord ID below: \n\n" +
                      discordNickname
                  )
                }
                className="disabled:opacity-50 disabled:cursor-not-allowed  w-full py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center justify-center gap-3"
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

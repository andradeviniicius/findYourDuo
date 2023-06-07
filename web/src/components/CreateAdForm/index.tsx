import { GameController } from "phosphor-react";
import { useAppDispatch } from "../../app/hooks";
import { openModal, closeModal } from "../../features/modal/createAdModalSlice";
import { useForm, SubmitHandler } from "react-hook-form";
export type Connection = {
  connectionid: number;
  playername: string;
  hoursplayed: number;
  daysofweek: string[];
  starthour: string;
  endhour: string;
  isvoicecall: boolean;
  gameid: number;
  discordnickname: string;
};

import {
  DaysOfWeek,
  SelectInput,
  DefaultInput,
  Checkbox,
  TimeToPlay,
} from "..";

export default function PostAdForm() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Connection>();
  const onSubmit: SubmitHandler<Connection> = (data) => console.log(data);
  console.log(watch());

  return (
    <form
      onSubmit={(data) => {
        handleSubmit(onSubmit);
        dispatch(closeModal());
      }}
      className="text-white 
        md:justify-center 
        md:items-center
        md:flex
        overflow-x-hidden
        md:overflow-y-auto
        fixed
        inset-0
        z-50
        md:outline-none
        md:focus:outline-none
        
        overflow-y-auto
        w-100%
        h-100%
        "
    >
      <div
        className="
        md:relative
         md:w-auto 
         md:max-w-lg 
         md:my-6 
         md:mx-auto "
      >
        <div className="py-4 px-4 border-0 md:rounded-lg relative flex flex-col w-auto bg-[#2A2634] outline-none focus:outline-none">
          <div className="flex items-start justify-start mb-8">
            <h3 className="text-3xl font-black w-full">Publique um anúncio</h3>
          </div>
          <div className="w-full flex flex-col justify-start gap-2 mb-4">
            <label htmlFor="game" className="font-semibold leading-7">
              Qual o game?
            </label>
            <select
              placeholder=""
              id="game"
              className="text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
              {...register("gameid")}
            >
              <option value="1">Selecione o game que deseja jogar</option>
              <option value="1">Game1</option>
              <option value="2">Game2</option>
              <option value="3">Game3</option>
            </select>
          </div>
          <div className="w-full flex flex-col justify-start gap-2 mb-4">
            <label htmlFor="defaultInput" className="font-semibold leading-7">
              "Seu nome (ou nickname)"
            </label>
            <input
              className="placeholder:text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
              id="defaultInput"
              type="text"
              placeholder="Como te chamam dentro do game?"
              {...register("playername")}
            />
          </div>

          <div className="w-full flex gap-6">
            <div className="w-full flex flex-col justify-start gap-2 mb-4">
              <label htmlFor="defaultInput" className="font-semibold leading-7">
                "Quantas horas de jogo?"
              </label>
              <input
                className="placeholder:text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
                id="defaultInput"
                type="text"
                placeholder="Tudo bem ser zero :)"
                {...register("hoursplayed")}
              />
            </div>
            <div className="w-full flex flex-col justify-start gap-2 mb-4">
              <label htmlFor="defaultInput" className="font-semibold leading-7">
                "Qual seu Discord?"
              </label>
              <input
                className="placeholder:text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
                id="defaultInput"
                type={"type"}
                placeholder="Usuario#0000"
                {...register("discordnickname")}
              />
            </div>
          </div>

          <div className={`w-full mb-6`}>
            <p className="font-semibold leading-7 mb-2">
              Quando costuma jogar?
            </p>
            <div className="weekDays-selector font-bold text-base">
              <input type="checkbox" id="weekday-sun" className="weekday" />
              <label htmlFor="weekday-sun">D</label>
              <input type="checkbox" id="weekday-mon" className="weekday" />
              <label htmlFor="weekday-mon">S</label>
              <input type="checkbox" id="weekday-tue" className="weekday" />
              <label htmlFor="weekday-tue">T</label>
              <input type="checkbox" id="weekday-wed" className="weekday" />
              <label htmlFor="weekday-wed">Q</label>
              <input type="checkbox" id="weekday-thu" className="weekday" />
              <label htmlFor="weekday-thu">Q</label>
              <input type="checkbox" id="weekday-fri" className="weekday" />
              <label htmlFor="weekday-fri">S</label>
              <input type="checkbox" id="weekday-sat" className="weekday" />
              <label htmlFor="weekday-sat">S</label>
            </div>
          </div>
          <div
            className={`w-full mb-6 flex flex-wrap gap-3 font-semibold leading-7 mb-2`}
          >
            <label htmlFor="timeToPlay" className="w-full">
              "Qual o horário do dia?"
            </label>

            <p className="flex items-center font-normal">De</p>
            <input
              className=" w-18 flex justify-center items-center placeholder:text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
              id="timeToPlay"
              type="time"
              placeholder="De"
            />
            <p className="flex items-center font-normal">Até</p>
            <input
              className="w-18 flex justify-center items-center placeholder:text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
              id="timeToPlay"
              type="time"
            />
          </div>

          <div className="flex">
            <div className="flex items-center mr-4">
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Costumo me conectar ao chat de voz
              </label>
            </div>
          </div>

          <div className="flex items-center justify-end p-6 rounded-b gap-4">
            <button
              type="button"
              onClick={() => dispatch(closeModal())}
              className="py-3 px-4 bg-zinc-500 font-bold hover:bg-zinc-600 text-white rounded flex items-center"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3"
            >
              <GameController size={24} />
              Encontrar Duo
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

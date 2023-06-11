import { GameController } from "phosphor-react";
import { useAppDispatch } from "../../app/hooks";
import { openModal, closeModal } from "../../features/modal/createAdModalSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMessage from "../ErrorMessage";
import { ChangeEvent } from "react";
import turnWeekdayIntoId from "../../utils/turnWeekdayIntoId";
import useInsertNewConnection from "../../hooks/useInsertNewConnection";
import getFullDayName from "../../utils/getFullDayName";
import { useRouter } from "next/router";

export type Connection = {
  connectionid: number;
  playername: string;
  hoursplayed: number;
  daysofweek: string[];
  starthour: string;
  endhour: string;
  isvoicecall: boolean;
  gameid: string;
  discordnickname: string;
};

export default function PostAdForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const validationSchema = yup.object({
    connectionid: yup.string(),
    gameid: yup
      .string()
      .required()
      .oneOf(
        [
          "515024",
          "509658",
          "32982",
          "55453844",
          "516575",
          "21779",
          "27471",
          "213930085",
          "511224",
          "1767487238",
          "518203",
          "33214",
          "18122",
          "512710",
          "32399",
          "263490",
          "491487",
          "29595",
          "509659",
          "29452",
        ],
        "Selecione pelo menos um item da lista "
      ),
    playername: yup.string().required("Campo obrigatório"),
    hoursplayed: yup.string().required("Campo obrigatório"),
    discordnickname: yup
      .string()
      .matches(/^.{3,32}#[0-9]{4}$/, "Favor seguir este formato: exemplo#1234")
      .required("Field is required"),
    daysofweek: yup.array().of(yup.string()),
    starthour: yup.string().required("Campo obrigatório"),
    endhour: yup.string().required("Campo obrigatório"),
    isvoicecall: yup.boolean().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    resetField,
    setValue,
    formState: { errors },
  } = useForm<Connection>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<Connection> = (data) => {
    useInsertNewConnection(data);

    if (router.query.gameId === data.gameid ) {
      router.reload();
    } else {
      router.push(`/games/${data.gameid}`);
    }

    dispatch(closeModal());
  };

  const handleWeekdayCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const dayOfWeek = e.target.id.replace("weekday-", "");
    if (e.target.checked) {
      setValue(
        `daysofweek.${turnWeekdayIntoId(dayOfWeek)}`,
        getFullDayName(dayOfWeek)
      );
    } else {
      setValue(`daysofweek.${turnWeekdayIntoId(dayOfWeek)}`, "");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
              <option value="515024"> Diablo IV</option>
              <option value="509658"> Just Chatting</option>
              <option value="32982"> Grand Theft Auto V</option>
              <option value="55453844"> Street Fighter 6</option>
              <option value="516575"> VALORANT</option>
              <option value="21779"> League of Legends</option>
              <option value="27471"> Minecraft</option>
              <option value="213930085"> Honkai: Star Rail</option>
              <option value="511224"> Apex Legends</option>
              <option value="1767487238"> Casino Slot Machine</option>
              <option value="518203"> Sports</option>
              <option value="33214"> Fortnite</option>
              <option value="18122"> World of Warcraft</option>
              <option value="512710"> Call of Duty: Warzone</option>
              <option value="32399"> Counter-Strike: Global Offensive</option>
              <option value="263490"> Rust</option>
              <option value="491487"> Dead by Daylight</option>
              <option value="29595"> Dota 2</option>
              <option value="509659"> ASMR</option>
              <option value="29452"> Virtual Casino</option>
            </select>
            <ErrorMessage>{errors.gameid?.message}</ErrorMessage>
          </div>
          <div className="w-full flex flex-col justify-start gap-2 mb-4">
            <label htmlFor="defaultInput" className="font-semibold leading-7">
              Seu nome (ou nickname)
            </label>
            <input
              className="placeholder:text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
              id="defaultInput"
              type="text"
              placeholder="Como te chamam dentro do game?"
              {...register("playername")}
            />
            <ErrorMessage>{errors.playername?.message}</ErrorMessage>
          </div>

          <div className="w-full flex gap-6">
            <div className="w-full flex flex-col justify-start gap-2 mb-4">
              <label htmlFor="defaultInput" className="font-semibold leading-7">
                Quantas horas de jogo?
              </label>
              <input
                className="placeholder:text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
                id="defaultInput"
                type="number"
                placeholder="Tudo bem ser zero :)"
                {...register("hoursplayed")}
              />
              <ErrorMessage>{errors.hoursplayed?.message}</ErrorMessage>
            </div>
            <div className="w-full flex flex-col justify-start gap-2 mb-4">
              <label htmlFor="defaultInput" className="font-semibold leading-7">
                Qual seu Discord?
              </label>
              <input
                className="placeholder:text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
                id="defaultInput"
                type={"type"}
                placeholder="Usuario#0000"
                {...register("discordnickname")}
              />
              <ErrorMessage>{errors.discordnickname?.message}</ErrorMessage>
            </div>
          </div>

          <div className={`w-full flex flex-col mb-6 gap-2`}>
            <p className="font-semibold leading-7 mb-2">
              Quando costuma jogar?
            </p>
            <div className="weekDays-selector font-bold text-base">
              <input
                type="checkbox"
                id="weekday-sun"
                className="weekday"
                onChange={(e) => handleWeekdayCheckbox(e)}
              />
              <label htmlFor="weekday-sun">D</label>
              <input
                type="checkbox"
                id="weekday-mon"
                className="weekday"
                onChange={(e) => handleWeekdayCheckbox(e)}
              />
              <label htmlFor="weekday-mon">M</label>
              <input
                type="checkbox"
                id="weekday-tue"
                className="weekday"
                onChange={(e) => handleWeekdayCheckbox(e)}
              />
              <label htmlFor="weekday-tue">T</label>
              <input
                type="checkbox"
                id="weekday-wed"
                className="weekday"
                onChange={(e) => handleWeekdayCheckbox(e)}
              />
              <label htmlFor="weekday-wed">W</label>
              <input
                type="checkbox"
                id="weekday-thu"
                className="weekday"
                onChange={(e) => handleWeekdayCheckbox(e)}
              />
              <label htmlFor="weekday-thu">T</label>
              <input
                type="checkbox"
                id="weekday-fri"
                className="weekday"
                onChange={(e) => handleWeekdayCheckbox(e)}
              />
              <label htmlFor="weekday-fri">F</label>
              <input
                type="checkbox"
                id="weekday-sat"
                className="weekday"
                onChange={(e) => handleWeekdayCheckbox(e)}
              />
              <label htmlFor="weekday-sat">S</label>
            </div>

            <ErrorMessage>{errors.daysofweek?.message}</ErrorMessage>
          </div>
          <div
            className={`w-full mb-6 flex flex-wrap gap-3 font-semibold leading-7 mb-2`}
          >
            <label htmlFor="timeToPlay" className="w-full">
              Qual o horário do dia?
            </label>

            <p className="flex items-center font-normal">De</p>
            <input
              className=" w-18 flex justify-center items-center placeholder:text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
              id="timeToPlay"
              type="time"
              placeholder="De"
              {...register("starthour")}
            />
            <p className="flex items-center font-normal">Até</p>
            <input
              className="w-18 flex justify-center items-center placeholder:text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
              id="timeToPlay"
              type="time"
              {...register("endhour")}
            />
          </div>
          <div className="flex">
            <ErrorMessage>{errors.starthour?.message}</ErrorMessage>
            <ErrorMessage>{errors.endhour?.message}</ErrorMessage>
          </div>

          <div className="flex">
            <div className="flex items-center mr-4">
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                {...register("isvoicecall")}
              />
              <label
                htmlFor="inline-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Costumo me conectar ao chat de voz
              </label>
              <ErrorMessage>{errors.isvoicecall?.message}</ErrorMessage>
            </div>
          </div>

          <div className="flex items-center justify-end p-6 rounded-b gap-4">
            <button
              type="button"
              onClick={() => {
                reset();
                dispatch(closeModal());
              }}
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

import { GameController } from "phosphor-react";
import { useAppDispatch } from "../../app/hooks";
import { openModal, closeModal } from "../../features/modal/createAdModalSlice";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  example: string;
  exampleRequired: string;
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
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div
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
          <SelectInput label="Qual o game?" />
          <DefaultInput
            placeholder="Como te chamam dentro do game?"
            type="text"
            label="Seu nome (ou nickname)"
          />

          <div className="w-full flex gap-6">
            <DefaultInput
              placeholder="Tudo bem ser zero :)"
              type="text"
              label="Joga há quantos anos?"
            />
            <DefaultInput
              placeholder="Usuario#0000"
              type="text"
              label="Qual seu Discord?"
            />
          </div>

          <DaysOfWeek />
          <TimeToPlay label="Qual o horário do dia?" />

          <Checkbox label="Costumo me conectar ao chat de voz" />

          <div className="flex items-center justify-end p-6 rounded-b gap-4">
            <button
              type="button"
              onClick={() => dispatch(closeModal())}
              className="py-3 px-4 bg-zinc-500 font-bold hover:bg-zinc-600 text-white rounded flex items-center"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(closeModal());
                window.alert("Sorry this functionality is not ready yet");
              }}
              className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3"
            >
              <GameController size={24} />
              Encontrar Duo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

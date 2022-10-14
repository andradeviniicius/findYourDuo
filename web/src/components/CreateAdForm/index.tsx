import { GameController } from "phosphor-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Checkbox, CheckboxIndicator } from "@radix-ui/react-checkbox";

type Inputs = {
  example: string;
  exampleRequired: string;
};

import { DaysOfWeek, SelectInput, DefaultInput, TimeToPlay } from "..";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTitle,
} from "@radix-ui/react-alert-dialog";
import { Label } from "@radix-ui/react-label";

export default function PostAdForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <div className=" text-white justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto max-w-lg my-6 mx-auto ">
          <div className=" px-10 py-8 border-0 rounded-lg relative flex flex-col w-auto bg-[#2A2634] outline-none focus:outline-none">
            <div className="flex items-start justify-start mb-8">
              <AlertDialogTitle className="text-3xl font-black w-full">
                Publique um anúncio
              </AlertDialogTitle>
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

            <div className="flex">
              <div className="flex items-center mr-4">
                <Checkbox>
                  <input
                    id="inline-checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </Checkbox>
                <Label
                  className={
                    "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  }
                  htmlFor="inline-checkbox"
                >
                  Costumo me conectar ao chat de voz
                </Label>
              </div>
            </div>

            <div className="flex items-center justify-end p-6 rounded-b gap-4">
              <AlertDialogCancel asChild>
                <button
                  type="button"
                  className="py-3 px-4 bg-zinc-500 font-bold hover:bg-zinc-600 text-white rounded flex items-center"
                >
                  Cancelar
                </button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <button
                  type="button"
                  className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3"
                >
                  <GameController size={24} />
                  Encontrar Duo
                </button>
              </AlertDialogAction>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

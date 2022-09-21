import { MagnifyingGlassPlus, GameController } from "phosphor-react";
import { useState } from "react";
type Props = {};

export default function CreateGame(params: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="pt-1 bg-duo-gradient self-stretch rounded-lg mt-8 overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu DUO?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3"
        >
          <MagnifyingGlassPlus size={24} />
          Post ad
        </button>

        {showModal ? (
          <>
            <div className=" text-white justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto ">
                <div className=" px-10 py-8 border-0 rounded-lg shadow-lg relative flex flex-col w-[29rem] bg-[#2A2634] outline-none focus:outline-none">
                  <div className="flex items-start justify-start mb-8">
                    <h3 className="text-3xl font-black w-full">
                      Publique um anúncio
                    </h3>
                  </div>
                  {/*body*/}

                  <div className="w-full flex flex-col justify-start gap-2">
                    <label htmlFor="game" className="font-semibold leading-7">
                      Qual o game?
                    </label>
                    <select
                      name=""
                      placeholder=""
                      id="game"
                      className="text-zinc-500 bg-zinc-900 border-0 h-12 rounded  "
                    >
                      <option value="1">
                        Selecione o game que deseja jogar
                      </option>
                      <option value="1">Game1</option>
                      <option value="2">Game2</option>
                      <option value="3">Game3</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b gap-4">
                    <button
                      className="bg-zinc-500 font-bold uppercase px-4 py-3 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(true)}
                      className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3"
                    >
                      <GameController size={24} />
                      Encontrar Duo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Background */}
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}

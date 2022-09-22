import { MagnifyingGlassPlus } from "phosphor-react";
import { CreateAdForm } from "../../components";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { openModal, closeModal } from "../../features/modal/createAdModalSlice";

type Props = {};

export default function CreateGame(params: Props) {
  const isModalOpen = useAppSelector((state) => state.modal.active);
  const dispatch = useAppDispatch();

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
          onClick={() => dispatch(openModal())}
          className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3"
        >
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>

        {isModalOpen ? (
          <>
            <CreateAdForm />
            {/* Background */}
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}

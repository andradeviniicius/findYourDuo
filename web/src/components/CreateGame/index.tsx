import { MagnifyingGlassPlus } from "phosphor-react";
import { CreateAdForm } from "../../components";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { openModal, closeModal } from "../../features/modal/createAdModalSlice";

type Props = {
  mainMessage?: string;
  subMessage?: string;
  twitchTopGames?: any;
};

export default function CreateGame({
  mainMessage,
  subMessage,
  twitchTopGames,
}: Props) {
  
  const isModalOpen = useAppSelector((state) => state.modal.active);
  const dispatch = useAppDispatch();

  return (
    <div className="pt-1 bg-duo-gradient self-stretch rounded-lg mt-5 overflow-hidden">
      <div className="bg-[#2A2634] px-6 py-5 flex justify-between items-center gap-3">
        <div>
          <strong className="text-xl text-white font-black block">
            {mainMessage ? mainMessage : "Não encontrou seu DUO?"}
          </strong>
          <span className="text-zinc-400 block text-xs">
            {subMessage
              ? subMessage
              : "Publique um anúncio para encontrar novos players!"}
          </span>
        </div>

        <button
          type="button"
          onClick={() => dispatch(openModal())}
          className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white text-xs rounded flex items-center gap-3"
        >
          <MagnifyingGlassPlus className="md:block hidden" size={18} />
          Publicar anúncio
        </button>

        {isModalOpen ? (
          <>
            <CreateAdForm twitchTopGames={twitchTopGames.data} />
            {/* Background */}
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}

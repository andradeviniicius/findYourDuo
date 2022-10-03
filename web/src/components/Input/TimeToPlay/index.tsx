type Props = {
  label?: string;
  customClass?: string;
};

export default function TimeToPlay({ label, customClass }: Props) {
  return (
    <div
      className={`w-full mb-6 ${customClass} flex flex-wrap gap-3 font-semibold leading-7 mb-2`}
    >
      <label htmlFor="timeToPlay" className="w-full">
        {label}
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
  );
}

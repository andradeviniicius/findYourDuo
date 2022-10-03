type Props = {
  type: string;
  label?: string;
  placeholder?: string;
};

export default function DefaultInput({ placeholder, type, label }: Props) {
  return (
    <div className="w-full flex flex-col justify-start gap-2 mb-4">
      <label htmlFor="defaultInput" className="font-semibold leading-7">
        {label}
      </label>
      <input
        className="placeholder:text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
        id="defaultInput"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

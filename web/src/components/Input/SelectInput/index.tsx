type Props = {
  label: string
}


export default function SelectInput({label}:Props) {
  return (
      <div className="w-full flex flex-col justify-start gap-2 mb-4">
        <label htmlFor="game" className="font-semibold leading-7">
          {label}
        </label>
        <select
          name=""
          placeholder=""
          id="game"
          className="text-zinc-500 bg-zinc-900 h-12 rounded text-sm px-4 font-serif"
        >
          <option value="1">Selecione o game que deseja jogar</option>
          <option value="1">Game1</option>
          <option value="2">Game2</option>
          <option value="3">Game3</option>  
        </select>
      </div>
  );
}

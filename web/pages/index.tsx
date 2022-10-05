import { MainTitle, CreateGame, GameList } from "../src/components";
export default function Home() {
  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
        <MainTitle />
        <GameList />
        <CreateGame />
      </div>
    </>
  );
}

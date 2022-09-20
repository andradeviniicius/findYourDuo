import "./styles/main.css";
import { MainTitle, CreateGame, GameList } from "./components";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <MainTitle />
      <GameList />
      <CreateGame />
    </div>
  );
}

export default App;

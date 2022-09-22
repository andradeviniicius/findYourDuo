import "./styles/main.css";
import { MainTitle, CreateGame, GameList } from "./components";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
        <MainTitle />
        <GameList />
        <CreateGame />
      </div>
    </Provider>
  );
}

export default App;

import { GameCard } from "../../components";
type Props = {};

export default function GameList(params: Props) {
  return (
    <div className="grid grid-cols-6 gap-6 mt-16">
      <GameCard gameBanner={"/web/src/assets/image02.png"} gameTitle="Aaaa" adsCount="2" />
      <GameCard gameBanner={"/web/src/assets/image02.png"} gameTitle="Aaaa" adsCount="2" />
      <GameCard gameBanner={"/web/src/assets/image02.png"} gameTitle="Aaaa" adsCount="2" />
      <GameCard gameBanner={"/web/src/assets/image02.png"} gameTitle="Aaaa" adsCount="2" />
      <GameCard gameBanner={"/web/src/assets/image02.png"} gameTitle="Aaaa" adsCount="2" />
      <GameCard gameBanner={"/web/src/assets/image02.png"} gameTitle="Aaaa" adsCount="2" />
    </div>
  );
}

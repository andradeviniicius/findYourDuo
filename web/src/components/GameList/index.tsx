import { GameCard } from "../../components";
type Props = {};

const games = [
  {
    gameId: 1,
    gameTitle: "World Of Warcraft",
    gameBanner: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
  },
  {
    gameId: 2,
    gameTitle: "H1Z1",
    gameBanner: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
  },
  {
    gameId: 3,
    gameTitle: "Valorant",
    gameBanner: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
  },
  {
    gameId: 4,
    gameTitle: "league of legends",
    gameBanner: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
  },
  {
    gameId: 5,
    gameTitle: "Fortnite",
    gameBanner: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
  },
  {
    gameId: 6,
    gameTitle: "GTA",
    gameBanner: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
  },
];

export default function GameList(params: Props) {
  return (
    <div className="grid grid-cols-6 gap-6 mt-16">
      {games.map((el, index) => {
        return (
          <GameCard
            gameBanner={el.gameBanner}
            gameTitle={el.gameTitle}
            gameId={el.gameId}
            adsCount={'1'}
            key={index}
          />
        );
      })}
    </div>
  );
}

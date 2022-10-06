import { GameCard } from "../../components";
type Props = {
  twitchTopGames?: any;
};

export default function GameList({ twitchTopGames }: Props) {
  console.log(twitchTopGames);
  return (
    <div className="grid grid-cols-6 gap-6 mt-16">
      {twitchTopGames.data.map((el: any, index: any) => {
        return (
          <GameCard
            gameBanner={el.box_art_url}
            gameTitle={el.name}
            gameId={el.id}
            // adsCount={"1"}
            key={index}
          />
        );
      })}
    </div>
  );
}

import { Carousel, GameCard } from "../../components";
type Props = {
  twitchTopGames?: any;
};

export default function GameList({ twitchTopGames }: Props) {
  return (
      <Carousel>
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
      </Carousel>
  );
}

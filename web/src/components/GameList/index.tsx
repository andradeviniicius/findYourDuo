import { Carousel, GameCard } from "../../components";
type Props = {
  twitchTopGames?: any;
};

export default function GameList({ twitchTopGames }: Props) {
  return (
    <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
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
    </div>
  );
}

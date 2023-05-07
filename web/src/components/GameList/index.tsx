import { Carousel, GameCard, Spinner } from "../../components";
type Props = {
  twitchTopGames?: any;
};

export default function GameList({ twitchTopGames }: Props) {
  if (twitchTopGames.message) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-10">
        <strong className="font-bold">Hey user! </strong>
        <span className="block sm:inline">
          {" "}
          something went wrong in the Twitch API, please refresh the page or
          contact<strong> viniciusdandrade@gmail.com</strong>
        </span>
      </div>
    );
  }

  return (
    <Carousel>
      {twitchTopGames.data ? (
        twitchTopGames.data.map((el: any, index: any) => {
          return (
            <GameCard
              gameBanner={el.box_art_url}
              gameTitle={el.name}
              gameId={el.id}
              // adsCount={"1"}
              key={index}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </Carousel>
  );
}

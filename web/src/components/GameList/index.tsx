import { Carousel, GameCard } from "../../components";
import useGamesWithConnections from "../../hooks/useGamesWithConnections";
import DefaultSpinner from "../Spinner/DefaultLoader";
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
  const allGameConnections = useGamesWithConnections();

  const blockedIds = ["509663", "518203", "509658"];

  const twitchTopGamesAdsCount = twitchTopGames.data
    .map((el: any) => {
      let gameIdCounts = 0;

      allGameConnections.forEach((game) => {
        if (game.gameid.toString() === el.id) {
          gameIdCounts++;
        }
      });

      return { ...el, adsCount: gameIdCounts };
    })
    .sort((a: any, b: any) => b.adsCount - a.adsCount);

  return (
    <>
      {allGameConnections.length != 0 || twitchTopGames.data ? (
        <Carousel>
          {twitchTopGamesAdsCount
            .filter((item: any) => !blockedIds.includes(item.id))
            .map((el: any, index: any) => {
              return (
                <GameCard
                  gameBanner={el.box_art_url}
                  gameTitle={el.name}
                  gameId={el.id}
                  adsCount={el.adsCount}
                  key={index}
                />
              );
            })}
        </Carousel>
      ) : (
        <div className="flex justify-center my-10">
          <DefaultSpinner />
        </div>
      )}
    </>
  );
}

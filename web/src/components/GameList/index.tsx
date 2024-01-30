import {
  TwitchError,
  TwitchGame,
  TwitchGamesResponse,
} from "../../../pages/games/types";
import { Carousel, GameCard } from "../../components";
import useGamesWithConnections from "../../hooks/useGamesWithConnections";
import DefaultSpinner from "../Spinner/DefaultLoader";

type Props = {
  twitchTopGames: TwitchGamesResponse | TwitchError;
};

export default function GameList({ twitchTopGames }: Props) {
  console.log("teste", twitchTopGames);

  if (twitchTopGames!.message) {
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

  const twitchTopGamesAdsCount = twitchTopGames
    .data!.map((el: TwitchGame) => {
      let gameIdCounts = 0;

      allGameConnections.forEach((game) => {
        if (game.gameid.toString() === el.id) {
          gameIdCounts++;
        }
      });

      return { ...el, adsCount: gameIdCounts };
    })
    .sort(
      (
        a: Partial<TwitchGame> & { adsCount: number },
        b: Partial<TwitchGame> & { adsCount: number }
      ) => b.adsCount - a.adsCount
    );

  return (
    <>
      {allGameConnections.length != 0 || twitchTopGames.data ? (
        <Carousel>
          {twitchTopGamesAdsCount
            .filter((item: Partial<TwitchGame> & { adsCount: number }) => !blockedIds.includes(item.id!))
            .map((el: Partial<TwitchGame> & { adsCount: number }, index: number) => {
              return (
                <GameCard
                  gameBanner={el.box_art_url!}
                  gameTitle={el.name!}
                  gameId={el.id!}
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

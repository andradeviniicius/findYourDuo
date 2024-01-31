import { useRouter } from "next/router";
import { ArrowLeft } from "phosphor-react";
import {
  Carousel,
  AdCard,
  CreateGame,
  GlobalSpinner,
} from "../../src/components";
import removeSpinner from "../../src/utils/removeSpinner";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import useConnectionsByGameId from "../../src/hooks/useConnectionsByGameId";
import { TwitchError, TwitchGamesResponse, TwitchGame } from "./types";
import { Helper } from "../../helpers";

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const gameId = context.query.gameId;

  const currentAccessToken = await Helper.grabAccessToken();
  const gameData = await Helper.getSpecificGame(
    currentAccessToken.accessToken,
    gameId
  );
  const topGames = await Helper.getTopGames(currentAccessToken.accessToken);

  return { props: { gameData, topGames } };
};

export default function GameAdsPage(props: {
  gameData: TwitchGamesResponse | TwitchError;
  topGames: TwitchGamesResponse;
}) {
  const router = useRouter();

  console.log("log gameid", props.topGames.data);

  const allGameConnections = useConnectionsByGameId(props.gameData.data![0].id);

  if (props.gameData.data?.length! <= 0) {
    return (
      <>
        <div className="grid grid-cols-[20%_60%_20%] md:grid-cols-3 items-center mt-12">
          <button
            type="button"
            className="md:ml-[11%] md:w-34 max-w-[112px] py-1 w-1/2 md:py-3 md:px-4 md:bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center justify-center gap-3"
            onClick={() => router.push("/")}
          >
            <ArrowLeft size={24} />
            <p className="hidden md:block">Voltar</p>
          </button>
        </div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-10">
          <strong className="font-bold">Hey user! </strong>
          <span className="block sm:inline">
            {props.gameData.error
              ? "Something went wrong in the Twitch API, please refresh the page"
              : "This game doesn't exist in Twitch database, please go back"}{" "}
            or contact<strong> viniciusdandrade@gmail.com</strong>
          </span>
        </div>
      </>
    );
  }

  const gameName = props.gameData.data![0].name;

  return (
    <>
      <GlobalSpinner>
        {/* Use IGDB API To get game info */}
        <div className="grid grid-cols-[20%_60%_20%] md:grid-cols-3 items-center mt-12">
          <button
            type="button"
            className="md:ml-[11%] md:w-34 max-w-[112px] py-1 w-1/2 md:py-3 md:px-4 md:bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center justify-center gap-3"
            onClick={() => router.push("/")}
          >
            <ArrowLeft size={24} />
            <p className="hidden md:block">Voltar</p>
          </button>
          <h1 className="text-3xl col-span-1 justify-self-center md:text-6xl text-white font-black  text-center">
            {gameName ? gameName : ""}
          </h1>
        </div>
        <h2 className="md:text-5xl text-2xl text-white font-black mt-14 text-center">
          <span className="text-transparent bg-duo-gradient bg-clip-text">
            Conecte-se
          </span>{" "}
          e comece a jogar!
        </h2>
        <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10">
          {allGameConnections.length === 0 ? (
            <CreateGame
              mainMessage="Ainda não há anúncios para este jogo"
              subMessage='Seja o primeiro clicando no botão de "Publicar anúncio" ao lado!'
              twitchTopGames={props.topGames.data}
            />
          ) : (
            <Carousel>
              {allGameConnections.map((el, index) => {
                return (
                  <AdCard
                    adId={el.connectionid}
                    userName={el.playername}
                    timePlaying={el.hoursplayed}
                    daysOfWeek={el.daysofweek}
                    hourStart={el.starthour}
                    hourEnd={el.endhour}
                    voiceCall={el.isvoicecall}
                    discordNickname={el.discordnickname}
                    key={index}
                  />
                );
              })}
            </Carousel>
          )}
        </div>
      </GlobalSpinner>
      {removeSpinner()}
    </>
  );
}

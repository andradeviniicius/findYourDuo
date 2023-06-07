import { useRouter } from "next/router";
import { ArrowLeft } from "phosphor-react";
import { Carousel, AdCard, Spinner } from "../../src/components";
import removeSpinner from "../../src/utils/removeSpinner";
import { fakeAds } from "../../helpers/fakeData";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import useConnectionsByGameId from "../../src/hooks/useConnectionsByGameId";

interface TwitchGame {
  id: string;
  name: string;
  box_art_url: string;
}
interface TwitchError {
  error?: string;
  status?: number;
  message?: string;
  data?: TwitchGame[];
}
interface TwitchGamesResponse {
  error?: string;
  data: TwitchGame[];
  pagination: {
    cursor: string;
  };
}
export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const gameId = context.query.gameId;

  const res = await fetch("https://api.twitch.tv/helix/games?id=" + gameId, {
    headers: {
      Authorization: `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`,
      "Client-Id": `${process.env.TWITCH_CLIENT_ID}`,
    },
  });
  const data = await res.json();

  return { props: { data } };
};

export default function GameAdsPage(props: {
  data: TwitchGamesResponse | TwitchError;
}) {
  const router = useRouter();

  const allGameConnections = useConnectionsByGameId(props.data.data![0].id);

  if (props.data.data?.length! <= 0) {
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
            {props.data.error
              ? "Something went wrong in the Twitch API, please refresh the page"
              : "This game doesn't exist in Twitch database, please go back"}{" "}
            or contact<strong> viniciusdandrade@gmail.com</strong>
          </span>
        </div>
      </>
    );
  }

  const gameName = props.data.data![0].name;

  return (
    <>
      <Spinner>
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
                  discordNickname={el.discordNickname}
                  key={index}
                />
              );
            })}
          </Carousel>
        </div>
      </Spinner>
      {removeSpinner()}
    </>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeft } from "phosphor-react";
import { Carousel, AdCard, Spinner } from "../../src/components";
import removeSpinner from "../../src/utils/removeSpinner";
import useGameData from "../../src/hooks/useGameData";
import { fakeAds } from "./data";

export async function getServerSideProps(context) {
  const gameId = context.query.gameId;

  const res = await fetch("https://api.twitch.tv/helix/games?id=" + gameId, {
    headers: {
      Authorization: `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`,
      "Client-Id": `${process.env.TWITCH_CLIENT_ID}`,
    },
  });
  const data = await res.json();

  return { props: { data } };
}

export default function GameAdsPage(props: any) {
  if (props.data.error) {
    return (
      <>
        <Link href={"/"}>
          <button
            type="button"
            className=" w-34 ml-10 mt-10 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center justify-center gap-3"
          >
            <ArrowLeft size={24} />
            Voltar
          </button>
        </Link>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-10">
          <strong className="font-bold">Hey user! </strong>
          <span className="block sm:inline">
            {" "}
            something went wrong in the Twitch API, please refresh the page or
            contact<strong> viniciusdandrade@gmail.com</strong>
          </span>
        </div>
      </>
    );
  }

  const gameName = props.data.data[0].name;

  const router = useRouter();

  return (
    <>
      <Spinner>
        {/* Use IGDB API To get game info */}
        <Link href={"/"}>
          <button
            type="button"
            className=" w-34 ml-10 mt-10 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center justify-center gap-3"
          >
            <ArrowLeft size={24} />
            Voltar
          </button>
        </Link>
        <h1 className="text-6xl text-white font-black mt-20 text-center">
          {gameName ? gameName : ""}
        </h1>
        <h2 className="text-6xl text-white font-black mt-20 text-center">
          <span className="text-transparent bg-duo-gradient bg-clip-text">
            Conecte-se
          </span>{" "}
          e comece a jogar!
        </h2>
        <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
          <Carousel>
            {fakeAds.map((el, index) => {
              return (
                <AdCard
                  adId={el.id}
                  userName={el.name}
                  timePlaying={el.timePlaying}
                  daysOfWeek={el?.daysOfWeek}
                  hourStart={el.hourStart}
                  hourEnd={el.hourEnd}
                  voiceCall={el.voiceCall}
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

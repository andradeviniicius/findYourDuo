import { MainTitle, CreateGame, GameList, Spinner } from "../src/components";
import removeSpinner from "../src/utils/removeSpinner";

export async function getServerSideProps() {
  const res = await fetch("https://api.twitch.tv/helix/games/top", {
    headers: {
      Authorization: `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`,
      "Client-Id": `${process.env.TWITCH_CLIENT_ID}`,
    },
  });
  const data = await res.json();

  return { props: { data } };
}

const Home = (props: any) => {
  return (
    <>
      <Spinner>
        <div className="flex flex-col 2xl:container 2xl:mx-auto 2xl:px-0 py-3">
          <MainTitle />
          <GameList twitchTopGames={props.data} />
          <CreateGame />
        </div>
      </Spinner>
      {removeSpinner()}
    </>
  );
};
export default Home;

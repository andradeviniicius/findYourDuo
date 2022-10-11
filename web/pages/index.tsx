import { MainTitle, CreateGame, GameList } from "../src/components";

export async function getServerSideProps() {
  const res = await fetch("https://api.twitch.tv/helix/games/top", {
    headers: {
      Authorization: `Bearer ${process.env.TWITCH_SECRET}`,
      "Client-Id": `${process.env.TWITCH_CLIENT_ID}`,
    },
  });
  const data = await res.json();

  return { props: { data } };
}

const Home = (props: any) => {
  return (
    <div className="flex flex-col 2xl:container 2xl:mx-auto 2xl:px-0 py-3">
      <MainTitle />
      <GameList twitchTopGames={props.data} />
      <CreateGame />
    </div>
  );
};
export default Home;

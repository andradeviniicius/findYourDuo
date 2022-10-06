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
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <MainTitle />
      <GameList twitchTopGames={props.data} />
      <CreateGame />
    </div>
  );
};
export default Home;

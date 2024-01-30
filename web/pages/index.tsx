import { Helper } from "../helpers";
import {
  MainTitle,
  CreateGame,
  GameList,
  GlobalSpinner,
} from "../src/components";
import removeSpinner from "../src/utils/removeSpinner";

export async function getServerSideProps() {
  const currentAccessToken = await Helper.grabAccessToken();
  const validate = await Helper.validateAccessToken(
    currentAccessToken.accessToken
  );

  let accessTokenExpiracy = new Date(
    Helper.calculateExpirationDate(validate.expires_in)
  );
  let currentDate = new Date();
  let topGames = [];

  if (accessTokenExpiracy.getTime() > currentDate.getTime()) {
    // "token valido"
    topGames = await Helper.getTopGames(currentAccessToken.accessToken);
  } else {
    // "expirou o token";
    const newAccessToken = await Helper.setNewAccessToken();
    topGames = await Helper.getTopGames(newAccessToken);
  }

  return { props: { topGames } };
}

const Home = (props: any) => {
  return (
    <>
      <GlobalSpinner>
        <div className="flex flex-col 2xl:container 2xl:mx-auto 2xl:px-0 py-3">
          <MainTitle />
          <GameList twitchTopGames={props.topGames} />
          <CreateGame twitchTopGames={props.topGames} />
        </div>
      </GlobalSpinner>
      {removeSpinner()}
    </>
  );
};
export default Home;

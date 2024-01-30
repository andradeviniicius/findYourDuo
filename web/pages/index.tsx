import { Helper } from "../helpers";
import {
  MainTitle,
  CreateGame,
  GameList,
  GlobalSpinner,
} from "../src/components";
import removeSpinner from "../src/utils/removeSpinner";

export async function getServerSideProps() {
  function calculateExpirationDate(seconds) {
    let currentDate = new Date();
    let expirationDate = new Date(currentDate.getTime() + seconds * 1000);

    return expirationDate;
  }

  console.log(calculateExpirationDate(5632790));

  const currentAccessToken = await Helper.grabAccessToken();
  const validate = await Helper.validateAccessToken(
    currentAccessToken.accessToken
  );
  console.log(validate);

  let accessTokenExpiracy = new Date(
    calculateExpirationDate(validate.expires_in)
  );
  let currentDate = new Date();

  if (accessTokenExpiracy.getTime() > currentDate.getTime()) {
    console.log("data de expiracao é futuro");
  } else {
    console.log("data de expiracao é passado");
  }

  const topGames = await Helper.getTopGames(currentAccessToken.accessToken);

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

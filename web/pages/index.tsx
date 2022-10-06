import { MainTitle, CreateGame, GameList } from "../src/components";

export async function getServerSideProps(context: any) {
  try {
    // await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // const client = await clientPromise
    // const db = client.db("myDatabase")
    //
    // Then you can execute queries against your database like so:
    // db.find({})

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

const Home = () => {
  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
        <MainTitle />
        <GameList />
        <CreateGame />
      </div>
    </>
  );
};
export default Home;

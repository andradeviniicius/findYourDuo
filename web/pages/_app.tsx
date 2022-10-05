import "../styles/globals.css";

import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";

import { Provider } from "react-redux";
import { store } from "../src/app/store";
import Home from ".";

export async function getServerSideProps(context: any) {
  try {
    await clientPromise;
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

export default function MyApp({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

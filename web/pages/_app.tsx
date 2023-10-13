import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../src/app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <Provider store={store}>
      <Head>
        <title>Contact: viniciusdandrade01@gmail.com</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

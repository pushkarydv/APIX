import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
import Broadcast from "../components/Broadcast";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>APIX</title>

        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Broadcast />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

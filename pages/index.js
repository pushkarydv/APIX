import Head from "next/head";
import HeadComponent from "../components/globals/HeadComponent";
import HomePage from "../components/homeComponents/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <HeadComponent title="APIX" />
      </Head>
      <HomePage />
    </div>
  );
}

import Head from "next/head";
import HomePage from "../components/homeComponents/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <title>APIX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HomePage />
    </div>
  );
}

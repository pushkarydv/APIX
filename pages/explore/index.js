import Head from "next/head";
import ExploreHeader from "../../components/expolreComponents/ExploreHeader";
import Footer from "../../components/globals/Footer";
import HeadComponent from "../../components/globals/HeadComponent";
import Nav from "../../components/globals/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <HeadComponent title="APIX" />
      </Head>
      <Nav />
      <ExploreHeader />
      <Footer />
    </div>
  );
}

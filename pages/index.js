import Head from "next/head";
import Header from "../components/Header";
import HomeBody from "../components/Home";

export default function Home() {
  return (
    <div className="flex justify-center mt-80">
      <Head>
        <title>Clubhouse</title>
        <meta name="description" content="Open source knowledgebase." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeBody />
    </div>
  );
}

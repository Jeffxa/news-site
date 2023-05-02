import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>News Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-9xl text-red">Hola desde next</h1>
    </div>
  );
}

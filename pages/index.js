import Head from "next/head";
import Layout from "/components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>News Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="h-20"></div>
        <h1 className="text-4xl text-center my-8">Hello world from index</h1>
        <p className="text-xl leading-8 mx-2 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. <br /> <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Ald
        </p>
      </Layout>
    </div>
  );
}

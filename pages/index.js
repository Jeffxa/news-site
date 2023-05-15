import Head from "next/head";
import Layout from "/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>News Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="mt-20 m-auto flex  justify-center">
          <div className="px-4 border border-silver-500 shadow-lg shadow-silver-500 max-w-[1000px]">
            <Image
              className="mt-4"
              src={
                "https://c4.wallpaperflare.com/wallpaper/910/914/394/the-darkness-bones-skeleton-fingers-wallpaper-preview.jpg"
              }
              width={750}
              height={400}
              layout="responsive"
              alt={"Belsinski"}
            />
            <h1 className="text-6xl text-center mt-6">Lorem Ipsum</h1>
            <hr className="h-px my-6 bg-black border-0 w-6/12 m-auto" />
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              condimentum posuere volutpat. Curabitur id tincidunt turpis. Fusce
              in est nisl. Aliquam erat volutpat. Fusce ac cursus magna.
              Curabitur quam lacus, fringilla non purus eget, accumsan placerat
              diam. Quisque eu massa vitae magna tincidunt egestas sit amet a
              elit. Sed ultrices urna mauris, non sollicitudin risus ullamcorper
              ac. Vestibulum feugiat posuere mauris, quis vehicula tortor
              feugiat ut. Mauris placerat elit vitae lorem feugiat, non
              tristique nisl volutpat. Praesent imperdiet efficitur lorem, at
              eleifend ex ullamcorper non. Morbi aliquet at sem accumsan
              tincidunt. Morbi gravida ipsum sed eros ultricies, non semper quam
              porta. Maecenas neque magna, pretium vitae velit vel, placerat
              egestas ipsum. Proin fringilla sem et velit tristique feugiat.
              Donec tincidunt ligula enim, nec ullamcorper dolor faucibus id.
            </p>
            <Image
              className="mx-auto object-contain py-6"
              src={
                "https://c4.wallpaperflare.com/wallpaper/910/914/394/the-darkness-bones-skeleton-fingers-wallpaper-preview.jpg"
              }
              width={650}
              height={400}
              alt={"Belsinski"}
            />
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              condimentum posuere volutpat. Curabitur id tincidunt turpis. Fusce
              in est nisl. Aliquam erat volutpat. Fusce ac cursus magna.
              Curabitur quam lacus, fringilla non purus eget, accumsan placerat
              diam. Quisque eu massa vitae magna tincidunt egestas sit amet a
              elit. Sed ultrices urna mauris, non sollicitudin risus ullamcorper
              ac. Vestibulum feugiat posuere mauris, quis vehicula tortor
              feugiat ut. Mauris placerat elit vitae lorem feugiat, non
              tristique nisl volutpat. Praesent imperdiet efficitur lorem, at
              eleifend ex ullamcorper non. Morbi aliquet at sem accumsan
              tincidunt. Morbi gravida ipsum sed eros ultricies, non semper quam
              porta. Maecenas neque magna, pretium vitae velit vel, placerat
              egestas ipsum. Proin fringilla sem et velit tristique feugiat.
              Donec tincidunt ligula enim, nec ullamcorper dolor faucibus id.
            </p>
            <Image
              className="mx-auto object-contain py-6"
              src={
                "https://c4.wallpaperflare.com/wallpaper/605/739/791/zdzislaw-beksinski-embrace-wallpaper-preview.jpg"
              }
              width={650}
              height={400}
              alt={"Belsinski"}
            />
          </div>
          <div className="ml-5 px-4 border border-silver-500 shadow-lg shadow-silver-500 max-w-[400px]">
            <h3 className="text-4xl text-center mt-3">Lasted Posts</h3>
            <hr className="h-px my-6 bg-black border-0 w-6/12 m-auto" />
            <Image
              src={
                "https://c4.wallpaperflare.com/wallpaper/356/357/68/zdzislaw-beksinski-stranded-wallpaper-preview.jpg"
              }
              width={750}
              height={400}
              layout="responsive"
              alt={"Belsinski"}
            />
            <h4 className="text-2xl my-4">Belsinski Art</h4>
            <p>
              Donec tincidunt ligula enim, nec ullamcorper dolor faucibus id.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

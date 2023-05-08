import Head from "next/head";
import Layout from "/components/Layout";
import Layout from "/components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>News Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="flex items-center justify-center h-screen">
        <div className="min-h-[70px]"></div>
        <div className="text-xl mx-5 leading-9 max-w-[800px]">
          <h1 className="text-center text-6xl mb-5">
            Lorem ipsum dolor sit amet
          </h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          sapien sapien, malesuada non massa sit amet, pulvinar pulvinar justo.
          Vivamus sed suscipit ex, at interdum augue. Proin odio quam, vehicula
          sed consectetur non, pulvinar non nisl. Maecenas volutpat condimentum
          turpis. Quisque eu lorem vitae libero viverra interdum eu sit amet
          enim. Sed dignissim dui id sapien tristique, nec fringilla libero
          aliquet. Nullam et urna vel orci rhoncus molestie. Aliquam erat
          volutpat. Mauris congue luctus elementum. Proin vestibulum nisi nec
          pretium tincidunt. Mauris accumsan augue lectus, vitae ultrices arcu
          gravida ac. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Cras quis tellus sit amet ligula
          euismod sodales viverra at neque. Sed vitae libero maximus, viverra
          erat id, luctus urna. Donec accumsan rutrum facilisis. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Donec dolor massa, lobortis sed leo quis, dapibus vehicula
          elit. Praesent consequat at odio a laoreet. In ultricies placerat
          risus sit amet tempor. Etiam non ipsum eget turpis sodales iaculis sit
          amet sed lorem. Ut at lobortis augue. Etiam eget porttitor erat, quis
          hendrerit ligula. Duis nec purus non nisi gravida cursus a ac augue.
          Vivamus tempus accumsan vehicula. Phasellus ornare, mauris ut
          porttitor eleifend, nibh tortor faucibus metus, ut efficitur ante
          ipsum in massa. Aenean consectetur tempor magna vitae interdum. Ut
          pulvinar mauris id ex condimentum, id sagittis libero rutrum.
          Suspendisse cursus consequat tortor, et vulputate ante sodales in.
          Suspendisse finibus mauris sit amet sollicitudin egestas. Nullam enim
          risus, consectetur non est sit amet, elementum euismod urna. Nunc ac
          elit nec ipsum varius hendrerit. <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          sapien sapien, malesuada non massa sit amet, pulvinar pulvinar justo.
          Vivamus sed suscipit ex, at interdum augue. Proin odio quam, vehicula
          sed consectetur non, pulvinar non nisl. Maecenas volutpat condimentum
          turpis. Quisque eu lorem vitae libero viverra interdum eu sit amet
          enim. Sed dignissim dui id sapien tristique, nec fringilla libero
          aliquet. Nullam et urna vel orci rhoncus molestie. Aliquam erat
          volutpat. Mauris congue luctus elementum. Proin vestibulum nisi nec
          pretium tincidunt. Mauris accumsan augue lectus, vitae ultrices arcu
          gravida ac. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Cras quis tellus sit amet ligula
          euismod sodales viverra at neque. Sed vitae libero maximus, viverra
          erat id, luctus urna. Donec accumsan rutrum facilisis. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Donec dolor massa, lobortis sed leo quis, dapibus vehicula
          elit. Praesent consequat at odio a laoreet. In ultricies placerat
          risus sit amet tempor. Etiam non ipsum eget turpis sodales iaculis sit
          amet sed lorem. Ut at lobortis augue. Etiam eget porttitor erat, quis
          hendrerit ligula. Duis nec purus non nisi gravida cursus a ac augue.
          Vivamus tempus accumsan vehicula. Phasellus ornare, mauris ut
          porttitor eleifend, nibh tortor faucibus metus, ut efficitur ante
          ipsum in massa. Aenean consectetur tempor magna vitae interdum. Ut
          pulvinar mauris id ex condimentum, id sagittis libero rutrum.
          Suspendisse cursus consequat tortor, et vulputate ante sodales in.
          Suspendisse finibus mauris sit amet sollicitudin egestas. Nullam enim
          risus, consectetur non est sit amet, elementum euismod urna. Nunc ac
          elit nec ipsum varius{" "}
          <span className="text-red">Fin del contenido</span>.
        </div>
      </Layout>
    </div>
  );
}

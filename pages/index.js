import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Education Ecosystem</title>
        <link rel="icon" href="/youtube.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:ital,wght@0,100;1,100&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="">
        <section className="container mx-auto max-w-6xl py-20 px-6 md:px-20">
          <Hero />
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Head from "next/head";
import BookList from "../components/BookList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bibliteca ETECIA</title>
        <meta name="description" content="Catálogo da biblioteca ETECIA" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <BookList title="Títulos recentes" />
      <BookList title="Para explorar" />
    </>
  );
}

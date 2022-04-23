import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>What Next</title>
        <meta name="description" content="Movie App for Recommendations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to What<a href="https://nextjs.org">Next</a>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>What<a href="https://nextjs.org">Next</a> Watchlist</h2>
            <p>Keep tabs on sequels, next seasons and any related projects!</p>
          </div>
          <div className={styles.card}>
            <h2>Where is...</h2>
            <p>Find out the movies and shows in each streaming service to date!</p>
          </div>
          <div className={styles.card}>
            <h2>Search Movie Info</h2>
            <p>
              Find plot information, cast names, box office numbers and much
              more!
            </p>
          </div>
          <div className={styles.card}>
            <h2>Want to support?</h2>
            <p>
              Watch all the latest movie trailers for upcoming films, series and
              more!
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

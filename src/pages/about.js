import React from "react";
import Head from "next/head";
import Navigation from "../components/routes-nav/Navigation";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Vibur:400"
          rel="stylesheet"
          type="text/css"
        ></link>
        <title>About Nightcapp</title>
      </Head>
      <Navigation />
      <div className={styles.container}>
        <h1 id={styles.h1}>About Nightcapp</h1>
        <section id={styles.about}>         
          <p id={styles.names}>
            We're 
            <span id={styles.mason}>Mason</span> 
            and 
            <span id={styles.devin}>Devin</span>.
          </p>
          <p id={styles.p}>
            Welcome to Nightcapp, our cocktail database. Our passion for mixology inspired us to
            build this website and share our love of cocktails with others. Our web app
            offers a wide range of drink recipes, from classic cocktails to creative new
            concoctions. Whether you're a seasoned bartender or just starting to explore
            the world of mixology, we hope Nightcapp will become your go-to source for
            cocktail inspiration. Cheers!
          </p>
        </section>
      </div>
    </>
  );
}

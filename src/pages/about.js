import React from "react";
import Head from "next/head";
import Navigation from "../components/routes-nav/Navigation";
import styles from "../styles/About.module.css";

function About() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Vibur:400"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>
      <Navigation />
      <div className={styles.container}>
        <h1 id={styles.h1}>About our app</h1>
        <h3 id={styles.h3}>Welcome to our cocktail database!</h3>
        <p id={styles.p}>
          We started this website to encourage the art of cocktail making and
          inspire others to partake and make new creations at their home bar!
        </p>
      </div>
    </>
  );
}

export default About;

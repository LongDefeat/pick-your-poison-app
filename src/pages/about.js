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
      </Head>
      <Navigation />
      <div className={styles.container}>
        <h1 id={styles.h1}>About Nightcapp</h1>
        <section id={styles.about}>
          <p id={styles.names}>
            We're 
            <span id={styles.mason}>Mason</span> 
            and 
            <span id={styles.devin}>Devin</span>.</p>
          <p id={styles.p}>
            Welcome to our cocktail database! We started this website to encourage the art of cocktail making and
            inspire others to partake and make new creations at their home bar!
          </p>
        </section>
      </div>
    </>
  );
}

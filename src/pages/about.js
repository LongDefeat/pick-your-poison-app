import React from "react";
import Head from "next/head";
import Image from "next/image";
import mason from "../../public/mason-Photoroom.png";
import devin from "../../public/devin.jpg"
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
        <h2 id={styles.h2}>We're</h2>
        <section id={styles.about}>     
          <div className={styles.imageContainer}>
            <div className={styles.masonContainer}>
              <Image 
                src={mason} 
                alt="cocktail image" 
                width={175} 
                height={175}
              />
              <span id={styles.mason}>Mason</span>
            </div>
            <div id={styles.and}>&</div>
            <div className={styles.devinContainer}>
              <Image 
                src={devin} 
                alt="cocktail image" 
                width={175} 
                height={175}
              />
              <span id={styles.devin}>Devin</span>
            </div>
          </div>
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

import React from "react";
import styles from "./styles/HomepageIntro.module.css";

export default function HomepageIntro() {
  return (
    <>
        <h1 id={styles.h1}>Nightcapp</h1>
        <p id={styles.p}>
            <span id={styles.welcome}>Welcome to Nightcapp.</span>
            <span>
                Get started by searching for your favorite
                cocktail or browsing our collection.
            </span>
        </p>
    </>
  );
}

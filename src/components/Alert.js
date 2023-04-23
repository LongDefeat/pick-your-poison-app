import React from "react";
import styles from "./styles/Alert.module.css";

export default function Alert() {
  return (
    <div id={styles.container}>
        <h1>Whoops!</h1>
        <p>Sorry! No cocktails found. Try another search!</p>
    </div>
  );
}

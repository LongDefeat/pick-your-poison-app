import React from "react";
import Link from "next/Link";
import styles from "../styles/Navigation.module.css";

function Navigation() {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

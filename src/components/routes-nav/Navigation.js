import React from "react";
import Link from "next/Link";
import styles from "../styles/Navigation.module.css";

function Navigation(props) {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" onClick={props.handleHideDrinksList}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" legacyBehavior>
            About Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

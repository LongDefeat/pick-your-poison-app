import React, { useContext } from "react";
import Link from "next/Link";
import styles from "../styles/Navigation.module.css";
import UserContext from "../auth/CurrentUserContext";

function Navigation(props) {
  const { token } = useContext(UserContext);

  function loggedInNav() {
    return (
      <>
        <div className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" legacyBehavior>
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">My Profile</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">Favorites</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">Log Out</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }

  function loggedOutNav() {
    return (
      <div className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" legacyBehavior>
              About Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/login">Log In</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.nav}>{token ? loggedInNav() : loggedOutNav()}</div>
  );
}

export default Navigation;

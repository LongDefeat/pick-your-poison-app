import React, { useContext } from "react";
import Link from "next/Link";
import styles from "../styles/Navigation.module.css";
import UserContext from "../auth/CurrentUserContext";

function Navigation() {
  // const { currentUser } = useContext(UserContext);

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
            <Link href="/">Log In</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.nav}>
      {/* {currentUser ? loggedInNav() : loggedOutNav()} */}

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" onClick={props.handleHideDrinksList}>
            Home
          </Link>
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

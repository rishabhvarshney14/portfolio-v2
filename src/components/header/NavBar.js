import React from "react";

// Styles
import styles from "./styles/navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.NavBar}>
        <a className={styles.LogoLink} href="/">
          <p className={styles.LogoName}>Rishabh Varshney</p>
        </a>
        <div className={styles.collapse}>
          <ul className={styles.navItems}>
            <li className={styles.navItemActive}>
              <a className={styles.navItemLink} href="index.html">
                Projects
              </a>
            </li>

            <li className={styles.navItem}>
              <a className={styles.navItemLink} href="#contact-me">
                Contact
              </a>
            </li>

            <li className={styles.navItem}>
              <a className={styles.navItemLink} href="#abt-me">
                About
              </a>
            </li>

            <li className={styles.navItem}>
              <a className={styles.navItemLink} href="index.html">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

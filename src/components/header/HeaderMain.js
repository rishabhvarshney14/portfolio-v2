import React from "react";

// Styles
import styles from "./styles/headerMain.module.css";

const HeaderMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        Hi 👋🏼, I'm <span className={styles.name}>Rishabh</span>.
      </div>
      <div className={styles.summary}>
        currently an undergrad final-year student pursing Computer Science and
        Engineering.
      </div>
    </div>
  );
};

export default HeaderMain;

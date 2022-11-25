import React from "react";
import Navigation from "./Navigation";
import * as styles from "../../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>PLC Catalogus</h1>
      <Navigation />
    </header>
  );
};

export default Header;

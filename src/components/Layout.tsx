import React, { FC } from "react";
import Footer from "./base/Footer";
import Header from "./base/Header";
import "../styles/global.scss";
import * as styles from "../styles/Layout.module.scss";

export type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

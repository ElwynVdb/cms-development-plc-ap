import React, { FC } from "react";
import Footer from "./base/Footer";
import Header from "./base/Header";
import "../styles/styles.scss";

export type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layoutContainer">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

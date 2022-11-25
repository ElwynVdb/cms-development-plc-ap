import React, { FC } from "react";
import Footer from "./base/Footer";
import Header from "./base/Header";
import "../styles/App.module.css";

export type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

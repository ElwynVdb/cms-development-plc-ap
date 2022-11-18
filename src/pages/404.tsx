import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";

const NotFoundPage = () => {
  return <Layout></Layout>;
};

export default NotFoundPage;

export const Head = () => <Seo title="404 | Not found"/>;

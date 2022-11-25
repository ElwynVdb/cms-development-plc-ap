import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";

const IndexPage = () => {
  return <Layout>
    
  </Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;

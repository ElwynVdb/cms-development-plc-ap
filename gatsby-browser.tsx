import { PageProps } from "gatsby";
import React from "react";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }: {element:JSX.Element, props:PageProps}) => {
  return <Layout {...props}>{element}</Layout>
}
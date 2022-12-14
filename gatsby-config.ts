import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `plc`,
    siteUrl: `https://www.vanderborght.dev/plc-agency/`,
    defaultDescription: ``,
    image: `https://www.vanderborght.dev/plc-agency/wp-content/uploads/2022/11/home_img.jpg`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://www.vanderborght.dev/plc-agency/graphql"
    }
  },  "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-typegen"]
};

export default config;

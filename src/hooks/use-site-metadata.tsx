import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
              defaultDescription
              image
              siteUrl
              title
            }
          }
    }
  `);

  return data.site.siteMetadata;
}
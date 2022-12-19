import { graphql, HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Seo } from "../components/Seo";
import parse from "html-react-parser";
import { HomeFields } from "../interfaces/home/HomeFields";
import PlcCardsDisplay from "../components/PlcCardsDisplay";
import NamedSection from "../components/NamedSection";
import Hero from "../components/Hero";

const IndexPage: FC<{ data: Data }> = ({ data: { wpPage: { home_fields } } }) => {
  const image = getImage(home_fields.picture.gatsbyImage);

  return (
    <div className="wrapper home">
      <Hero title={home_fields.title} description={home_fields.description} image={image} />

      <NamedSection title="Featured Products">
        <PlcCardsDisplay plcData={home_fields.featuredProducts.map((e) => e.plcFields)} />
      </NamedSection>
    </div>
  );
};

export const homePageData = graphql`
  query HomePageQuery {
    wpPage(slug: { eq: "home" }) {
      home_fields {
        description
        title
        featuredProducts {
          ... on WpPlc {
            plcFields {
              serialNumber
              mainPicture {
                gatsbyImage(width: 500, placeholder: BLURRED)
              }
            }
          }
        }
        title
        picture {
          gatsbyImage(width: 500, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;

export interface WpPage {
  home_fields: HomeFields;
}

export interface Data {
  wpPage: WpPage;
}

export interface RootObject {
  data: Data;
}

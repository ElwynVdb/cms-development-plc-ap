import { graphql, HeadFC, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Seo } from "../components/Seo";
import parse from "html-react-parser";
import { HomeFields } from "../interfaces/home/HomeFields";

const IndexPage: FC<{ data: Data }> = ({ data: { wpPage: { home_fields } } }) => {
  const image = getImage(home_fields.picture.gatsbyImage as ImageDataLike);

  return (
    <div className="wrapper home">
      <p className="home__title">{home_fields.title}</p>

      <div className="home__info">
        <span className="home__info__description">
          {parse(home_fields.description)}
        </span>
        <GatsbyImage
          class="home__info__image"
          image={image!}
          alt={"PLC Image"}
        />
      </div>

      <div className="feature-wrap">
        <section className="home__featured__products">
          {home_fields.featuredProducts.map((s, i) => (
            <article key={i} className="home__featured__product">
              <h2 className="home__featured__product__name">
                {s.plcFields.serialNumber}
              </h2>
              <GatsbyImage
                image={
                  getImage(
                    s.plcFields.mainPicture.gatsbyImage as ImageDataLike
                  )!
                }
                alt={s.plcFields.serialNumber}
                className="home__featured__product__image"
              />
            </article>
          ))}
        </section>
      </div>
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

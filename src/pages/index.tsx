import { graphql, HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Seo } from "../components/Seo";
import parse from "html-react-parser";
import { HomeFields } from "../interfaces/home/HomeFields";

const IndexPage: FC<{ data: Data }> = ({ data: { wpPage: { home_fields } } }) => {
  const image = getImage(home_fields.picture.gatsbyImage);

  return (
    <div className="wrapper home">
      <section className="home__info">
        <div>
          <h1 className="home__info__title">{home_fields.title}</h1>
          <span className="home__info__description">
            {parse(home_fields.description)}
          </span>
        </div>
        <GatsbyImage
          class="home__info__image"
          image={image!}
          alt={"PLC Image"}
        />
      </section>

      <div className="feature-wrap">
        <section className="home__featured__products">
          {home_fields.featuredProducts.map((s, i) => (
            <article key={i} className="home__featured__product">
              <h2 className="home__featured__product__name">{s.plcFields.serialNumber}</h2>
              <GatsbyImage
                image={getImage(s.plcFields.mainPicture.gatsbyImage)!}
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

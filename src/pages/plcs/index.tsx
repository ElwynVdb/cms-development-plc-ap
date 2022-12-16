import { graphql, HeadFC } from "gatsby";
import React, { FC } from "react";
import { Seo } from "../../components/Seo";
import { Edges } from "../../interfaces/Edges";
import { MainData } from "../../interfaces/MainData";
import { PlcFields } from "../../interfaces/plc/PlcFields";
import { ProductsFields } from "../../interfaces/products/ProductsFields";
import parse from "html-react-parser";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Plcs: FC<MainData<PLCSData>> = ({ data: { wpPage: { products_fields }, allWpPlc: { edges } } }) => {
  return <div className="wrapper plcs">
    <section className="plcs__info">
      <div>
        <h1 className="plcs__info__title">{products_fields.title}</h1>
        <span className="plcs__info__description">{parse(products_fields.description)}</span>
      </div>
      <GatsbyImage className="plcs__info__image" image={getImage(products_fields.picture.gatsbyImage)!} alt="plc-image" />
    </section>

    <section className="plcs__products__display">
      {edges.map(({ node: { plcFields } }, i) => <article key={i} className="plcs__product">
        <h2 className="plcs__product__name">{plcFields.serialNumber}</h2>
        <GatsbyImage className="plcs__product__image" image={getImage(plcFields.mainPicture.gatsbyImage)!} alt={plcFields.serialNumber} />
      </article>)}
    </section>
  </div>
}

export default Plcs;

export const Head: HeadFC = () => <Seo title="PLCS" />;

export interface PLCSData {
  allWpPlc: Edges<{ plcFields: PlcFields; }>;
  wpPage: { products_fields: ProductsFields; }
}

export const plcsPageData = graphql`
query PLCSDataQuery {
  allWpPlc {
    edges {
      node {
        plcFields {
          height
          inputs
          length
          mainPicture {
            gatsbyImage(placeholder: BLURRED, width: 500)
          }
          operatingCurrent
          operatingVoltage
          outputs
          portType
          programmingPossibilties
          promoImage1 {
            gatsbyImage(placeholder: BLURRED, width: 500)
          }
          promoImage2 {
            gatsbyImage(placeholder: BLURRED, width: 500)
          }
          promoImage3 {
            gatsbyImage(placeholder: BLURRED, width: 500)
          }
          serialNumber
          series
          usageEnvironment
          width
        }
      }
    }
  }
  wpPage(slug: {eq: "plcs"}) {
    products_fields {
      title
      description
      picture {
        gatsbyImage(placeholder: BLURRED, width: 500)
      }
    }
  }
}
`;
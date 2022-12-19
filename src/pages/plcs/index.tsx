import { graphql, HeadFC } from "gatsby";
import React, { FC } from "react";
import { Seo } from "../../components/Seo";
import { Edges } from "../../interfaces/Edges";
import { MainData } from "../../interfaces/MainData";
import { PlcFields } from "../../interfaces/plc/PlcFields";
import { ProductsFields } from "../../interfaces/products/ProductsFields";
import parse from "html-react-parser";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PlcCardsDisplay from "../../components/PlcCardsDisplay";
import NamedSection from "../../components/NamedSection";
import Hero from "../../components/Hero";

const Plcs: FC<MainData<PLCSData>> = ({ data: { wpPage: { products_fields }, allWpPlc: { edges } } }) => {
  const image = getImage(products_fields.picture.gatsbyImage);



  return <div className="wrapper plcs">
    <Hero title={products_fields.title} description={products_fields.description} image={image} />

    <NamedSection title="Products">
      <PlcCardsDisplay plcData={edges.map((e) => e.node.plcFields)} />
    </NamedSection>
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
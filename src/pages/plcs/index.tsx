import { graphql, HeadFC } from "gatsby";
import React, { FC } from "react";
import { Seo } from "../../components/Seo";
import { Edges } from "../../interfaces/Edges";
import { MainData } from "../../interfaces/MainData";
import { PlcFields } from "../../interfaces/plc/PlcFields";
import { ProductsFields } from "../../interfaces/products/ProductsFields";
import PlcCardsDisplay from "../../components/PlcCardsDisplay";
import NamedSection from "../../components/NamedSection";
import Hero from "../../components/Hero";

const Plcs: FC<MainData<PLCSData>> = ({ data: { wpPage: { products_fields }, allWpPlc: { edges } } }) => {
  const plcFields = edges.map(e => e.node.plcFields);

  return <div className="wrapper plcs">
    <Hero title={products_fields.title} description={products_fields.description} image={products_fields.picture} />

    <NamedSection title="Products">
      <PlcCardsDisplay plcData={plcFields.map((plcFields) => plcFields)} />
    </NamedSection>
  </div>
}

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
            altText
            localFile {
              childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          }
          operatingCurrent
          operatingVoltage
          outputs
          portType
          programmingPossibilties
          promoImage1 { 
            altText
            localFile {
              childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
          promoImage2 {
            altText
            localFile {
              childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
          promoImage3 {
            altText
            localFile {
              childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
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
        altText
        localFile {
          childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
 }
}
`;

export default Plcs;

export const Head: HeadFC = () => <Seo title="PLCS" />;

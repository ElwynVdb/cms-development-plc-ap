import { graphql } from "gatsby";
import React from "react";

const PlcPage = ({ data }: { data: any }) => {
  return <>
    
  </>
}

export const plcQuery = graphql`
query plcQuery($slug: String) {
  wpPlc(slug: { eq: $slug }) {
    plcFields {
      width
      usageEnvironment
      series
      serialNumber
      programmingPossibilties
      portType
      operatingVoltage
      operatingCurrent
      outputs
      length
      inputs
      height
      mainPicture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
      }
    }
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
    }
  }
}
`;

export default PlcPage;
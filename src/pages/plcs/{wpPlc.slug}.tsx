import { graphql } from "gatsby";
import React from "react";

const PlcPage = ({ data }: { data: any }) => {
    return <></>
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
        gatsbyImage(width: 500, placeholder: BLURRED)
      }
      promoImage1 {
        gatsbyImage(width: 500, placeholder: BLURRED)
      }
      promoImage2 {
        gatsbyImage(width: 500, placeholder: BLURRED)
      }
      promoImage3 {
        gatsbyImage(width: 500, placeholder: BLURRED)
      }
    }
  }
}
`;

export default PlcPage;
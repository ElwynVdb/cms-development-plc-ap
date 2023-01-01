import { Link, graphql } from "gatsby";
import React from "react";
import { PlcFields } from "../../interfaces/plc/PlcFields";
import PlcSpecifications from "../../components/PlcSpecifications";
import NamedSection from "../../components/NamedSection";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TagDisplay from "../../components/TagDisplay";

const PlcPage = ({ data: { wpPlc: { plcFields } } }: { data: Data }) => {
  const goBackText = "< Go Back"
  return <div className="plc-details wrapper">
    <Link className="plc-details-back" to="/plcs/">{goBackText}</Link>
    <section>
      <h1 className="plc-details__title">{plcFields.serialNumber}</h1>
      <TagDisplay tags={["Hi", "hola"]}/>
    </section>
    <section className="wrapper">
    <GatsbyImage className="plc-details__image" image={getImage(plcFields.mainPicture.localFile.childImageSharp.gatsbyImageData)!} alt={plcFields.mainPicture.altText}/>
    <NamedSection title="Properties">
      <PlcSpecifications specifications={[
        ["Series", [plcFields.series]],
        ["Serial Number", [plcFields.serialNumber]],
        ["Input Count", [plcFields.inputs]],
        ["Output Count", [plcFields.outputs]],
        ["Output Type", [plcFields.portType]],
        ["Operating Voltage", [plcFields.operatingVoltage, "V"]],
        ["Operating Current", [plcFields.operatingCurrent, "mA"]],
        ["Width", [plcFields.width]],
        ["Height", [plcFields.height]],
        ["Length", [plcFields.length]],
        ["Programming Possibilities", plcFields.programmingPossibilties],
        ["Environment", [plcFields.usageEnvironment]]
      ]} />
    </NamedSection>
    </section>
  </div>
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

export interface WpPlc {
  plcFields: PlcFields;
}

export interface Data {
  wpPlc: WpPlc;
}

export interface RootObject {
  data: Data;
}

export default PlcPage;
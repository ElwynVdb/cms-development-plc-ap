import { Link, graphql } from "gatsby";
import React from "react";
import { PlcFields } from "../../interfaces/plc/PlcFields";
import PlcSpecifications from "../../components/PlcSpecifications";
import NamedSection from "../../components/NamedSection";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TagDisplay from "../../components/TagDisplay";
import { NameNode } from "../../interfaces/NameNode";

const PlcPage = ({ data: { wpPlc: { plcFields, types, methods, outputs } } }: { data: Data }) => {
  const goBackText = "< Go Back";

  const mapNames = (entry: NameNode) => entry.nodes.map(n => n.name);

  const combinedTags = [...mapNames(types), ...mapNames(methods), ...mapNames(outputs)];

  return <div className="plc-details wrapper">
    <Link className="plc-details-back" to="/plcs/">{goBackText}</Link>
    <section>
      <h1 className="plc-details__title">{plcFields.serialNumber}</h1>
      <TagDisplay tags={combinedTags} />
    </section>
    <section className="wrapper">
      <GatsbyImage className="plc-details__image" image={getImage(plcFields.mainPicture.localFile.childImageSharp.gatsbyImageData)!} alt={plcFields.mainPicture.altText} />
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

    <NamedSection title="Featured Images" className="plc-details__featured">
      {plcFields.promoImage1 && <GatsbyImage className="plc-details__featured__image" image={getImage(plcFields.promoImage1.localFile.childImageSharp.gatsbyImageData)!} alt={plcFields.promoImage1.altText} />}
      {plcFields.promoImage2 && <GatsbyImage className="plc-details__featured__image" image={getImage(plcFields.promoImage2.localFile.childImageSharp.gatsbyImageData)!} alt={plcFields.promoImage2.altText} />}
      {plcFields.promoImage3 && <GatsbyImage className="plc-details__featured__image" image={getImage(plcFields.promoImage3.localFile.childImageSharp.gatsbyImageData)!} alt={plcFields.promoImage3.altText} />}
    </NamedSection>
  </div>
}

export const plcQuery = graphql`
query plcQuery($slug: String) {
  wpPlc(slug: {eq: $slug}) {
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
    types {
      nodes {
        name
      }
    }
    outputs {
      nodes {
        name
      }
    }
    methods {
      nodes {
        name
      }
    }
  }
}
`;

export interface WpPlc {
  plcFields: PlcFields;
  types: NameNode;
  outputs: NameNode;
  methods: NameNode;
}

export interface Data {
  wpPlc: WpPlc;
}

export interface RootObject {
  data: Data;
}

export default PlcPage;
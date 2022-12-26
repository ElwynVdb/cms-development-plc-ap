import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { PlcFields } from "../interfaces/plc/PlcFields";
import { Link } from "gatsby";

interface PlcCardProps {
    plcFields: PlcFields;
}

const PlcCard: FC<PlcCardProps> = ({ plcFields }) => {
    const cleanLink = "/plcs/" + plcFields.serialNumber.toLowerCase().replace(/(\.| )/g, "-");
    console.log(cleanLink);

    return <Link to={cleanLink}>
        <article className="plc__card">
            <h2 className="plc__card__name">{plcFields.serialNumber}</h2>
            <GatsbyImage
                image={getImage(plcFields.mainPicture.localFile.childImageSharp.gatsbyImageData)!}
                alt={plcFields.serialNumber}
                className="plc__card__image"
            />
        </article>
    </Link>
}

export default PlcCard;
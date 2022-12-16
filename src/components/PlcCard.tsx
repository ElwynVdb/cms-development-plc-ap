import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { PlcFields } from "../interfaces/plc/PlcFields";

interface PlcCardProps {
    plcFields: PlcFields;
}

const PlcCard: FC<PlcCardProps> = ({ plcFields }) => {
    return <article className="plc__card">
        <h2 className="plc__card__name">{plcFields.serialNumber}</h2>
        <GatsbyImage
            image={getImage(plcFields.mainPicture.gatsbyImage)!}
            alt={plcFields.serialNumber}
            className="plc__card__image"
        />
    </article>
}

export default PlcCard;
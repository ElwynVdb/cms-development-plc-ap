import React, { FC } from "react";
import { PlcFields } from "../interfaces/plc/PlcFields";
import PlcCard from "./PlcCard";

interface PlcCardsDisplayProps {
    plcData: PlcFields[];
}

const PlcCardsDisplay: FC<PlcCardsDisplayProps> = ({ plcData }) => {
    return <section className="plc__cards__display">
        {plcData.map((plcFields, i) => <PlcCard key={i} plcFields={plcFields} />)}
    </section>
}

export default PlcCardsDisplay;
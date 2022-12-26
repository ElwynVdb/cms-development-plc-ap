import React, { FC } from "react";
import PlcSpecification from "./PlcSpecification";

type PlcSpecificationsProps = {
    specifications: [string, (string | number)[]][];
}

const PlcSpecifications: FC<PlcSpecificationsProps> = ({ specifications }) => {
    return <table className="plc-specifications">
        <tbody>
            {specifications.map((specification => <PlcSpecification propery={specification[0]} value={specification[1]} />))}
        </tbody>
    </table>
}

export default PlcSpecifications;

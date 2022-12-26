import React, { FC } from "react";

type PlcSpecificationProps = {
    propery: string;
    value: (string | number)[];
}

const PlcSpecification: FC<PlcSpecificationProps> = ({ propery, value }) => {
    return <tr>
        <th scope="row">{propery}</th>
        <td>{value.join(" ")}</td>
    </tr>
}

export default PlcSpecification;
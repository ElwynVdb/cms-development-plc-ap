import React, { FC } from "react";

interface NamedSection {
    title: string;
    children: React.ReactNode;
}

const NamedSection: FC<NamedSection> = ({title, children}) => {
    return <section className="named__section">
        <h1>{title}</h1>
        {children}
    </section>
}

export default NamedSection;
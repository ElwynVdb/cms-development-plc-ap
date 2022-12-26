import React, { FC } from "react";

interface NamedSection {
    title: string;
    children: React.ReactNode;
    center?: boolean;
}

const NamedSection: FC<NamedSection> = ({title, children, center = true}) => {
    return <section className={`named__section${center ? " named__section__center" : ""}`}>
        <h1>{title}</h1>
        {children}
    </section>
}

export default NamedSection;
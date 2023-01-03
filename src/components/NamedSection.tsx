import React, { FC } from "react";

interface NamedSection {
    title: string;
    className?: string;
    children: React.ReactNode;
    center?: boolean;
}

const NamedSection: FC<NamedSection> = ({ title, children, center = true, className = "" }) => {
    return <section className={`named__section${center ? " named__section__center" : ""}`}>
        <h1>{title}</h1>
        <div className={className}>
            {children}
        </div>
    </section>
}

export default NamedSection;
import React from "react";
import { Seo } from "../components/Seo";
import NamedSection from "../components/NamedSection";

const About = () => {
    return <div className="wrapper about">
        <NamedSection title="About Us" center={false}>
            <p>We're a company that takes care of our customers and their needs in developing a new elecctrical project that requires Programmable Logic Controllers</p>
            <ul>
                <li>Email: elwyn.vanderborght@student.ap.be</li>
                <li>Telephone: +32494629601</li>
            </ul>
        </NamedSection>
        
        <NamedSection title="Contact Us" center={false}>
            <form action="">

            </form>
        </NamedSection>
    </div>
}

export default About;

export const Head = () => <Seo title="About" />
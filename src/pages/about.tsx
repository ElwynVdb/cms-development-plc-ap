import React from "react";
import { Seo } from "../components/Seo";
import NamedSection from "../components/NamedSection";

const About = () => {
    return <div className="wrapper about">
        <NamedSection title="About Us" center={false}>
            <p>We're a company that takes care of our customers and their needs in developing a new elecctrical project that requires Programmable Logic Controllers</p>
            <ul className="about__details">
                <li>Email: elwyn.vanderborght@student.ap.be</li>
                <li>Telephone: +32494629601</li>
            </ul>
        </NamedSection>

        <NamedSection title="Contact Us" center={false}>
            <form name="contact" method="POST" className="about__contact" data-netlify="true">
                <label htmlFor="name">Name<span className="required">*</span></label>
                <input type="text" name="name" id="name" placeholder="John Doe" required/>
                <label htmlFor="Email">Email<span className="required">*</span></label>
                <input type="email" name="email" id="email" placeholder="john.doe@mail.com" required/>
                <label htmlFor="subject">Subject<span className="required">*</span></label>
                <input type="text" name="subject" id="subject" placeholder="Contact Subject" required/>
                <label htmlFor="description">Message<span className="required">*</span></label>
                <textarea name="description" id="description" cols={30} rows={10} placeholder={"Your Message"} required></textarea>
                <input type="submit" value="Send" />
            </form>
        </NamedSection>
    </div>
}

export default About;

export const Head = () => <Seo title="About" />
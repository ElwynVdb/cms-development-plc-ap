import React from "react";
import parse from "html-react-parser";

const Footer = () => {
    return <footer>
        <p>{parse("&copy")} {new Date(Date.now()).getFullYear()} | PlC Catalogus | Langlopende Taak CMS Development</p>
        <p>Elwyn Van der Borght</p>
    </footer>
}

export default Footer;
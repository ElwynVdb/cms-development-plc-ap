import React from "react";
import parse from "html-react-parser";

const Footer = () => {
    return <footer>
        <p>{parse("&copy")} {new Date(Date.now()).getFullYear()} | PlC Catalogus | Langlopende Taak CMS Development</p>
        <p><a href="https://www.vanderborght.dev" target="_blank">Elwyn Van der Borght</a></p>
    </footer>
}

export default Footer;
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Picture } from "../interfaces/Picture";
import parse from "html-react-parser";

interface HeroProps {
    title:string;
    description:string;
    image: Picture;
}

const Hero: FC<HeroProps> = ({ title, description, image }) => {
    return <section className="hero">
        <div className="hero__info">
        <h1 className="hero__info__title">{title}</h1>
          <span className="hero__info__description">
            {parse(description)}
          </span>
        </div>

        <GatsbyImage
            class="hero__info__image"
            image={getImage(image.localFile.childImageSharp.gatsbyImageData)!}
            alt={image.altText}
        />
    </section>
}

export default Hero;
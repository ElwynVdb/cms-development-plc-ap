import { Picture } from "../Picture";
import { FeaturedProduct } from "./FeaturedProduct";

export interface HomeFields {
    title: string;
    description: string;
    featuredProducts: FeaturedProduct[];
    picture: Picture;
  }
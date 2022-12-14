import { Images } from "./Images";
import { PlaceholderImage } from './PlaceHolderImage';

export interface GatsbyImage {
    images: Images;
    layout: string;
    width: number;
    height: number;
    placeholder: PlaceholderImage;
  }
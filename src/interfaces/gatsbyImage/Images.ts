import { ImageFallback } from './ImageFallback';
import { ImageSource } from "./ImageSource";

export interface Images {
    sources: ImageSource[];
    fallback: ImageFallback;
  }
import { Picture } from "../Picture";

export interface PlcFields {
    height: number;
    inputs: number;
    length: number;
    mainPicture: Picture;
    operatingCurrent: number;
    operatingVoltage: number;
    outputs: number;
    portType: string;
    programmingPossibilties: string[];
    promoImage1: Picture;
    promoImage2: Picture;
    promoImage3?: any;
    serialNumber: string;
    series: string;
    usageEnvironment: string;
    width: number;
}
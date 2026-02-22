import { StaticImageData } from "next/image";

export interface ImageThumbnailProps {
  src?: string | StaticImageData;
  alt: string;
  className?: string;
  height?: number;
  width?: number;
}

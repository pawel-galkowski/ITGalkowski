import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export interface SliderImageProps {
  alt: string;
  src: string;
}

export interface ImageCarouselProps {
  images: SliderImageProps[];
  imgStyles?: SxProps<Theme>;
  sx?: SxProps<Theme>;
}
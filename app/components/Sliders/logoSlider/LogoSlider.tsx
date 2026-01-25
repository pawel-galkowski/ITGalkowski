import React from "react";
import { SliderImageProps } from "../types";
import { Box } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { logoSliderStyles } from "./LogoSlider.styles";

export const logoSliderTestIds = {
  root: "logo-slider-root",
  track: "logo-slider-track",
  logoBox: "logo-slider-logo-box",
  logoImg: "logo-slider-logo-img",
};

const images: SliderImageProps[] = [
  {
    src: "https://szpital-raciborz.org/wp-content/uploads/2023/04/logo-2-1.png",
    alt: "Szpital rejonowy w Raciborzu Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Instal-konsorcjum-logo-RGB-%401600px.jpg/960px-Instal-konsorcjum-logo-RGB-%401600px.jpg",
    alt: "Instal Konsorcjum Logo",
  },
  {
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjk1IiBoZWlnaHQ9IjczIiB2aWV3Qm94PSIwIDAgMjk1IDczIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMzc1OF8yOTE2OCkiPgo8cGF0aCBkPSJNOTEuMTQgNS4yODAwMUg4Mi4zNUw3My41MyAzNy4xM0g4MC4xTDgxLjkxIDMwLjA3SDkwLjk5TDkyLjc2IDM3LjEzSDk5Ljc4TDkxLjEzIDUuMjgwMDFIOTEuMTRaTTgzLjI0IDI1LjE4TDg2LjI4IDExLjQxSDg2LjM3TDg5LjU4IDI1LjE4SDgzLjIzSDgzLjI0Wk0xMjAuNDIgMjAuNjNWMjAuNTVDMTI0LjA0IDE5LjgzIDEyNS44NSAxNy4xOSAxMjUuODUgMTMuNTNDMTI1Ljg1IDYuNzQwMDEgMTIxLjY2IDUuMjgwMDEgMTE2LjU4IDUuMjgwMDFIMTA0Ljc2VjM3LjEzSDExNi41NEMxMTkuMzYgMzcuMTMgMTI2LjM3IDM2Ljc4IDEyNi4zNyAyOC43MUMxMjYuMzcgMjQuMzQgMTI1LjE0IDIxLjMgMTIwLjQyIDIwLjYzWk0xMTEuNDIgMTAuMThIMTE1LjUyQzExNy43NyAxMC4xOCAxMTkuMzYgMTEuODkgMTE5LjM2IDE0LjIzQzExOS4zNiAxNy4zMiAxMTcuMzQgMTguMjggMTE1Ljg4IDE4LjI4SDExMS40MlYxMC4xN1YxMC4xOFpNMTE1LjEyIDMyLjIzSDExMS40MlYyMy4xOUgxMTUuM0MxMTguNjUgMjMuMTkgMTE5LjcxIDI0LjkxIDExOS43MSAyNy43M0MxMTkuNzEgMzIuMTkgMTE2LjUzIDMyLjIzIDExNS4xMSAzMi4yM0gxMTUuMTJaTTEzNC4zMSAzNy4xM1Y1LjI4MDAxSDE0My4zMUwxNTEuNzggMjcuMzRIMTUxLjg3VjUuMjgwMDFIMTU4LjA5VjM3LjEzSDE0OS4zMUwxNDAuNjIgMTMuODRIMTQwLjUzVjM3LjEzSDEzNC4zMVpNMTkyLjE4IDUuMjgwMDFIMTgzLjRMMTc0LjU4IDM3LjEzSDE4MS4xNUwxODIuOTYgMzAuMDdIMTkyLjA1TDE5My44MSAzNy4xM0gyMDAuODJMMTkyLjE3IDUuMjgwMDFIMTkyLjE4Wk0xODQuMjggMjUuMThMMTg3LjMzIDExLjQxSDE4Ny40MkwxOTAuNjQgMjUuMThIMTg0LjI4Wk0yMDYuNDcgMzcuMTNWNS4yODAwMUgyMTcuMTlMMjIyLjE4IDI2Ljk0SDIyMi4yN0wyMjcuNTYgNS4yODAwMUgyMzcuOTNWMzcuMTNIMjMxLjQ1VjEyLjU2SDIzMS4zNkwyMjUuMjMgMzcuMTNIMjE4Ljg4TDIxMy4wNiAxMi41NkgyMTIuOTdWMzcuMTNIMjA2LjQ4SDIwNi40N1pNMjY1LjQ5IDI3Ljc4QzI2NS40OSAyMi4wNCAyNjEuMTYgMjEuNyAyNTkuNzEgMjEuNTJWMjEuNDNDMjY0LjAzIDIwLjcyIDI2NS42MiAxNy42OCAyNjUuNjIgMTMuNjJDMjY1LjYyIDguMTkwMDEgMjYyLjcxIDUuMjgwMDEgMjU4LjE3IDUuMjgwMDFIMjQ1Ljg2VjM3LjEzSDI1Mi41M1YyMy45NEgyNTQuMjRDMjU5LjM2IDIzLjk0IDI1OS4wMiAyNy4xNiAyNTkuMDIgMzAuOTZDMjU5LjAyIDMzLjAzIDI1OC44NCAzNS4yIDI1OS43MiAzNy4xM0gyNjYuMjVDMjY1LjYzIDM1LjgxIDI2NS41IDI5LjgxIDI2NS41IDI3Ljc4SDI2NS40OVpNMjU1LjQ3IDE5LjA1SDI1Mi41MlYxMC4xOUgyNTUuNDdDMjU3LjU5IDEwLjE5IDI1OC44NyAxMS4zMyAyNTguODcgMTQuMzhDMjU4Ljg3IDE2LjQgMjU4LjEyIDE5LjA1IDI1NS40NyAxOS4wNVpNMjgzLjgzIDQuNzYwMDFDMjcyLjg1IDQuNzYwMDEgMjcyLjg1IDEyLjc4IDI3Mi44NSAyMS4yMUMyNzIuODUgMjkuNjQgMjcyLjg1IDM3LjY3IDI4My44MyAzNy42N0MyOTQuODEgMzcuNjcgMjk0LjgxIDI5LjU1IDI5NC44MSAyMS4yMUMyOTQuODEgMTIuODcgMjk0LjgxIDQuNzYwMDEgMjgzLjgzIDQuNzYwMDFaTTI4My44MyAzMi45QzI4MC4wOSAzMi45IDI3OS42IDI5LjM4IDI3OS42IDIxLjIxQzI3OS42IDEzLjA0IDI4MC4wOSA5LjUyMDAxIDI4My44MyA5LjUyMDAxQzI4Ny41NyA5LjUyMDAxIDI4OC4wNyAxMy4wNiAyODguMDcgMjEuMjFDMjg4LjA3IDI5LjM2IDI4Ny41OSAzMi45IDI4My44MyAzMi45Wk0xNjguMDQgMjMuOUwxNjMuNDUgMTkuMzFMMTY4LjA0IDE0LjczTDE3Mi42MyAxOS4zMUwxNjguMDQgMjMuOVoiIGZpbGw9IiMwMDRDNEMiLz4KPHBhdGggZD0iTTI3LjEyIDcyLjFMNTQuMDkgNDUuMDhWMC4wNDAwMzkxSDAuMDQwMDM5MVY0NS4wOEwyNy4xMiA3Mi4xWiIgZmlsbD0iIzAwQTI5NiIvPgo8cGF0aCBkPSJNNTQuMDkwMSA0NS4wODAxTDI3LjEyMDEgMTguMDYwMVY3Mi4xMDAxTDU0LjA5MDEgNDUuMDgwMVoiIGZpbGw9IiNGM0MwMDAiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zNzU4XzI5MTY4Ij4KPHJlY3Qgd2lkdGg9IjI5NSIgaGVpZ2h0PSI3MyIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
    alt: "ABN AMRO Logo",
  },
  {
    src: "https://www.ing.pl/_static/img/logo_lsl_new.5800ff4f65b35cf926f5.svg",
    alt: "Ing Bank Logo",
  },
  {
    src: "https://www.capgemini.com/pl-pl/wp-content/themes/capgemini2025/assets/images/capgeminiBlue.svg",
    alt: "Capgemini Polska Logo",
  },
];


const LogoSlider: React.FC = () => (
  <Box sx={logoSliderStyles.root} data-testid={logoSliderTestIds.root}>
    <Box
      sx={logoSliderStyles.track}
      data-testid={logoSliderTestIds.track}
    >
      {/* First set of logos */}
      {images.map((image) => (
        <Box
          key={uuidv4()}
          sx={logoSliderStyles.logoBox}
          data-testid={logoSliderTestIds.logoBox}
        >
          <Box
            component="img"
            src={image.src}
            alt={image.alt}
            sx={logoSliderStyles.logoImg(50)}
            data-testid={logoSliderTestIds.logoImg}
          />
        </Box>
      ))}
      {/* Second set of logos for seamless loop */}
      {images.map((image) => (
        <Box
          key={uuidv4()}
          sx={logoSliderStyles.logoBox}
          data-testid={logoSliderTestIds.logoBox}
        >
          <Box
            component="img"
            src={image.src}
            alt={image.alt}
            sx={logoSliderStyles.logoImg(100)}
            data-testid={logoSliderTestIds.logoImg}
          />
        </Box>
      ))}
    </Box>
  </Box>
);

export default LogoSlider;

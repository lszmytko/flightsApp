import "styled-components";
import { breakpoints } from "./config/consts/breakpoints";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      btnBackground: string;
      grey: string;
      blue: {
        primary: string;
        hover: string;
      };
    };
    fonts: {
      primary: "Montserrat";
    };
    breakpoints: typeof breakpoints;
  }
}

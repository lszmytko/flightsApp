import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      btnBackground: string;
      secondary: string;
    };
    fonts: {
      primary: "Montserrat";
    };
  }
}

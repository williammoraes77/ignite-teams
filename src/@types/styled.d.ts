import "styled-components";
import theme from "../theme";

declare module "styled-components" {
  type ThemeType = typeof theme.theme_default;

  export interface DefaultTheme extends ThemeType {}
}

import { DefaultTheme, ThemeProvider } from "styled-components";

import Routes from "./Routes";
import { theme } from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <Routes />;
    </ThemeProvider>
  );
}

export default App;

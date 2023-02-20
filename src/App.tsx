import { DefaultTheme, ThemeProvider } from "styled-components";

import Routes from "./components/Routes";
import { theme } from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <Routes />;
    </ThemeProvider>
  );
}

export default App;

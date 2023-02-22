import { Audio } from "react-loader-spinner";

import { theme } from "../../config/theme";

export const Loader = () => (
  <Audio
    height="100"
    width="100"
    color={theme.colors.blue.primary}
    ariaLabel="audio-loading"
    wrapperStyle={{}}
    wrapperClass="wrapper-class"
    visible={true}
  />
);

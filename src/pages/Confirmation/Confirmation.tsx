import { useLocation } from "react-router-dom";

import * as Styled from "./Confirmation.styled";

const resultMessages: Record<"success" | "failure", string> = {
  success: "Operation ended successgully",
  failure: "operation resulted in an error",
};

export const Confirmation = () => {
  const { state } = useLocation<{ result: "success" | "failure" }>();

  return (
    <Styled.Wrapper>
      <Styled.Info>{resultMessages[state.result]}</Styled.Info>
      <Styled.GoBackBtn onClick={() => window.history.back()}>
        Go back
      </Styled.GoBackBtn>
    </Styled.Wrapper>
  );
};

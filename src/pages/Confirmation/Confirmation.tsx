import { useLocation } from "react-router-dom";

import * as Styled from "./Confirmation.styled";

export const Confirmation = () => {
  const { state } = useLocation<{ result: "success" | "failure" }>();
  console.log(state);
  return (
    <Styled.Wrapper>
      <Styled.Info>{state.result}</Styled.Info>
      <Styled.GoBackBtn onClick={() => window.history.back()}>
        Go back
      </Styled.GoBackBtn>
    </Styled.Wrapper>
  );
};

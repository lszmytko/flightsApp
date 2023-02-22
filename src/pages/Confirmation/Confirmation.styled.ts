import styled from "styled-components";
import { Button } from "../../common/Button";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.h1`
  font-weight: bold;
`;

export const GoBackBtn = styled(Button)`
  position: absolute;
  right: 50px;
  top: 50px;
  font-size: 24px;
`;

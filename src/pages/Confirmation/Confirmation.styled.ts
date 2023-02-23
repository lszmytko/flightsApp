import styled from "styled-components";

import { Button } from "../../common/Button";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.blue.primary};
`;

export const GoBackBtn = styled(Button)`
  position: absolute;
  right: 50px;
  top: 50px;
  font-size: 24px;
  color: ${(props) => props.theme.colors.blue.primary};

  &:hover {
    color: ${(props) => props.theme.colors.blue.hover};
  }
`;

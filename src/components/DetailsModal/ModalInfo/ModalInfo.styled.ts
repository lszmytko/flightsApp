import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Info = styled.p`
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.blue.primary};
  font-weight: bold;

  span {
    color: black;
  }
`;

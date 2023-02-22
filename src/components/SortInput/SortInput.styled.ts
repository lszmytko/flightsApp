import styled from "styled-components";

export const Select = styled.select`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.primary};
  text-align: center;
  padding: 6px 0;
  border-radius: 8px;
  border: none;
  background: ${(props) => props.theme.colors.blue.primary};
  color: white;
`;

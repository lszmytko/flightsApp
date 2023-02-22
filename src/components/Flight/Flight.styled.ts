import styled from "styled-components";

export const Wrapper = styled.section`
  width: 375px;
  border: 20px solid ${(props) => props.theme.colors.grey};
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    width: 579px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 768px;
  }
`;

export const Divider = styled.div`
  border: 1px solid black;
  width: 315px;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 460px;
  }
`;

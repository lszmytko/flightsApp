import styled from "styled-components";

import { Button } from "../../../common/Button";

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  background: ${(props) => props.theme.colors.btnBackground};
  padding: 10px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 194px;
    padding-left: 10px;
    padding-bottom: 8px;
    margin-bottom: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 220px;
    padding-bottom: 20px;
    padding-left: 20px;
  }
`;

export const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 26px;
  height: 13px;
  top: -10px;
  background: ${(props) => props.theme.colors.btnBackground};
  clip-path: polygon(50% 0, 0% 100%, 100% 100%);

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    top: 50%;
    left: 0;
    transform: translate(-95%, -50%);
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    height: 26px;
    width: 13px;
  }
`;

export const Price = styled.div`
  display: flex;
  color: black;
  font-size: 28px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-bottom: 10px;
    display: block;
    text-align: left;
    line-height: 34px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 32px;
    line-height: 39px;
  }
`;

export const PpSpan = styled.span`
  font-size: 14px;
  display: flex;
  align-items: flex-end;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: inline-block;
    width: 20px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const BookButton = styled(Button)`
  width: 140px;
  border-radius: 24px;
  padding: 13px 0 12px;
  background: #008eff;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  line-height: 19px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 180px;
    font-size: 20px;
    line-height: 24px;
    padding: 11px 0 13px;
  }
`;

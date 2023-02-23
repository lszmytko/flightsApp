import styled, { css } from "styled-components";

import { Button } from "../../../common/Button";

export const ContentWrapper = styled.div`
  position: relative;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 9px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 11px;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Logo = styled.img<{ withButton: boolean }>`
  width: 37px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    position: absolute;
    width: 53px;
    height: 49px;
    top: ${(props) => (props.withButton ? "25px" : "13px")};
    left: 20px;
  }
`;

export const DetailsButton = styled(Button)`
  color: black;
  font-size: 10px;
  font-family: ${(props) => props.theme.fonts.primary};
  text-decoration: underline;
`;

export const DetailsWrapper = styled.div<{ textAlign: "left" | "right" }>`
  text-align: ${(props) => props.textAlign};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 41px;
  margin-bottom: 27px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 47px 0 46px;
    margin-bottom: 30px;
    width: 346px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 508px;
    padding: 0 69px 0 145px;
    justify-content: space-around;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const DurationTime = styled(Paragraph)`
  text-align: center;
  margin-bottom: 12px;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    transform: translateY(50%);
  }
`;

export const Hour = styled.p`
  font-size: 28px;
  line-height: 1;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: bold;
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 32px;
  }
`;

const circleMixin = css`
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.btnBackground};
  background: white;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    height: 13px;
  }
`;

export const DurationLine = styled.div`
  border: 1px solid ${(props) => props.theme.colors.btnBackground};
  width: 70px;
  position: relative;

  ::before {
    ${circleMixin};
    top: -7px;
    left: -6px;
  }

  ::after {
    ${circleMixin};
    top: -7px;
    right: -6px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 90px;
    margin: 0 10px;
  }
`;

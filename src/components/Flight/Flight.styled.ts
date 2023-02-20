import styled from "styled-components";

export const PriceWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 25px;
  background: ${(props) => props.theme.colors.btnBackground};
  padding: 10px;
`;

export const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 26px;
  height: 10px;
  top: -10px;
  background: #fcc002;
  clip-path: polygon(49% 0, 0% 100%, 100% 100%);
`;

export const Price = styled.div`
  display: flex;
  color: black;
  font-size: 28px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`;

export const PpSpan = styled.span`
  font-size: 14px;
`;

export const BookButton = styled.button`
  border: none;
  width: 140px;
  padding: 12px 0;
  background: #008eff;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  line-height: 19px;
  text-align: center;
  border-radius: 24px;
`;

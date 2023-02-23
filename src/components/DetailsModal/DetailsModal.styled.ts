import styled from "styled-components";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

import { Button } from "../../common/Button";

const iconSize = "48px";

export const ModalWraper = styled(Modal)`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 300px;
`;

export const Icon = styled(AiOutlineClose)`
  position: absolute;
  z-index: 100;
  right: 0;
  top: 0;
  height: ${iconSize};
  font-size: ${iconSize};
  line-height: ${iconSize};
  color: ${(props) => props.theme.colors.blue.primary};

  svg {
    height: ${iconSize};
    font-size: ${iconSize};
    line-height: ${iconSize};
  }
`;

export const CloseButton = styled(Button)``;

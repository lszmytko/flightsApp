import Modal from "react-modal";

import * as Styled from "./DetailsModal.styled";
import { useFlightsContext } from "../../pages/Flights";
import { CloseButton } from "./DetailsModal.styled";
import { ModalInfo } from "./ModalInfo";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
  },
};

Modal.setAppElement(document.body);

export const DetailsModal = () => {
  const { isModalOpen, setIsModalOpen } = useFlightsContext();

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Modal isOpen={isModalOpen} style={customStyles}>
        <ModalInfo />
        <CloseButton onClick={handleCloseModal}>
          <Styled.Icon height="32px" />
        </CloseButton>
      </Modal>
    </>
  );
};

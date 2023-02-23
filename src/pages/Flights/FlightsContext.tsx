import { createContext, useContext, useState } from "react";

export type ModalData = {
  freeBaggageAllowed: boolean;
  remainingNumberOfSeats: number;
  seatPitch: number;
};

type FlightsContextType = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleModalOpen: (data: ModalData | null) => void;
  uuid: string;
  setUuid: React.Dispatch<React.SetStateAction<string>>;
  flightModalData: ModalData | null;
  isApiCallLoading: boolean;
  setIsApiCallLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const FlightsContext = createContext<FlightsContextType | null>(null);

export const FlightsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uuid, setUuid] = useState("");
  const [flightModalData, setFlightModalData] = useState<ModalData | null>(
    null
  );
  const [isApiCallLoading, setIsApiCallLoading] = useState(false);

  const handleModalOpen = (data: ModalData | null) => {
    setIsModalOpen(true);
    setFlightModalData(data);
  };

  const value = {
    isModalOpen,
    setIsModalOpen,
    handleModalOpen,
    uuid,
    setUuid,
    flightModalData,
    isApiCallLoading,
    setIsApiCallLoading,
  };

  return (
    <FlightsContext.Provider value={value}>{children}</FlightsContext.Provider>
  );
};

export const useFlightsContext = () => {
  return useContext(FlightsContext) as FlightsContextType;
};

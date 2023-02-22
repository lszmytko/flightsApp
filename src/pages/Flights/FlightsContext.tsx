import { createContext, useContext, useState } from "react";

type FlightsContextType = {
  isModalOpen: boolean;
  handleModalOpen: () => void;
  uuid: string;
  setUuid: React.Dispatch<React.SetStateAction<string>>;
};

const FlightsContext = createContext<FlightsContextType | null>(null);

export const FlightsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uuid, setUuid] = useState("");
  const handleModalOpen = () => {
    console.log("handleopen");
    setIsModalOpen(true);
  };

  const value = {
    isModalOpen,
    handleModalOpen,
    uuid,
    setUuid,
  };

  return (
    <FlightsContext.Provider value={value}>{children}</FlightsContext.Provider>
  );
};

export const useFlightsContext = () => {
  return useContext(FlightsContext) as FlightsContextType;
};

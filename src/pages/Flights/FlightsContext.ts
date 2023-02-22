import { createContext, useContext } from "react";

type FlightsContextType = {
  isModalOpen: boolean;
  handleModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FlightsContext = createContext<FlightsContextType>({
  isModalOpen: false,
  handleModalOpen: () => {},
});

export const useFlightsContext = (): FlightsContextType => {
  return useContext<FlightsContextType>(FlightsContext);
};

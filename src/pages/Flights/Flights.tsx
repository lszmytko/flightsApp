import { useState } from "react";

import { FlightType, SortOptionType } from "./Flights.types";
import * as Styled from "./Flights.styled";
import { sortFlights } from "./sortFlights";
import useFetch from "../../hooks/useFetch";
import { Flight } from "../../components/Flight/Flight";
import { SortInput } from "../../components/SortInput";
import { Loader } from "../../components/Loader";
import { flightApiRoute } from "../../config/consts/routes";
import { FlightsContext } from "./FlightsContext";

const Flights = () => {
  const [sortingOption, setSortingOption] = useState<SortOptionType>("price");
  const {
    data: flights,
    isLoading,
    error,
  } = useFetch<FlightType[]>(`${flightApiRoute}/flights`);

  console.log({ flights });

  const sortedFlights = sortFlights(sortingOption, flights);

  const handleInputChange = (value: SortOptionType) => {
    setSortingOption(value);
  };

  return (
    <Styled.Wrapper>
      {isLoading && <Loader />}
      {error && <Styled.Error>Something went wrong ...</Styled.Error>}
      {flights && (
        <div>
          <Styled.InputWrapper>
            <SortInput
              value={sortingOption}
              onInputChange={handleInputChange}
            />
          </Styled.InputWrapper>
          {sortedFlights?.map(({ price, airlineCode, bounds, uuid }) => {
            return (
              <Flight
                key={uuid}
                airlineCode={airlineCode}
                price={price}
                bounds={bounds}
                uuid={uuid}
              />
            );
          })}
        </div>
      )}
    </Styled.Wrapper>
  );
};

const FlightsWithContext = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <FlightsContext.Provider value={{ isModalOpen, handleModalOpen }}>
      <Flights />
    </FlightsContext.Provider>
  );
};

export default FlightsWithContext;

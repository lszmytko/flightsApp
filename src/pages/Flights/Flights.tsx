import { useState } from "react";

import { FlightsContextProvider, useFlightsContext } from "./FlightsContext";
import { FlightType, SortOptionType } from "./Flights.types";
import * as Styled from "./Flights.styled";
import { sortFlights } from "./sortFlights";
import useFetch from "../../hooks/useFetch";
import { Flight } from "../../components/Flight/Flight";
import { SortInput } from "../../components/SortInput";
import { Loader } from "../../components/Loader";
import { flightApiRoute } from "../../config/consts/routes";
import { DetailsModal } from "../../components/DetailsModal";

const Flights = () => {
  const [sortingOption, setSortingOption] = useState<SortOptionType>("price");
  const {
    data: flights,
    isLoading,
    error,
  } = useFetch<FlightType[]>(`${flightApiRoute}/flights`);
  const { isApiCallLoading } = useFlightsContext();

  console.log({ flights });

  const sortedFlights = sortFlights(sortingOption, flights);

  const handleInputChange = (value: SortOptionType) => {
    setSortingOption(value);
  };

  console.log({ isApiCallLoading });

  if (isApiCallLoading)
    return (
      <Styled.Wrapper>
        <Loader />
      </Styled.Wrapper>
    );

  return (
    <>
      <DetailsModal />
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
    </>
  );
};

const FlightsWithProvider = () => {
  return (
    <FlightsContextProvider>
      <Flights />
    </FlightsContextProvider>
  );
};

export default FlightsWithProvider;

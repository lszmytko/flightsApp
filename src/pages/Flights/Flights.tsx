import { useState } from "react";
import { Audio } from "react-loader-spinner";

import { FlightType, SortOptionType } from "./Flights.types";
import * as Styled from "./Flights.styled";
import { sortFlights } from "./sortFlights";

import useFetch from "../../hooks/useFetch";
import { Flight } from "../../components/Flight/Flight";
import { apiRoute } from "../../config/consts/routes";
import { SortInput } from "../../components/SortInput";

const Flights = () => {
  const [sortingOption, setSortingOption] = useState<SortOptionType>("price");
  const {
    data: flights,
    isLoading,
    error,
  } = useFetch<FlightType[]>(`${apiRoute}/flights`);

  console.log({ flights });

  const sortedFlights = sortFlights(sortingOption, flights);

  const handleInputChange = (value: SortOptionType) => {
    setSortingOption(value);
  };

  return (
    <Styled.Wrapper>
      {isLoading && (
        <Audio
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      )}
      {error && <div>error</div>}
      <div>
        <SortInput value={sortingOption} onInputChange={handleInputChange} />
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
    </Styled.Wrapper>
  );
};

export default Flights;

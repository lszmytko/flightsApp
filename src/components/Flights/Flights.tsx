import { Audio } from "react-loader-spinner";

import { FlightType } from "./Flights.types";
import * as Styled from "./Flights.styled";
import useFetch from "../../hooks/useFetch";
import { Flight } from "../Flight/Flight";

const apiRoute = process.env.REACT_APP_FLIGHTS_API;

const Flights = () => {
  const {
    data: flights,
    isLoading,
    error,
  } = useFetch<FlightType[]>(`${apiRoute}/flights`);

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
      {flights?.map(({ price, airlineCode }) => {
        return <Flight airlineCode={airlineCode} />;
      })}
    </Styled.Wrapper>
  );
};

export default Flights;

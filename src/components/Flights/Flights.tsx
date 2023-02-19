import { Audio } from "react-loader-spinner";

import useFetch from "../../hooks/useFetch";
import { Flight } from "../Flight/Flight";
import { FlightType } from "./Flights.types";

const apiRoute = process.env.REACT_APP_FLIGHTS_API;

const Flights = () => {
  const {
    data: flights,
    isLoading,
    error,
  } = useFetch<FlightType[]>(`${apiRoute}/flights`);

  console.log(flights);

  if (isLoading)
    return (
      <Audio
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    );
  if (error) return <div>Error!</div>;

  return (
    <div>
      {flights?.map(({ price, airlineCode }) => {
        return <Flight airlineCode={airlineCode} />;
      })}
    </div>
  );
};

export default Flights;

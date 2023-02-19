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

  if (isLoading) return <div>Loading...</div>;
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

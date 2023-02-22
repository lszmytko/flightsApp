import { FlightType, SortOptionType } from "./Flights.types";

export const sortFlights = (
  sortOption: SortOptionType,
  array: FlightType[] | null
) => {
  if (array === null) return [];
  if (sortOption === "departureTime") {
    array = array.sort((a, b) => {
      return (
        Number(new Date(a.bounds[0].departure.dateTime)) -
        Number(new Date(b.bounds[0].departure.dateTime))
      );
    });
  } else if (sortOption === "price") {
    array = array.sort((a, b) => {
      return (
        Number(new Date(a.price.amount)) - Number(new Date(b.price.amount))
      );
    });
  }

  return array;
};

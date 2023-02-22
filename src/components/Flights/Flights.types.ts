type FlightDetails = {
  code: string;
  name: string;
  dateTime: string;
};

type Bound = {
  departure: FlightDetails;
  destination: FlightDetails;
  duration: string;
};

export type FlightType = {
  airlineCode: string;
  bounds: Bound[];
  price: {
    amount: number;
    currency: string;
  };
  uuid: string;
};

export type SortOptionType = "price" | "departureTime";

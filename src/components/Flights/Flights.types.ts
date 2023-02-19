type Bound = {
  departure: Object;
  destiantion: Object;
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

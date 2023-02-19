type FlightType = {
  airlineCode: string;
};

export const Flight = ({ airlineCode }: FlightType) => {
  return <div>{airlineCode}</div>;
};

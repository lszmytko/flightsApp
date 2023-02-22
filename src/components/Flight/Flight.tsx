import * as Styled from "./Flight.styled";
import { FlightType } from "../../pages/Flights/Flights.types";
import { convertPrice } from "./utils";
import { Details } from "./Details";
import { PriceDetails } from "./PriceDetails";

export const Flight = ({
  airlineCode,
  price: { amount, currency },
  bounds,
  uuid,
}: FlightType) => {
  const amountWithCommas = convertPrice(amount, currency);

  return (
    <Styled.Wrapper>
      <div>
        <Details airlineCode={airlineCode} bounds={bounds} />
        <Styled.Divider />
        <Details airlineCode={airlineCode} bounds={bounds} />
      </div>
      <PriceDetails amount={amountWithCommas} uuid={uuid} />
    </Styled.Wrapper>
  );
};

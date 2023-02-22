import * as Styled from "./Flight.styled";
import { FlightType } from "../../pages/Flights/Flights.types";
import { convertPrice } from "./utils";
import { Details } from "./Details";
import { PriceDetails } from "./PriceDetails";

type Flight = Pick<FlightType, "airlineCode" | "price" | "bounds" | "uuid">;

export const Flight = ({
  airlineCode,
  price: { amount, currency },
  bounds,
  uuid,
}: Flight) => {
  const amountWithCommas = convertPrice(amount, currency);

  return (
    <Styled.Wrapper>
      <div>
        <Details airlineCode={airlineCode} bounds={bounds} textAlign="left" />
        <Styled.Divider />
        <Details airlineCode={airlineCode} bounds={bounds} textAlign="right" />
      </div>
      <PriceDetails amount={amountWithCommas} uuid={uuid} />
    </Styled.Wrapper>
  );
};

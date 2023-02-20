import * as Styled from "./Flight.styled";
import { FlightType } from "../Flights/Flights.types";
import { convertPrice } from "./convertPrice";

type Flight = Pick<FlightType, "airlineCode" | "price">;

export const Flight = ({
  airlineCode,
  price: { amount, currency },
}: Flight) => {
  const amountWithCommas = convertPrice(amount, currency);
  return (
    <div>
      <Styled.PriceWrapper>
        <Styled.Triangle />
        <Styled.Price>
          {amountWithCommas} <Styled.PpSpan>p.p.</Styled.PpSpan>
        </Styled.Price>
        <Styled.BookButton>Book Flight</Styled.BookButton>
      </Styled.PriceWrapper>
    </div>
  );
};

import * as Styled from "./Flight.styled";
import { FlightType } from "../Flights/Flights.types";
import {
  convertPrice,
  getDate,
  getDuration,
  getHour,
  getLogoSrc,
} from "./utils";

type Flight = Pick<FlightType, "airlineCode" | "price" | "bounds">;

export const Flight = ({
  airlineCode,
  price: { amount, currency },
  bounds,
}: Flight) => {
  const amountWithCommas = convertPrice(amount, currency);
  const [firstFlight, secondFlight] = bounds;
  return (
    <section>
      <div>
        <div>
          <Styled.Logo src={getLogoSrc(airlineCode)} />
          <Styled.DetailsButton>Vluchdetails</Styled.DetailsButton>
        </div>
        <Styled.Detail>
          <p>{firstFlight.departure.code}</p>
          <Styled.Hour>{getHour(firstFlight.departure.dateTime)}</Styled.Hour>
          <p>{getDate(firstFlight.departure.dateTime)}</p>
        </Styled.Detail>
        <Styled.Duration>
          <p>{getDuration(firstFlight.duration)}</p>
        </Styled.Duration>
      </div>
      <p>{firstFlight.departure.code}</p>
      <Styled.PriceWrapper>
        <Styled.Triangle />
        <Styled.Price>
          {amountWithCommas} <Styled.PpSpan>p.p.</Styled.PpSpan>
        </Styled.Price>
        <Styled.BookButton>Book Flight</Styled.BookButton>
      </Styled.PriceWrapper>
    </section>
  );
};

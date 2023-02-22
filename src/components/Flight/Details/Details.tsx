import * as Styled from "./Details.styled";
import { getDate, getDuration, getHour, getLogoSrc } from "./utils";
import { FlightType } from "../../../pages/Flights/Flights.types";
import { useFlightsContext } from "../../../pages/Flights";

type DetailsType = Pick<FlightType, "airlineCode" | "bounds">;

export const Details = ({ airlineCode, bounds }: DetailsType) => {
  // const {handleModalOpen, isModalOpen) = useFlightsContext() || {};
  const [firstFlight] = bounds;
  const durationString = firstFlight.duration;
  return (
    <Styled.ContentWrapper>
      <Styled.Header>
        <Styled.Logo src={getLogoSrc(airlineCode)} />
        <Styled.DetailsButton>Vluchtdetails</Styled.DetailsButton>
      </Styled.Header>
      <Styled.Wrapper>
        <Styled.DetailsWrapper textAlign="right">
          <Styled.Paragraph>{firstFlight.departure.code}</Styled.Paragraph>
          <Styled.Hour>{getHour(firstFlight.departure.dateTime)}</Styled.Hour>
          <Styled.Paragraph>
            {getDate(firstFlight.departure.dateTime)}
          </Styled.Paragraph>
        </Styled.DetailsWrapper>
        <div>
          <Styled.DurationTime>
            {getDuration(durationString)}
          </Styled.DurationTime>
          <Styled.DurationLine />
        </div>
        <Styled.DetailsWrapper textAlign="left">
          <Styled.Paragraph>{firstFlight.destination.code}</Styled.Paragraph>
          <Styled.Hour>{getHour(firstFlight.destination.dateTime)}</Styled.Hour>
          <Styled.Paragraph>
            {getDate(firstFlight.destination.dateTime)}
          </Styled.Paragraph>
        </Styled.DetailsWrapper>
      </Styled.Wrapper>
    </Styled.ContentWrapper>
  );
};

import * as Styled from "./Details.styled";
import {
  getDate,
  getDuration,
  getHour,
  getLogoSrc,
  getModalFlightData,
} from "./utils";
import { FlightType } from "../../../pages/Flights/Flights.types";
import { useFlightsContext } from "../../../pages/Flights";

type DetailsType = Pick<FlightType, "airlineCode" | "bounds"> &
  Partial<Pick<FlightType, "uuid">> & {
    withButton: boolean;
  };

export const Details = ({
  airlineCode,
  bounds,
  withButton,
  uuid,
}: DetailsType) => {
  const { handleModalOpen, setUuid, setIsApiCallLoading } = useFlightsContext();
  const [firstFlight] = bounds;
  const { duration: durationString } = firstFlight;

  const handleClick = async () => {
    setIsApiCallLoading(true);
    const data = await getModalFlightData(uuid);
    setIsApiCallLoading(false);
    handleModalOpen(data);
    uuid && setUuid(uuid);
  };

  return (
    <Styled.ContentWrapper>
      <Styled.Header>
        <Styled.Logo src={getLogoSrc(airlineCode)} withButton={withButton} />
        {withButton && (
          <Styled.DetailsButton onClick={handleClick}>
            Vluchtdetails
          </Styled.DetailsButton>
        )}
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

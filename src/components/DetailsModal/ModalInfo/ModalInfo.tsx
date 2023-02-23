import * as Styled from "./ModalInfo.styled";
import { useFlightsContext } from "../../../pages/Flights";

export const ModalInfo = () => {
  const { flightModalData } = useFlightsContext();

  if (flightModalData === null)
    return (
      <Styled.Wrapper>
        <h2>Something went wrong ...</h2>
      </Styled.Wrapper>
    );

  const { freeBaggageAllowed, remainingNumberOfSeats, seatPitch } =
    flightModalData;

  return (
    <Styled.Wrapper>
      <div>
        <Styled.Info>
          Number of seats left: <span>{remainingNumberOfSeats}</span>
        </Styled.Info>
        <Styled.Info>
          Is free baggage allowed?:{" "}
          <span>{freeBaggageAllowed === true ? "YES" : "NO"}</span>
        </Styled.Info>
        <Styled.Info>
          Seat pitch: <span>{seatPitch}</span>
        </Styled.Info>
      </div>
    </Styled.Wrapper>
  );
};

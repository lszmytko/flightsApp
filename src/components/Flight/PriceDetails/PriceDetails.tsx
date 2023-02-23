import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import * as Styled from "./PriceDetails.styled";
import { flightApiRoute } from "../../../config/consts/routes";
import { useFlightsContext } from "../../../pages/Flights";

export const PriceDetails = ({
  amount,
  uuid,
}: {
  amount: string;
  uuid: string;
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const history = useHistory();
  const { setIsApiCallLoading } = useFlightsContext();

  const handleBookFlight = async () => {
    try {
      setIsApiCallLoading(true);
      setIsButtonClicked(true);
      await axios.post(`${flightApiRoute}/flights/:${uuid}`);
      setIsApiCallLoading(false);
      history.push("/confirmation", { result: "success" });
    } catch (e) {
      setIsApiCallLoading(false);
      history.push("/confirmation", { result: "failure" });
    }
  };

  return (
    <Styled.PriceWrapper>
      <Styled.Triangle />
      <Styled.Price>
        {amount}
        <Styled.PpSpan>p.p.</Styled.PpSpan>
      </Styled.Price>
      <Styled.BookButton onClick={handleBookFlight} disabled={isButtonClicked}>
        Book flight
      </Styled.BookButton>
    </Styled.PriceWrapper>
  );
};

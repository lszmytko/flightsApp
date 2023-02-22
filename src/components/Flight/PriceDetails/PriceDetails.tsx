import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import * as Styled from "./PriceDetails.styled";
import { flightApiRoute } from "../../../config/consts/routes";

export const PriceDetails = ({
  amount,
  uuid,
}: {
  amount: string;
  uuid: string;
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const history = useHistory();
  const handleBookFlight = async () => {
    try {
      setIsButtonClicked(true);
      await axios.post(`${flightApiRoute}/flights/:${uuid}`);
      history.push("/confirmation", { result: "success" });
    } catch (e) {
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

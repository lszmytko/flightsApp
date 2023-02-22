import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { apiRoute } from "../../../config/consts/routes";
import * as Styled from "./PriceDetails.styled";

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
      await axios.post(`${apiRoute}/flights${uuid}`);
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

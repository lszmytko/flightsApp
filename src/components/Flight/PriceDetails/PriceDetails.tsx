import axios from "axios";
import { useHistory } from "react-router-dom";

import { apiRoute } from "../../../config/consts/routes";
import * as Styled from "./PriceDetails.styled";

export const PriceDetails = ({
  amount,
  uuid,
}: {
  amount: string;
  uuid: string;
}) => {
  const history = useHistory();
  const handleBookFlight = async () => {
    try {
      await axios.post(`${apiRoute}/flights${uuid}`);
      history.push("/success");
    } catch (e) {
      history.push("/failure");
    }
  };

  return (
    <Styled.PriceWrapper>
      <Styled.Triangle />
      <Styled.Price>
        {amount}
        <Styled.PpSpan>p.p.</Styled.PpSpan>
      </Styled.Price>
      <Styled.BookButton onClick={handleBookFlight}>
        Book flight
      </Styled.BookButton>
    </Styled.PriceWrapper>
  );
};

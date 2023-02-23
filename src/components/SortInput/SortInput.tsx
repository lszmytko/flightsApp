import * as Styled from "./SortInput.styled";

import { SortOptionType } from "../../pages/Flights";

const values: SortOptionType[] = ["price", "departureTime"];

export const SortInput = ({
  onInputChange,
}: {
  onInputChange: (value: SortOptionType) => void;
}) => {
  return (
    <Styled.Select
      onChange={(e) => onInputChange(e.target.value as SortOptionType)}
    >
      <option value={values[0]}>Price</option>
      <option value={values[1]}>Departure Time</option>
    </Styled.Select>
  );
};

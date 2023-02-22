import { InputValueType } from "../../pages/Flights";

import * as Styled from "./SortInput.styled";

export const SortInput = ({
  value,
  onInputChange,
}: {
  value: InputValueType;
  onInputChange: (value: InputValueType) => void;
}) => {
  return (
    <Styled.Select value={value} onChange={() => onInputChange(value)}>
      <option value="Price">Price</option>
      <option value="Departure Time">Departure Time</option>
    </Styled.Select>
  );
};

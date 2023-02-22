import * as Styled from "./SortInput.styled";
import { SortOptionType } from "../../pages/Flights";

export const SortInput = ({
  value,
  onInputChange,
}: {
  value: SortOptionType;
  onInputChange: (value: SortOptionType) => void;
}) => {
  return (
    <Styled.Select value={value} onChange={() => onInputChange(value)}>
      <option value="Price">Price</option>
      <option value="Departure Time">Departure Time</option>
    </Styled.Select>
  );
};

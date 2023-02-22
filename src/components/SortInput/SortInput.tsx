import { InputValueType } from "../Flights";

export const SortInput = ({
  value,
  onInputChange,
}: {
  value: InputValueType;
  onInputChange: (value: InputValueType) => void;
}) => {
  return (
    <select value={value} onChange={() => onInputChange(value)}>
      <option value="Price">Price</option>
      <option value="Departure Time">Departure Time</option>
    </select>
  );
};

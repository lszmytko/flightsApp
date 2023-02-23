import { useInView } from "react-intersection-observer";

import * as Styled from "./Flight.styled";
import { convertPrice } from "./convertPrice";
import { Details } from "./Details";
import { PriceDetails } from "./PriceDetails";

import { FlightType } from "../../pages/Flights/Flights.types";

export const Flight = ({
  airlineCode,
  price: { amount, currency },
  bounds,
  uuid,
}: FlightType) => {
  const { ref, inView } = useInView({
    rootMargin: "10px",
    triggerOnce: true,
  });

  const amountWithCommas = convertPrice(amount, currency);

  return (
    <Styled.Wrapper ref={ref}>
      {inView && (
        <>
          <div>
            <Details
              airlineCode={airlineCode}
              bounds={bounds}
              withButton={true}
              uuid={uuid}
            />
            <Styled.Divider />
            <Details
              airlineCode={airlineCode}
              bounds={bounds}
              withButton={false}
            />
          </div>
          <PriceDetails amount={amountWithCommas} uuid={uuid} />
        </>
      )}
    </Styled.Wrapper>
  );
};

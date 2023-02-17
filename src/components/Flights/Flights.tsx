import axios from "axios";
import { useEffect, useState } from "react";

const Flights = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const apiRoute = process.env.FLIGHTS_API as string;

  useEffect(() => {
    const getFlights = async () => {
      const response = await axios.get(`${apiRoute}/flights`);
      console.log(response);
    };

    getFlights();
  }, []);

  return <div>ok</div>;
};

export default Flights;

import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

const useFetch = <T>(url: string): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setState({
          data: response.data,
          isLoading: false,
          error: null,
        });
      } catch (error: any) {
        setState({
          data: null,
          isLoading: false,
          error,
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

export default useFetch;

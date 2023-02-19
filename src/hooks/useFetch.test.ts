import { renderHook } from "@testing-library/react-hooks";
import useFetch from "./useFetch";
import axios from "axios";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("useFetch", () => {
  it("should fetch data from the API", async () => {
    const data = { foo: "bar" };
    mockedAxios.get.mockResolvedValueOnce({ data });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("/api/data")
    );

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(data);
    expect(result.current.error).toBe(null);
  });

  it("should handle errors when fetching data from the API", async () => {
    const error = new Error("Something went wrong");
    mockedAxios.get.mockRejectedValueOnce(error);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("/api/data")
    );

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toEqual(error);
  });
});

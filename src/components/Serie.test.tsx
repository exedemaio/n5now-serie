import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Serie from "./Serie";
import { api } from "../api";

jest.mock("../api");

(api.get as jest.Mock).mockResolvedValue({
  data: {
    cast: [], // replace with your mock data
  },
});

describe("Serie", () => {
  it("renders correctly", () => {
    render(<Serie />);
  });

  it("calls the API correctly", async () => {
    const mockData = { data: { cast: [] } };
    (api.get as jest.Mock).mockResolvedValue(mockData);

    render(<Serie />);

    await waitFor(() =>
      expect(api.get).toHaveBeenCalledWith("/60625/credits?language=es-AR")
    );
  });

  it("renders List when data is loaded", async () => {
    const mockData = { data: { cast: [] } };
    (api.get as jest.Mock).mockResolvedValue(mockData);

    render(<Serie />);

    await screen.findByTestId("list");
  });
});

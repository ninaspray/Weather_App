import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("Forecast Details", () => {
  const validProps = {
    date: 123456,
    humidity: 30,
    temperature: {
      min: 2,
      max: 52,
    },
    wind: {
        speed: 5,
        direction: "w",
    }
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("Forecast Details", () => {
  const validProps = {
    date: "Mon 30th Apr",
    humidity: "30%",
    temperature: {
      min: 2,
      max: 52,
    },
    wind: "13mph"
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        date={validProps.date}
        humidity={validProps.humidity}
        temperature={validProps.temperature}
        wind={validProps.wind}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("render correct values for props", () => {
    const { getByText } = render(
      <ForecastDetails
      date={validProps.date}
      humidity={validProps.humidity}
      temperature={validProps.temperature}
      wind={validProps.wind}
      />
    );

    expect(getByText("Mon 30th Apr")).toHaveClass("forecast-details_date");
    expect(getByText("30%")).toHaveClass(
      "forecast-details_humidity"
    );
  });
});

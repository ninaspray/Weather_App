import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 123,
    description: "Mock Stub description",
    icon: "stubIcon",
    temperature: {
      min: 2,
      max: 52,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("render correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(getByText("123")).toHaveClass("forecast-summary__date");
    expect(getByText("Mock Stub description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("52°C")).toHaveClass("forecast-summary__temperature");
  });
});

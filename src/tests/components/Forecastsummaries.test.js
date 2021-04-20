import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
    const validProps = {
        forecasts: [
        {
            date: 1234,
            description: "Light Rain",
            icon: 500,
            temperature: {
                max: 30,
                min: 12,
            },
        },
           {
            date: 2468,
            description: "Thunderstorm",
            icon: 200,
            temperature: {
                max: 20,
                min: 8,
            },
        },
      ],
      onForecastSelect: () => {},
    };

it("renders the stub data correctly", () => {
    const { asFragment } = render(
    <ForecastSummaries forecasts={validProps.forecasts} 
        onForecastSelect={validProps.onForecastSelect}/>);
    expect(asFragment()).toMatchSnapshot();
});
it("renders the correct ammount of forecasts", () => {
    const { getAllByTestId } = render(
        <ForecastSummaries forecasts={validProps.forecasts} 
        onForecastSelect={validProps.onForecastSelect}/>
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
});
});
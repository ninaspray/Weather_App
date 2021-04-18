import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
    const validProps = [
        {
            date: 1234,
            description: "stub mock 1",
            icon: "800",
            temperature: {
                max: 30,
                min: 12,
            },
        },
        {
            date: 2468,
            description: "stub mock 2",
            icon: "200",
            temperature: {
                max: 20,
                min: 8,
            },
        },
    ];


it("renders the stub data correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
});
it("renders correct the ammount of forecasts", () => {
    const { getAllByTestId } = render(
        <ForecastSummaries forecasts={validProps} />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
})
});
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders city and country", () => {
    const validProps = {
        location: {
      city: "MockCity",
      country: "MockCountry",
    },
    forecasts:[
        {
        description: "Light Rain - Mock Data",
        icon: "500",
        date: 123456,
        humidity: 30,
        temperature: {
          min: 2,
          max: 52,
        },
        wind: {
            speed: 5,
            direction: "w",
        },
    },
    ],
    };

    render(<App forecasts={validProps.forecasts} location={validProps.location} />);
    const copy = screen.getByText(/MockCity, MockCountry/i);
    expect(copy).toBeInTheDocument();
  });
});
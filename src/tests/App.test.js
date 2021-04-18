import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders city and country", () => {
    const validProps = {
        location: {
      city: "MockCity",
      country: "MockCountry",
    },
    forecasts: [],
    };

    render(<App forecasts={validProps.forecasts} location={validProps.location} />);
    const copy = screen.getByText(/MockCity, MockCountry/i);
    expect(copy).toBeInTheDocument();
  });
});
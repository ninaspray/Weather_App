import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders city and country", () => {
    const validProps = {
      city: "MockCity",
      country: "MockCountry",
    };

    render(<App location={validProps} />);
    const copy = screen.getByText(/MockCity, MockCountry/i);
    expect(copy).toBeInTheDocument();
  });
});
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("shows the Resource Centre heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Resource Centre" }),
    ).toBeInTheDocument();
  });
});

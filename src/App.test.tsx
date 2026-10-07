import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("shows the Resource Centre heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Resource Centre" }),
    ).toBeInTheDocument();
  });
  it("shows the resources grouped by category", () => {
    render(<App />);

    const podcasts = screen.getByRole("region", { name: "Podcasts" });

    expect(
      within(podcasts).getByRole("heading", { name: "Mindful Moments" }),
    ).toBeInTheDocument();
  });
});

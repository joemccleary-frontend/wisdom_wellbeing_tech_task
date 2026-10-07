import { render, screen, within } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

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
  it("shows only matching resources when the user searches", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(
      screen.getByRole("searchbox", { name: "Search by title or tag" }),
      "smoothie",
    );

    expect(
      screen.getByRole("heading", { name: "Energy Boost Smoothie" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Mindful Moments" }),
    ).not.toBeInTheDocument();
  });
});

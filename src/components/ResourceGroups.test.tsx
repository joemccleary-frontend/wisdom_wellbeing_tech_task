import { render, screen, within } from "@testing-library/react";
import { ResourceGroups } from "./ResourceGroups";
import { makeResource } from "../test/makeResource";

describe("ResourceGroups", () => {
  it("shows a section for each category", () => {
    const resources = [
      makeResource({ id: "001", category: "Podcasts" }),
      makeResource({ id: "002", category: "Articles" }),
    ];

    render(<ResourceGroups resources={resources} />);

    expect(
      screen.getByRole("region", { name: "Podcasts" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: "Articles" }),
    ).toBeInTheDocument();
  });
  it("shows each resource inside its category section", () => {
    const resources = [
      makeResource({
        id: "001",
        category: "Podcasts",
        title: "Mindful Moments",
      }),
      makeResource({
        id: "002",
        category: "Articles",
        title: "The Science of Sleep",
      }),
    ];

    render(<ResourceGroups resources={resources} />);

    const podcasts = screen.getByRole("region", { name: "Podcasts" });
    const articles = screen.getByRole("region", { name: "Articles" });

    expect(
      within(podcasts).getByRole("heading", { name: "Mindful Moments" }),
    ).toBeInTheDocument();
    expect(
      within(articles).getByRole("heading", { name: "The Science of Sleep" }),
    ).toBeInTheDocument();
  });
});

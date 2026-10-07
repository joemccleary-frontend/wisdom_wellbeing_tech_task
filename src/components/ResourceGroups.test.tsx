import { render, screen, within } from "@testing-library/react";
import { ResourceGroups } from "./ResourceGroups";
import type { Resource } from "../types/resource";

const makeResource = (overrides: Partial<Resource>): Resource => ({
  id: "001",
  category: "Podcasts",
  title: "Mindful Moments",
  thumbnail: "https://example.com/photo.jpg",
  tags: [],
  duration: 25,
  description: "A calming podcast.",
  date_uploaded: "2025-07-10",
  ...overrides,
});

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
});

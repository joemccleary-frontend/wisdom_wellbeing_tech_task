import { render, screen } from "@testing-library/react";
import { ResourceCard } from "./ResourceCard";
import type { Resource } from "../types/resource";

const resource: Resource = {
  id: "001",
  category: "Podcasts",
  title: "Mindful Moments",
  thumbnail: "https://example.com/photo.jpg",
  tags: ["wellbeing", "mindfulness", "relaxation"],
  duration: 25,
  description: "A calming podcast.",
  date_uploaded: "2025-07-10",
};

describe("ResourceCard", () => {
  it("shows the resource title", () => {
    render(<ResourceCard resource={resource} />);

    expect(
      screen.getByRole("heading", { name: "Mindful Moments" }),
    ).toBeInTheDocument();
  });
});

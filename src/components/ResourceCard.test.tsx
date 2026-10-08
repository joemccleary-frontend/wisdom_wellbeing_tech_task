import { render, screen, within } from "@testing-library/react";
import { ResourceCard } from "./ResourceCard";
import type { Resource } from "../types/resource";
import userEvent from "@testing-library/user-event";

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
    render(<ResourceCard resource={resource} onSelect={vi.fn()} />);
    expect(
      screen.getByRole("heading", { name: "Mindful Moments" }),
    ).toBeInTheDocument();
  });
  it("shows the duration in minutes", () => {
    render(<ResourceCard resource={resource} onSelect={vi.fn()} />);
    expect(screen.getByText("25 min")).toBeInTheDocument();
  });
  it("shows each tag", () => {
    render(<ResourceCard resource={resource} onSelect={vi.fn()} />);
    const tagList = screen.getByRole("list", { name: "Tags" });
    const tags = within(tagList).getAllByRole("listitem");

    expect(tags.map((tag) => tag.textContent)).toEqual([
      "wellbeing",
      "mindfulness",
      "relaxation",
    ]);
  });
  it("shows no more than 3 tags", () => {
    const resourceWithFourTags: Resource = {
      ...resource,
      tags: ["wellbeing", "mindfulness", "relaxation", "sleep"],
    };

    render(<ResourceCard resource={resourceWithFourTags} onSelect={vi.fn()} />);

    const tagList = screen.getByRole("list", { name: "Tags" });
    expect(within(tagList).getAllByRole("listitem")).toHaveLength(3);
  });
  it("shows the thumbnail image", () => {
    render(<ResourceCard resource={resource} onSelect={vi.fn()} />);

    expect(screen.getByRole("presentation")).toHaveAttribute(
      "src",
      "https://example.com/photo.jpg",
    );
  });
  it("calls onSelect with the resource when its title is clicked", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(<ResourceCard resource={resource} onSelect={onSelect} />);

    await user.click(screen.getByRole("button", { name: "Mindful Moments" }));

    expect(onSelect).toHaveBeenCalledWith(resource);
  });
});

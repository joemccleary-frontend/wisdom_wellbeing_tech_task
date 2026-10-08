import { render, screen, within } from "@testing-library/react";
import { ResourceDetails } from "./ResourceDetails";
import { makeResource } from "../test/makeResource";

describe("ResourceDetails", () => {
  it("shows all of the resource's data in a dialog", () => {
    const resource = makeResource({
      title: "Mindful Moments",
      category: "Podcasts",
      duration: 25,
      description: "A calming podcast focused on mindfulness.",
      date_uploaded: "2025-07-10",
      tags: ["wellbeing", "mindfulness", "relaxation", "sleep"],
    });

    render(<ResourceDetails resource={resource} onClose={vi.fn()} />);

    const dialog = screen.getByRole("dialog", { name: "Mindful Moments" });
    expect(within(dialog).getByText("Podcasts")).toBeInTheDocument();
    expect(within(dialog).getByText("25 min")).toBeInTheDocument();
    expect(
      within(dialog).getByText("A calming podcast focused on mindfulness."),
    ).toBeInTheDocument();
    expect(
      within(dialog).getByText("Uploaded 10 July 2025"),
    ).toBeInTheDocument();

    const tags = within(dialog).getByRole("list", { name: "Tags" });
    expect(within(tags).getAllByRole("listitem")).toHaveLength(4);
  });
});

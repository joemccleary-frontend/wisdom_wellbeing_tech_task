import { groupByCategory } from "./groupByCategory";
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

describe("groupByCategory", () => {
  it("returns no groups when there are no resources", () => {
    expect(groupByCategory([])).toEqual([]);
  });
  it("puts a single resource in a group for its category", () => {
    const podcast = makeResource({ id: "001", category: "Podcasts" });

    expect(groupByCategory([podcast])).toEqual([
      { category: "Podcasts", resources: [podcast] },
    ]);
  });
  it("puts resources from different categories in separate groups", () => {
    const firstPodcast = makeResource({ id: "001", category: "Podcasts" });
    const article = makeResource({ id: "002", category: "Articles" });
    const secondPodcast = makeResource({ id: "003", category: "Podcasts" });

    expect(groupByCategory([firstPodcast, article, secondPodcast])).toEqual([
      { category: "Podcasts", resources: [firstPodcast, secondPodcast] },
      { category: "Articles", resources: [article] },
    ]);
  });
});

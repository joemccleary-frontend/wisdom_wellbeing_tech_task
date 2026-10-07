import { groupByCategory } from "./groupByCategory";
import { makeResource } from "../test/makeResource";

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
  it("orders groups by category order, not input order", () => {
    const article = makeResource({ id: "001", category: "Articles" });
    const podcast = makeResource({ id: "002", category: "Podcasts" });

    const categories = groupByCategory([article, podcast]).map(
      (group) => group.category,
    );

    expect(categories).toEqual(["Podcasts", "Articles"]);
  });
});

import { filterResources } from "./filterResources";
import { makeResource } from "../test/makeResource";

describe("filterResources", () => {
  it("returns every resource when the search is empty", () => {
    const resources = [
      makeResource({ id: "001", title: "Mindful Moments" }),
      makeResource({ id: "002", title: "The Science of Sleep" }),
    ];

    expect(filterResources(resources, "")).toEqual(resources);
  });
  it("returns resources whose title contains the search", () => {
    const mindful = makeResource({ id: "001", title: "Mindful Moments" });
    const sleep = makeResource({ id: "002", title: "The Science of Sleep" });

    expect(filterResources([mindful, sleep], "Sleep")).toEqual([sleep]);
  });
  it("ignores case when matching", () => {
    const mindful = makeResource({ id: "001", title: "Mindful Moments" });

    expect(filterResources([mindful], "MINDFUL")).toEqual([mindful]);
  });
  it("returns resources with a tag that contains the search", () => {
    const smoothie = makeResource({
      id: "001",
      title: "Energy Boost Smoothie",
      tags: ["nutrition", "energy"],
    });
    const stretch = makeResource({
      id: "002",
      title: "10-Minute Morning Stretch",
      tags: ["mobility"],
    });

    expect(filterResources([smoothie, stretch], "nutrition")).toEqual([
      smoothie,
    ]);
  });
  it("ignores spaces around the search", () => {
    const mindful = makeResource({ id: "001", title: "Mindful Moments" });

    expect(filterResources([mindful], "  mindful  ")).toEqual([mindful]);
  });
});

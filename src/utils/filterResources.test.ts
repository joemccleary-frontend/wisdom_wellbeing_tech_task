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
});

import { groupByCategory } from "../utils/groupByCategory";
import type { Resource } from "../types/resource";

type ResourceGroupsProps = {
  resources: Resource[];
};

export function ResourceGroups({ resources }: ResourceGroupsProps) {
  return (
    <>
      {groupByCategory(resources).map(({ category }) => {
        const headingId = `category-${category.toLowerCase()}`;

        return (
          <section key={category} aria-labelledby={headingId}>
            <h2 id={headingId}>{category}</h2>
          </section>
        );
      })}
    </>
  );
}

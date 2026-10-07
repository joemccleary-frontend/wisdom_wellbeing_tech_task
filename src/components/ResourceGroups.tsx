import { groupByCategory } from "../utils/groupByCategory";
import type { Resource } from "../types/resource";
import { ResourceCard } from "./ResourceCard";

type ResourceGroupsProps = {
  resources: Resource[];
};

export function ResourceGroups({ resources }: ResourceGroupsProps) {
  return (
    <>
      {groupByCategory(resources).map(({ category, resources }) => {
        const headingId = `category-${category.toLowerCase()}`;

        return (
          <section key={category} aria-labelledby={headingId}>
            <h2 id={headingId}>{category}</h2>
            <ul>
              {resources.map((resource) => (
                <li key={resource.id}>
                  <ResourceCard resource={resource} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}

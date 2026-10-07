import { groupByCategory } from "../utils/groupByCategory";
import type { Resource } from "../types/resource";
import { ResourceCard } from "./ResourceCard";

type ResourceGroupsProps = {
  resources: Resource[];
};

export function ResourceGroups({ resources }: ResourceGroupsProps) {
  return (
    <div className="space-y-10">
      {groupByCategory(resources).map(({ category, resources }) => {
        const headingId = `category-${category.toLowerCase()}`;

        return (
          <section key={category} aria-labelledby={headingId}>
            <h2
              id={headingId}
              className="mb-4 text-xl font-semibold text-slate-800"
            >
              {category}
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <li key={resource.id}>
                  <ResourceCard resource={resource} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

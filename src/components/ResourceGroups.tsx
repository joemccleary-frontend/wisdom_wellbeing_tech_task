import { groupByCategory } from "../utils/groupByCategory";
import type { Resource } from "../types/resource";
import { ResourceCard } from "./ResourceCard";

type ResourceGroupsProps = {
  resources: Resource[];
  onSelect: (resource: Resource) => void;
};

export function ResourceGroups({ resources, onSelect }: ResourceGroupsProps) {
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {groupByCategory(resources).map(({ category, resources }) => {
        const headingId = `category-${category.toLowerCase()}`;

        return (
          <section key={category} aria-labelledby={headingId}>
            <h2
              id={headingId}
              className="mb-5 border-l-4 border-teal-600 pl-3 text-xl font-semibold text-slate-900"
            >
              {category}
            </h2>
            <ul className="space-y-6">
              {resources.map((resource) => (
                <li key={resource.id}>
                  <ResourceCard resource={resource} onSelect={onSelect} />{" "}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

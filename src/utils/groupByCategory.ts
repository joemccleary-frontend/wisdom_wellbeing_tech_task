import type { Category, Resource } from "../types/resource";

export type ResourceGroup = {
  category: Category;
  resources: Resource[];
};

export function groupByCategory(resources: Resource[]): ResourceGroup[] {
  const groups = new Map<Category, Resource[]>();

  for (const resource of resources) {
    const group = groups.get(resource.category) ?? [];
    group.push(resource);
    groups.set(resource.category, group);
  }

  return Array.from(groups, ([category, resources]) => ({
    category,
    resources,
  }));
}

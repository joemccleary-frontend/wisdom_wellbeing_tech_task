import type { Category, Resource } from "../types/resource";

export type ResourceGroup = {
  category: Category;
  resources: Resource[];
};

export function groupByCategory(resources: Resource[]): ResourceGroup[] {
  if (resources.length === 0) {
    return [];
  }

  return [{ category: resources[0].category, resources }];
}

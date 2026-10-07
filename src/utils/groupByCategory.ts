import type { Category, Resource } from "../types/resource";

export type ResourceGroup = {
  category: Category;
  resources: Resource[];
};

export function groupByCategory(resources: Resource[]): ResourceGroup[] {
  return [];
}

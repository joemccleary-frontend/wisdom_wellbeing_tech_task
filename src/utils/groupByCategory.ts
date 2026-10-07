import { CATEGORIES } from "../types/resource";
import type { Category, Resource } from "../types/resource";

export type ResourceGroup = {
  category: Category;
  resources: Resource[];
};

export function groupByCategory(resources: Resource[]): ResourceGroup[] {
  return CATEGORIES.map((category) => ({
    category,
    resources: resources.filter((resource) => resource.category === category),
  })).filter((group) => group.resources.length > 0);
}

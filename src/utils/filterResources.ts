import type { Resource } from "../types/resource";

export function filterResources(
  resources: Resource[],
  search: string,
): Resource[] {
  return resources.filter((resource) => resource.title.includes(search));
}

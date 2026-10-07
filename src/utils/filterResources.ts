import type { Resource } from "../types/resource";

export function filterResources(
  resources: Resource[],
  search: string,
): Resource[] {
  const query = search.toLowerCase();

  return resources.filter((resource) =>
    resource.title.toLowerCase().includes(query),
  );
}

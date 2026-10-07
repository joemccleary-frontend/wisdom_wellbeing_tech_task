import type { Resource } from "../types/resource";

const containsQuery = (text: string, query: string) =>
  text.toLowerCase().includes(query);

export function filterResources(
  resources: Resource[],
  search: string,
): Resource[] {
  const query = search.trim().toLowerCase();

  return resources.filter(
    (resource) =>
      containsQuery(resource.title, query) ||
      resource.tags.some((tag) => containsQuery(tag, query)),
  );
}

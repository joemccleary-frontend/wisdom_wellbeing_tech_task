import type { Resource } from "../types/resource";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return <h3>{resource.title}</h3>;
}

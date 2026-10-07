import type { Resource } from "../types/resource";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article>
      <h3>{resource.title}</h3>
      <p>{resource.duration} min</p>
      <ul aria-label="Tags">
        {resource.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

import type { Resource } from "../types/resource";

type ResourceCardProps = {
  resource: Resource;
};

const MAX_TAGS = 3;

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article>
      <img src={resource.thumbnail} alt="" />
      <h3>{resource.title}</h3>
      <p>{resource.duration} min</p>
      <ul aria-label="Tags">
        {resource.tags.slice(0, MAX_TAGS).map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

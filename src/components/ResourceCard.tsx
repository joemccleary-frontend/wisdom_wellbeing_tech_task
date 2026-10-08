import type { Resource } from "../types/resource";

type ResourceCardProps = {
  resource: Resource;
  onSelect: (resource: Resource) => void;
};

const MAX_TAGS = 3;

export function ResourceCard({ resource, onSelect }: ResourceCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-teal-600">
      <img
        src={resource.thumbnail}
        alt=""
        className="aspect-video w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-lg font-semibold text-slate-900">
          <button
            type="button"
            onClick={() => onSelect(resource)}
            className="text-left after:absolute after:inset-0 focus:outline-none"
          >
            {resource.title}
          </button>
        </h3>
        <p className="text-sm text-slate-600">{resource.duration} min</p>
        <ul aria-label="Tags" className="mt-auto flex flex-wrap gap-2">
          {resource.tags.slice(0, MAX_TAGS).map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

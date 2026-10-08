import { useEffect, useRef } from "react";
import type { Resource } from "../types/resource";
import { formatDate } from "../utils/formatDate";

type ResourceDetailsProps = {
  resource: Resource;
  onClose: () => void;
};

export function ResourceDetails({ resource, onClose }: ResourceDetailsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `resource-details-${resource.id}`;

  useEffect(() => {
    const dialog = dialogRef.current;

    // React StrictMode runs effects twice in development, so only open
    // the dialog if it isn't already open.
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      className="m-auto w-full max-w-lg overflow-hidden rounded-2xl bg-white p-0 shadow-xl backdrop:bg-slate-900/60"
    >
      <img
        src={resource.thumbnail}
        alt=""
        className="aspect-video w-full object-cover"
      />
      <div className="flex flex-col gap-4 p-6">
        <div>
          <p className="text-sm font-medium text-teal-700">
            {resource.category}
          </p>
          <h2 id={titleId} className="text-2xl font-bold text-slate-900">
            {resource.title}
          </h2>
        </div>
        <p className="text-sm text-slate-600">
          <span>{resource.duration} min</span>
          <span aria-hidden="true"> · </span>
          <time dateTime={resource.date_uploaded}>
            Uploaded {formatDate(resource.date_uploaded)}
          </time>
        </p>
        <p className="text-slate-700">{resource.description}</p>
        <ul aria-label="Tags" className="flex flex-wrap gap-2">
          {resource.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800"
            >
              {tag}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="self-end rounded-lg bg-teal-700 px-4 py-2 font-medium text-white hover:bg-teal-800 focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Close
        </button>
      </div>
    </dialog>
  );
}

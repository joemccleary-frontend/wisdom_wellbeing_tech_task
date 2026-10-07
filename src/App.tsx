import { useState } from "react";
import { ResourceGroups } from "./components/ResourceGroups";
import { resources } from "./data/resource";
import { filterResources } from "./utils/filterResources";

function App() {
  const [search, setSearch] = useState("");
  const filteredResources = filterResources(resources, search);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold text-slate-900">
        Resource Centre
      </h1>
      <div className="mb-8">
        <label
          htmlFor="search"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Search by title or tag
        </label>
        <input
          id="search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full max-w-md rounded-lg border border-slate-300 px-4 py-2 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/30 focus:outline-none"
        />
      </div>
      {filteredResources.length > 0 ? (
        <ResourceGroups resources={filteredResources} />
      ) : (
        <p className="text-slate-600">No resources match your search.</p>
      )}{" "}
    </main>
  );
}

export default App;

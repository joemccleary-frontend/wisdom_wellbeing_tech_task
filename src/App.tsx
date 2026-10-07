import { ResourceGroups } from "./components/ResourceGroups";
import { resources } from "./data/resource";

function App() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-8 text-3xl font-bold text-slate-900">
        Resource Centre
      </h1>
      <ResourceGroups resources={resources} />
    </main>
  );
}

export default App;

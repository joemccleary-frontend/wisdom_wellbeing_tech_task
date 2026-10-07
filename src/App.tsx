import { ResourceGroups } from "./components/ResourceGroups";
import { resources } from "./data/resource";

function App() {
  return (
    <main>
      <h1>Resource Centre</h1>
      <ResourceGroups resources={resources} />
    </main>
  );
}

export default App;

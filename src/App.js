import Weather from "./Pages/Weather";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="app-style">
        <Weather />
      </div>
    </Suspense>
  );
}

export default App;

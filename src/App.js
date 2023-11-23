import WeatherApp from "./components/WeatherApp";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="loading">
      <div>
        <WeatherApp />
      </div>
    </Suspense>
  );
}

export default App;

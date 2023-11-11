import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "/WeatherApp/",
  plugins: [
    react(),
    federation({
      name: "weatherapp", // name of the fed group...
      filename: "remoteEntry.js", // default file name
      // Modules to expose
      exposes: {
        "./WeatherApp": "./src/components/WeatherApp.jsx",
      },
      shared: ["react", "react-dom"], // libs/deps to be shared
    }),
  ],
  build: {
    target: "esnext", // needed to final build
  },
});

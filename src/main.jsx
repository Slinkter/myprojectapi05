import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { ErrorBoundary } from "@/components/ui";
import ThemeToggle from "@/components/ThemeToggle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
        <ThemeToggle />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);

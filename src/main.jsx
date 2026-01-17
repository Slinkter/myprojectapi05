import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { UserSearchProvider } from "@/presentation/context/UserSearchContext";
import { ErrorBoundary } from "@/presentation/components/ui";
import ThemeToggle from "@/presentation/components/ThemeToggle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <UserSearchProvider>
          <App />
        </UserSearchProvider>
        <ThemeToggle />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

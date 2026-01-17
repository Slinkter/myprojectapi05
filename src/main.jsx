import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@/shared/context";
import { UserSearchProvider } from "@/features/user-search/context";
import { ErrorBoundary } from "@/shared/components/ui";
import { ThemeToggle } from "@/shared/components";

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

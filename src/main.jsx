import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@/shared/context";
import { UserSearchProvider } from "@/features/user-search/context";
import { ErrorBoundary } from "@/shared/components/ui";
import { ThemeToggle } from "@/shared/components";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <UserSearchProvider>
          <App />
        </UserSearchProvider>
        <ThemeToggle />
        <Toaster position="top-right" richColors closeButton />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

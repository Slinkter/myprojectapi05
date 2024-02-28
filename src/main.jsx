import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider>
        <GlobalState>
          <App />
        </GlobalState>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);

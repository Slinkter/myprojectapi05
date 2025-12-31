import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "./index.css";
import { ThemeProvider as CustomThemeProvider } from "@/context/ThemeContext.jsx";
import { ThemeProvider as MaterialTailwindProvider } from "@material-tailwind/react";
import ThemeToggle from "@/components/ThemeToggle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CustomThemeProvider>
            <MaterialTailwindProvider>
                <App />
                <ThemeToggle />
            </MaterialTailwindProvider>
        </CustomThemeProvider>
    </React.StrictMode>
);

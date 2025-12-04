import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <App />
        <ThemeToggle />
    </ThemeProvider>
);

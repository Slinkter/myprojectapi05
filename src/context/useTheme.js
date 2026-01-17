import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * Custom hook to access the theme context.
 * Provides the current theme and a function to toggle it.
 * Must be used within a ThemeProvider.
 * @returns {{theme: string, toggleTheme: function}} The current theme and the toggle function.
 * @throws {Error} If used outside of a ThemeProvider.
 */
export const useTheme = () => useContext(ThemeContext);

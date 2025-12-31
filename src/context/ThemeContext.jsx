import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useThemeLogic } from './useThemeLogic'; // Import the new hook

/**
 * Context for managing the application's theme (light/dark mode).
 * Provides the current theme and a function to toggle it.
 */
export const ThemeContext = createContext();

/**
 * Provides the theme context to its children.
 * It uses the `useThemeLogic` hook to manage theme state and logic.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render within the theme context.
 * @returns {JSX.Element} A React context provider.
 */
export const ThemeProvider = ({ children }) => {
    const { theme, toggleTheme } = useThemeLogic(); // Use the new hook

    const value = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
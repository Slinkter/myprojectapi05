import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to manage the application's theme logic.
 * Handles theme state (light/dark), persistence to localStorage,
 * and applying the theme class to the document's root element.
 * @returns {{theme: string, toggleTheme: function}} The current theme and the function to toggle it.
 */
export const useThemeLogic = () => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        // Si no hay nada en localStorage, usar la preferencia del sistema
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    return { theme, toggleTheme };
};
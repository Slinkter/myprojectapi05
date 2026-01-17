import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook que encapsula toda la lógica de gestión del tema (dark/light mode).
 *
 * **Funcionalidad:**
 * - Inicializa el tema desde localStorage o detecta la preferencia del sistema operativo
 * - Persiste el tema seleccionado en localStorage para mantenerlo entre sesiones
 * - Aplica/remueve la clase 'dark' en el elemento raíz del documento (<html>)
 * - Proporciona una función memoizada para alternar entre temas
 *
 * **Flujo de inicialización:**
 * 1. Verifica si existe un tema guardado en localStorage
 * 2. Si no existe, detecta la preferencia del sistema con `prefers-color-scheme`
 * 3. Retorna 'dark' o 'light' según corresponda
 *
 * **Efectos secundarios:**
 * - Modifica el DOM agregando/removiendo la clase 'dark' en <html>
 * - Escribe en localStorage cada vez que el tema cambia
 *
 * @returns {{theme: string, toggleTheme: function}} Objeto con el tema actual ('light' | 'dark')
 *          y la función para alternarlo
 *
 * @example
 * const { theme, toggleTheme } = useThemeLogic();
 * console.log(theme); // 'light' o 'dark'
 * toggleTheme(); // Cambia al tema opuesto
 */
export const useThemeLogic = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    // Si no hay nada en localStorage, usar la preferencia del sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
};

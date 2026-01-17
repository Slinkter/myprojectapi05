import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * Hook personalizado para acceder al contexto del tema.
 *
 * **Funcionalidad:**
 * - Permite a cualquier componente hijo acceder al estado del tema ('light' | 'dark')
 * - Proporciona la función para alternar entre temas
 * - Valida que el componente esté dentro del árbol del ThemeProvider
 *
 * **Flujo de inicialización:**
 * 1. Consume el contexto creado por ThemeContext
 * 2. Verifica si el contexto es undefined (fuera del provider)
 * 3. Retorna el objeto { theme, toggleTheme }
 *
 * **Efectos secundarios:**
 * - Lanza un error explícito si se invoca fuera de un ThemeProvider para facilitar el debugging
 *
 * @returns {{theme: string, toggleTheme: function}} Objeto con el tema actual y la función para cambiarlo
 * @throws {Error} Si se usa fuera de un ThemeProvider
 */
export const useTheme = () => useContext(ThemeContext);

import { useTheme } from "@/shared/context/useTheme";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * Componente de botón flotante para alternar temas.
 *
 * **Funcionalidad:**
 * - Permite al usuario cambiar entre modos claro y oscuro (toggle)
 * - Proporciona feedback visual instantáneo con animaciones suaves
 * - Persiste la posición fija en la interfaz (Floating Action Button)
 *
 * **Flujo de interacción:**
 * 1. Lee el estado actual (`theme`) del contexto
 * 2. Renderiza el icono opuesto al tema actual (Sol si es Dark, Luna si es Light)
 * 3. Al hacer click, invoca `toggleTheme` para actualizar el contexto global
 *
 * @returns {JSX.Element} El botón de cambio de tema
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl z-50
                       bg-white dark:bg-gray-800
                       border-2 border-gray-200 dark:border-gray-700
                       text-gray-800 dark:text-yellow-400
                       hover:scale-110 active:scale-95
                       transition-all duration-300 ease-out
                       group"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="w-6 h-6 transition-transform group-hover:rotate-12" />
      ) : (
        <FiSun className="w-6 h-6 transition-transform group-hover:rotate-90" />
      )}
    </button>
  );
};

export default ThemeToggle;

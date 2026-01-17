import { useTheme } from "@/context/useTheme";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * A floating action button component that allows users to toggle between light and dark themes.
 * Features a minimalist design with smooth transitions and hover effects.
 * @returns {JSX.Element} The ThemeToggle button component.
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

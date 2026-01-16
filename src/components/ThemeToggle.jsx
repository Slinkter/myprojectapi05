import { useTheme } from "@/context/useTheme";
import { Button } from "@material-tailwind/react";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * A floating action button component that allows users to toggle between light and dark themes.
 * It displays a moon icon for light theme and a sun icon for dark theme.
 * @returns {JSX.Element} The ThemeToggle button component.
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      ripple={false}
      className="fixed bottom-5 right-5 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50
                       bg-gray-800 text-white 
                       dark:bg-yellow-400 dark:text-gray-900
                       hover:bg-gray-700 dark:hover:bg-yellow-500
                       transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="w-8 h-8" />
      ) : (
        <FiSun className="w-8 h-8" />
      )}
    </Button>
  );
};

export default ThemeToggle;

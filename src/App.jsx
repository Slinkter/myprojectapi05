import { Typography } from "@material-tailwind/react";
import UserSearchPage from "@/pages/UserSearchPage";

/**
 * Main application component.
 * It sets up the global layout, header, and renders the main feature page.
 * @returns {JSX.Element} The root application component.
 */
const App = () => {
  return (
    <div className="min-h-dvh w-full bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 antialiased">
      <header className="text-center mb-12">
        <Typography
          as="h1"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
        >
          GitHub Explorer
        </Typography>
        <Typography
          variant="paragraph"
          className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400"
        >
          Encuentra perfiles de desarrolladores de todo el mundo.
        </Typography>
      </header>

      <UserSearchPage />
    </div>
  );
};

export default App;
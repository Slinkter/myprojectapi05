import UserSearchPage from "@/presentation/pages/UserSearchPage";

/**
 * Main application component.
 * Minimalist design with clean aesthetics.
 */
const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 antialiased transition-colors duration-300">
      <header className="text-center mb-12 max-w-2xl">
        <h1 className="font-macondo text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          GitHub Explorer
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Descubre perfiles de desarrolladores
        </p>
      </header>

      <UserSearchPage />
    </div>
  );
};

export default App;

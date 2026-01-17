import UserSearchPage from "@/features/user-search/pages/UserSearchPage";

/**
 * Main application component.
 * Minimalist design with clean aesthetics.
 */
const App = () => {
  return (
    <div className="min-h-dvh w-full bg-gray-200 dark:bg-gray-900 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 antialiased transition-colors duration-300">
      <UserSearchPage />
    </div>
  );
};

export default App;

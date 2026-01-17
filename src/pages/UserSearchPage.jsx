import { useEffect } from "react";
import { Spinner, ErrorBoundary } from "@/components/ui";
import { useGithubUser } from "@/features/user-search/hooks/useGithubUser";
import SearchBar from "@/features/user-search/components/SearchBar";
import UserCard from "@/features/user-search/components/UserCard";
import ErrorDisplay from "@/features/user-search/components/ErrorDisplay";

/**
 * Renders the user search page, including the search bar, user card, and error display.
 * This component orchestrates the user search feature by using the `useGithubUser` hook.
 * Features smooth transitions and animations for better UX.
 * @returns {JSX.Element} The user search page component.
 */
const UserSearchPage = () => {
  const { user, isLoading, error, searchUser } = useGithubUser();

  // Cargar un usuario por defecto al iniciar la aplicación
  useEffect(() => {
    searchUser("slinkter");
  }, [searchUser]);

  return (
    <main className="w-full max-w-3xl animate-fade-in">
      {/* Search Bar */}
      <div className="mb-12 flex justify-center">
        <SearchBar
          onSearch={searchUser}
          isLoading={isLoading}
          hasError={!!error}
        />
      </div>

      {/* Content Area */}
      <div className="min-h-[500px] flex justify-center items-start">
        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center pt-20 animate-fade-in">
            <Spinner size="lg" color="blue" />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 animate-pulse">
              Buscando usuario...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="w-full animate-fade-in flex justify-center">
            <ErrorDisplay error={error} />
          </div>
        )}

        {/* Success State */}
        {!isLoading && !error && user && (
          <div className="w-full animate-fade-in flex justify-center">
            <ErrorBoundary>
              <UserCard user={user} />
            </ErrorBoundary>
          </div>
        )}
      </div>
    </main>
  );
};

export default UserSearchPage;

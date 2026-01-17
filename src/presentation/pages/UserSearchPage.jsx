import { useEffect } from "react";
import { ErrorBoundary } from "@/presentation/components/ui";
import LoadingSpinner from "@/presentation/components/ui/LoadingSpinner";
import { useUserSearch } from "@/presentation/context/UserSearchContext";
import SearchBar from "@/presentation/components/user-search/SearchBar";
import UserCard from "@/presentation/components/user-search/UserCard";
import ErrorDisplay from "@/presentation/components/user-search/ErrorDisplay";

/**
 * Renders the user search page, including the search bar, user card, and error display.
 * This component consumes the user search context to display the current state of the search.
 * @returns {JSX.Element} The user search page component.
 */
const UserSearchPage = () => {
  const { user, isLoading, error, searchUser } = useUserSearch();

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
            <LoadingSpinner size="w-16 h-16" color="text-blue-500" />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 animate-pulse">
              Buscando en la galaxia de GitHub...
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

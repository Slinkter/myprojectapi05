import { useEffect } from "react";
import { ErrorBoundary, LoadingSpinner } from "@/shared/components/ui";
import { useUserSearch } from "@/features/user-search/context";
import { SearchBar, UserCard, ErrorDisplay } from "@/features/user-search/components";
import { FiGithub } from "react-icons/fi";

/**
 * @file Página principal de búsqueda de usuarios.
 * @description Orquesta los componentes de la feature de búsqueda y muestra los diferentes estados (carga, error, éxito, inicial).
 * @returns {JSX.Element} La página de búsqueda de usuarios.
 */
const UserSearchPage = () => {
  const { user, isLoading, error, searchUser } = useUserSearch();

  const hasInitialState = !user && !isLoading && !error;

  useEffect(() => {
    // No longer loading a default user to show the initial state
    // searchUser("slinkter");
  }, []);

  return (
    <main className="w-full max-w-5xl grid grid-rows-[auto,1fr] gap-8 animate-fade-in">
      <div className="flex justify-center">
        <SearchBar
          onSearch={searchUser}
          isLoading={isLoading}
          hasError={!!error}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading && (
          <div className="col-span-full flex flex-col items-center justify-center pt-20 animate-fade-in">
            <LoadingSpinner size="w-16 h-16" color="text-blue-500" />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 animate-pulse">
              Buscando en la galaxia de GitHub...
            </p>
          </div>
        )}

        {error && (
          <div className="col-span-full flex justify-center">
            <ErrorDisplay error={error} />
          </div>
        )}
        
        {hasInitialState && (
          <div className="col-span-full flex flex-col items-center justify-center text-center">
            <FiGithub className="w-24 h-24 text-gray-300 dark:text-gray-700 mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
              Bienvenido a GitHub Explorer
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Usa la barra de búsqueda para encontrar perfiles de desarrolladores.
            </p>
          </div>
        )}

        {user && (
          <div className="md:col-start-2 lg:col-start-2 flex justify-center">
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

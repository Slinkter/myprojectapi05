import { useEffect } from "react";
import { Spinner } from "@material-tailwind/react";
import { useGithubUser } from "@/features/user-search/hooks/useGithubUser";
import SearchBar from "@/features/user-search/components/SearchBar";
import UserCard from "@/features/user-search/components/UserCard";
import ErrorDisplay from "@/features/user-search/components/ErrorDisplay";

/**
 * Renders the user search page, including the search bar, user card, and error display.
 * This component orchestrates the user search feature by using the `useGithubUser` hook.
 * @returns {JSX.Element} The user search page component.
 */
const UserSearchPage = () => {
  const { user, isLoading, error, searchUser } = useGithubUser();

  // Cargar un usuario por defecto al iniciar la aplicación
  useEffect(() => {
    searchUser("slinkter");
  }, [searchUser]); // searchUser es estable gracias a useCallback, no necesita ser dependencia

  return (
    <main className="w-full max-w-md">
      <SearchBar
        onSearch={searchUser}
        isLoading={isLoading}
        hasError={!!error}
      />

      <div className="mt-10 min-h-[420px] flex justify-center items-start">
        {isLoading && (
          <div className="flex justify-center pt-10">
            <Spinner color="blue" className="h-12 w-12" />
          </div>
        )}

        {error && <ErrorDisplay error={error} />}

        {!isLoading && !error && user && <UserCard user={user} />}
      </div>
    </main>
  );
};

export default UserSearchPage;

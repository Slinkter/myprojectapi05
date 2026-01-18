import { useEffect } from "react";
import { useUserSearch } from "@/features/user-search/context";
import { SearchBar, UserSearchResult } from "@/features/user-search/components";

/**
 * Página principal de búsqueda de usuarios.
 *
 * **Funcionalidad:**
 * - Orquesta la feature de búsqueda, consumiendo `useUserSearch` para el estado.
 * - Delega la renderización de los resultados al componente `UserSearchResult`.
 *
 * **Efectos secundarios:**
 * - Dispara una búsqueda inicial para el usuario "slinkter" al montar.
 *
 * @component
 * @returns {JSX.Element} La página completa de búsqueda de usuarios.
 */
const UserSearchPage = () => {
    const { user, isLoading, error, searchUser } = useUserSearch();

    useEffect(() => {
        searchUser("slinkter");
    }, [searchUser]);

    return (
        <main className="w-full max-w-5xl grid grid-rows-[auto,1fr] gap-4 animate-fade-in">
            <div className="flex justify-center">
                <SearchBar
                    onSearch={searchUser}
                    isLoading={isLoading}
                    hasError={!!error}
                />
            </div>

            <div className="flex justify-center">
                <UserSearchResult
                    isLoading={isLoading}
                    error={error}
                    user={user}
                />
            </div>
        </main>
    );
};

export default UserSearchPage;

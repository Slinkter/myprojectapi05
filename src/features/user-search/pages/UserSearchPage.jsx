import { useEffect, Suspense, lazy } from "react";
import { useUserSearch } from "@/features/user-search/context";
import { ErrorBoundary } from "@/shared/components/ui";
import {
    SearchBar,
    ErrorDisplay,
} from "@/features/user-search/components";
import { FiGithub } from "react-icons/fi";
import UserCardSkeleton from "@/features/user-search/components/UserCardSkeleton";

const UserCard = lazy(() =>
    import("@/features/user-search/components/UserCard")
);

/**
 * Página principal de búsqueda de usuarios.
 *
 * **Funcionalidad:**
 * - Orquesta la feature de búsqueda, consumiendo `useUserSearch` para el estado.
 * - Renderiza condicionalmente la UI: estado inicial, esqueleto de carga, error o la tarjeta de usuario.
 * - Utiliza `React.lazy` para cargar `UserCard` de forma perezosa, mejorando el rendimiento inicial.
 *
 * **Flujo de renderizado:**
 * 1. Obtiene `user`, `isLoading`, `error` del hook.
 * 2. Muestra `UserCardSkeleton` durante el estado `isLoading`.
 * 3. Muestra `ErrorDisplay` si hay un error.
 * 4. Muestra un estado inicial si no hay interacción.
 * 5. Renderiza `UserCard` dentro de `Suspense` cuando hay datos de usuario.
 *
 * **Efectos secundarios:**
 * - Dispara una búsqueda inicial para el usuario "slinkter" al montar.
 *
 * @component
 * @returns {JSX.Element} La página completa de búsqueda de usuarios.
 */
const UserSearchPage = () => {
    const { user, isLoading, error, searchUser } = useUserSearch();

    const hasInitialState = !user && !isLoading && !error;

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
                {isLoading && (
                    <div className="w-full max-w-md flex justify-center">
                        <UserCardSkeleton />
                    </div>
                )}

                {error && (
                    <div className="w-full max-w-md flex justify-center">
                        <ErrorDisplay error={error} />
                    </div>
                )}

                {hasInitialState && (
                    <div className="w-full max-w-md flex flex-col items-center justify-center text-center">
                        <FiGithub className="w-24 h-24 text-gray-300 dark:text-gray-700 mb-4" />
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                            Bienvenido a GitHub Explorer
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            Usa la barra de búsqueda para encontrar perfiles de
                            desarrolladores.
                        </p>
                    </div>
                )}

                {user && (
                    <div className="w-full max-w-md flex justify-center">
                        <ErrorBoundary>
                            <Suspense fallback={<UserCardSkeleton />}>
                                <UserCard user={user} />
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                )}
            </div>
        </main>
    );
};

export default UserSearchPage;

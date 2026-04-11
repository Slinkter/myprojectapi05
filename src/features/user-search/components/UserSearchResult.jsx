import { Suspense, lazy, memo } from "react";
import { ErrorBoundary } from "@/shared/components/ui";
import { FiGithub } from "react-icons/fi";
import UserCardSkeleton from "@/features/user-search/components/UserCardSkeleton";
import { ErrorDisplay } from "@/features/user-search/components";
import PropTypes from "prop-types";

const UserCard = lazy(
    () => import("@/features/user-search/components/UserCard")
);

/**
 * Componente para renderizar el resultado de la búsqueda de usuarios.
 *
 * **OPTIMIZACIONES:**
 * - Envuelto en `React.memo` para evitar re-renders si las props no cambian.
 * - Utiliza `Suspense` y `lazy` para optimizar el bundle size.
 *
 * @param {object} props
 * @param {boolean} props.isLoading - Estado de carga.
 * @param {object|null} props.error - Objeto de error.
 * @param {object|null} props.user - Datos del usuario.
 * @returns {JSX.Element|null} El componente de resultado de búsqueda.
 */
const UserSearchResult = memo(({ isLoading, error, user }) => {
    const hasInitialState = !user && !isLoading && !error;

    if (isLoading) {
        return (
            <div className="w-full max-w-md flex justify-center animate-fade-in">
                <UserCardSkeleton />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full max-w-md flex justify-center animate-shake">
                <ErrorDisplay error={error} />
            </div>
        );
    }

    if (hasInitialState) {
        return (
            <div className="w-full max-w-md flex flex-col items-center justify-center text-center animate-fade-in">
                <FiGithub className="w-24 h-24 text-gray-300 dark:text-gray-700 mb-4" />
                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                    Bienvenido a GitHub Explorer
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Usa la barra de búsqueda para encontrar perfiles de
                    desarrolladores.
                </p>
            </div>
        );
    }

    if (user) {
        return (
            <div className="w-full max-w-md flex justify-center animate-fade-in-up">
                <ErrorBoundary>
                    <Suspense fallback={<UserCardSkeleton />}>
                        <UserCard user={user} />
                    </Suspense>
                </ErrorBoundary>
            </div>
        );
    }

    return null;
});

UserSearchResult.displayName = "UserSearchResult";

UserSearchResult.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    user: PropTypes.object,
};

export default UserSearchResult;

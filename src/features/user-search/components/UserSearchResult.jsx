import { Suspense, lazy } from "react";
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
 * **Funcionalidad:**
 * - Gestiona la lógica de renderizado condicional para la sección de resultados.
 * - Muestra diferentes estados de la UI: carga, error, estado inicial o la tarjeta de usuario.
 *
 * @param {object} props
 * @param {boolean} props.isLoading - Estado de carga.
 * @param {object|null} props.error - Objeto de error.
 * @param {object|null} props.user - Datos del usuario.
 * @returns {JSX.Element|null} El componente de resultado de búsqueda.
 */
const UserSearchResult = ({ isLoading, error, user }) => {
    const hasInitialState = !user && !isLoading && !error;

    if (isLoading) {
        return (
            <div className="w-full max-w-md flex justify-center">
                <UserCardSkeleton />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full max-w-md flex justify-center">
                <ErrorDisplay error={error} />
            </div>
        );
    }

    if (hasInitialState) {
        return (
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
        );
    }

    if (user) {
        return (
            <div className="w-full max-w-md flex justify-center">
                <ErrorBoundary>
                    <Suspense fallback={<UserCardSkeleton />}>
                        <UserCard user={user} />
                    </Suspense>
                </ErrorBoundary>
            </div>
        );
    }

    return null;
};

UserSearchResult.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    user: PropTypes.object,
};

export default UserSearchResult;

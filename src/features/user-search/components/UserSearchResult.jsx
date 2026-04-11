import { Suspense, lazy, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
 */
const UserSearchResult = memo(({ isLoading, error, user }) => {
    const hasInitialState = !user && !isLoading && !error;

    return (
        <div className="w-full max-w-md flex justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full"
                    >
                        <UserCardSkeleton />
                    </motion.div>
                )}

                {error && (
                    <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="w-full"
                    >
                        <ErrorDisplay error={error} />
                    </motion.div>
                )}

                {hasInitialState && (
                    <motion.div
                        key="initial"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex flex-col items-center justify-center text-center py-10"
                    >
                        <FiGithub className="w-24 h-24 text-gray-300 dark:text-gray-700 mb-4" />
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                            Bienvenido a GitHub Explorer
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            Usa la barra de búsqueda para encontrar perfiles de
                            desarrolladores.
                        </p>
                    </motion.div>
                )}

                {user && !isLoading && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full"
                    >
                        <ErrorBoundary>
                            <Suspense fallback={<UserCardSkeleton />}>
                                <UserCard user={user} />
                            </Suspense>
                        </ErrorBoundary>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});

UserSearchResult.displayName = "UserSearchResult";

UserSearchResult.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    user: PropTypes.object,
};

export default UserSearchResult;

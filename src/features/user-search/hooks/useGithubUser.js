import { useState, useCallback } from "react";
import { searchUserUseCase } from "@/features/user-search/application/searchUser";
import { toast } from "sonner";

/**
 * Hook personalizado para la búsqueda y gestión de usuarios de GitHub.
 */
export const useGithubUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const searchUser = useCallback(async (username) => {
        setIsLoading(true);
        setError(null);
        setUser(null);

        try {
            const userData = await searchUserUseCase(username);
            setUser(userData);
        } catch (e) {
            setError(e.message);
            toast.error(e.message, {
              description: "Ocurrió un problema durante la búsqueda.",
            });
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { user, isLoading, error, searchUser };
};

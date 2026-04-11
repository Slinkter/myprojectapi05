import { useState, useCallback } from "react";
import { searchUserUseCase } from "@/features/user-search/application/searchUser";
import { toast } from "sonner";

/**
 * Hook personalizado para la búsqueda y gestión de usuarios de GitHub.
 *
 * **Funcionalidad:**
 * - Orquesta la llamada al caso de uso de búsqueda.
 * - Gestiona estados de carga, error y datos del usuario.
 * - Notifica errores en tiempo real mediante **Sonner Toasts**.
 *
 * @returns {{
 *   user: import("@/shared/domain/github-user/models").GithubUser | null,
 *   isLoading: boolean,
 *   error: string | null,
 *   searchUser: (username: string) => Promise<void>
 * }} Estado y función de búsqueda memoizada.
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

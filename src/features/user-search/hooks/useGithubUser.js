import { useState, useCallback } from "react";
import { fetchUser } from "../../../services/github";

/**
 * Hook personalizado para buscar usuarios de GitHub.
 * Gestiona el estado de la carga, los errores y los datos del usuario.
 * @returns {{
 *  user: object | null,
 *  isLoading: boolean,
 *  error: string | null,
 *  searchUser: (username: string) => Promise<void>
 * }}
 */
export const useGithubUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchUser = useCallback(async (username) => {
        setIsLoading(true);
        setError(null);
        setUser(null); // Limpiar usuario anterior en nueva búsqueda

        try {
            const userData = await fetchUser(username);
            setUser(userData);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { user, isLoading, error, searchUser };
};

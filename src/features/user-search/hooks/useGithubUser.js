import { useState, useCallback } from "react";
import { searchUserUseCase } from "@/features/user-search/application/searchUser";

/**
 * Hook personalizado para la búsqueda y gestión de usuarios de GitHub.
 *
 * **Funcionalidad:**
 * - Orquesta la llamada al caso de uso `searchUserUseCase`
 * - Gestiona los estados de la interfaz: carga (isLoading), error (error) y datos (user)
 * - Proporciona una interfaz limpia para que los componentes disparen la búsqueda
 *
 * **Flujo de inicialización:**
 * 1. Inicializa isLoading en false, error en null, user en null
 * 2. Memoiza la función searchUser para evitar recreaciones innecesarias
 *
 * **Efectos secundarios:**
 * - Realiza peticiones asíncronas a la API de GitHub (vía caso de uso)
 * - Actualiza múltiples estados de React en respuesta al resultado de la promesa
 *
 * @returns {{
 *   user: object | null,
 *   isLoading: boolean,
 *   error: string | null,
 *   searchUser: (username: string) => Promise<void>
 * }} Estado y función para la búsqueda
 *
 * @example
 * const { user, isLoading, error, searchUser } = useGithubUser();
 *
 *  En un manejador de eventos:
 * await searchUser('octocat');
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
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { user, isLoading, error, searchUser };
};

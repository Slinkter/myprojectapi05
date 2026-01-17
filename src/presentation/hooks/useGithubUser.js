import { useState, useCallback } from "react";
import { fetchUser } from "@/infrastructure/services/github";
import { isValidGithubUsername } from "@/domain/github-user/rules"; // New import

/**
 * Custom hook para buscar y gestionar usuarios de GitHub.
 *
 * **Funcionalidad:**
 * - Gestiona tres estados principales: usuario, carga y error
 * - Valida el username antes de hacer la petición a la API
 * - Realiza la búsqueda de forma asíncrona y maneja los resultados
 * - Limpia estados anteriores en cada nueva búsqueda
 *
 * **Flujo de búsqueda:**
 * 1. Activa el estado de carga (isLoading = true)
 * 2. Limpia error y usuario anteriores
 * 3. Valida el username con reglas de dominio
 * 4. Si es válido, llama a la API de GitHub
 * 5. Actualiza el estado con el resultado o error
 * 6. Desactiva el estado de carga
 *
 * **Manejo de errores:**
 * - Username inválido: "Invalid GitHub username."
 * - Usuario no encontrado: "Usuario no encontrado."
 * - Rate limit excedido: "Límite de tasa de la API excedido..."
 * - Error de red: Mensaje del error capturado
 *
 * @returns {{
 *   user: object | null,      // Datos del usuario de GitHub o null
 *   isLoading: boolean,        // true durante la búsqueda
 *   error: string | null,      // Mensaje de error o null
 *   searchUser: (username: string) => Promise<void>  // Función para buscar usuario
 * }} Estado y función de búsqueda
 *
 * @example
 * const { user, isLoading, error, searchUser } = useGithubUser();
 *
 * // Buscar usuario
 * await searchUser('octocat');
 *
 * // Verificar estados
 * if (isLoading) return <Spinner />;
 * if (error) return <Error message={error} />;
 * if (user) return <UserCard user={user} />;
 */
export const useGithubUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUser = useCallback(async (username) => {
    setIsLoading(true);
    setError(null);
    setUser(null); // Limpiar usuario anterior en nueva búsqueda

    if (!isValidGithubUsername(username)) {
      // New validation logic
      setError("Invalid GitHub username.");
      setIsLoading(false);
      setUser(null);
      return;
    }

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

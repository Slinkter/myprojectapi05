import { isValidGithubUsername } from "@/shared/domain/github-user/rules";
import { fetchUser } from "@/features/user-search/services/github";

/**
 * Caso de uso para la búsqueda de un usuario de GitHub.
 *
 * **Funcionalidad:**
 * - Centraliza la lógica de negocio para obtener un usuario
 * - Aplica reglas de dominio (validación de formato de username) antes de llamar al servicio
 *
 * **Flujo de ejecución:**
 * 1. Valida el username con `isValidGithubUsername`
 * 2. Lanza error si es inválido
 * 3. Llama a `fetchUser` y retorna el resultado
 *
 * @param {string} username - El nombre de usuario a buscar
 * @returns {Promise<object>} Los datos del usuario obtenidos de la API
 * @throws {Error} Si el username es inválido o el usuario no existe
 */
export const searchUserUseCase = async (username) => {
    if (!isValidGithubUsername(username)) {
        throw new Error("Invalid GitHub username.");
    }

    return await fetchUser(username);
};

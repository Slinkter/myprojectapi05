import { GithubUsernameSchema } from "./models";

/**
 * Valida si un string cumple con las reglas de nombres de usuario de GitHub.
 * Utiliza el esquema de Zod definido en el dominio para una validación centralizada.
 *
 * @param {string} username - Nombre de usuario a validar
 * @returns {boolean} true si el username es válido, false en caso contrario
 *
 * @example
 * isValidGithubUsername('octocat')        // true
 * isValidGithubUsername('-invalid')       // false
 */
export const isValidGithubUsername = (username) => {
    const result = GithubUsernameSchema.safeParse(username);
    return result.success;
};

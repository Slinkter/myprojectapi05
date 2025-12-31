/**
 * @file Contiene la lógica para interactuar con la API de GitHub.
 */

const API_BASE_URL = "https://api.github.com";

/**
 * Busca un usuario de GitHub por su nombre de usuario.
 * @param {string} username - El nombre de usuario a buscar.
 * @returns {Promise<Object>} - Una promesa que resuelve a los datos del usuario.
 * @throws {Error} - Lanza un error si la respuesta de la API no es exitosa o si se excede el límite de tasa.
 */
/**
 * Fetches a GitHub user's profile data from the GitHub API.
 * @param {string} username - The GitHub username to fetch.
 * @returns {Promise<object>} A promise that resolves to the user's profile data.
 * @throws {Error} If the user is not found (404) or another API error occurs.
 */
export const fetchUser = async (username) => {
    if (!username) {
        throw new Error("El nombre de usuario no puede estar vacío.");
    }

    const url = `${API_BASE_URL}/users/${username}`;
    const response = await fetch(url);

    if (response.status === 404) {
        throw new Error("Usuario no encontrado.");
    }

    if (response.status === 403) {
        throw new Error("Límite de tasa de la API excedido. Inténtalo más tarde.");
    }

    if (!response.ok) {
        throw new Error(`Error en la API de GitHub: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};

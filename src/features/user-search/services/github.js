/**
 * @file Servicio para interactuar con la API pública de GitHub.
 * Proporciona funciones para obtener información de usuarios.
 */

const API_BASE_URL = "https://api.github.com";

/**
 * Obtiene los datos del perfil de un usuario de GitHub.
 *
 * **Funcionalidad:**
 * - Realiza una petición GET a la API pública de GitHub
 * - Valida que el username no esté vacío
 * - Maneja diferentes códigos de estado HTTP
 * - Parsea y retorna los datos del usuario en formato JSON
 *
 * **Códigos de estado manejados:**
 * - 200: Éxito - Retorna datos del usuario
 * - 404: Usuario no encontrado
 * - 403: Límite de rate limit excedido (60 req/hora sin auth)
 * - Otros: Error genérico de la API
 *
 * **Rate Limiting:**
 * - Sin autenticación: 60 requests por hora
 * - Con token: 5000 requests por hora
 *
 * @param {string} username - Nombre de usuario de GitHub (ej: 'octocat')
 * @returns {Promise<object>} Promesa que resuelve con los datos del perfil del usuario
 * @throws {Error} Si el username está vacío
 * @throws {Error} Si el usuario no existe (404)
 * @throws {Error} Si se excede el rate limit (403)
 * @throws {Error} Si ocurre cualquier otro error de la API
 *
 * @example
 * try {
 *   const user = await fetchUser('octocat');
 *   console.log(user.name); // "The Octocat"
 * } catch (error) {
 *   console.error(error.message); // "Usuario no encontrado."
 * }
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

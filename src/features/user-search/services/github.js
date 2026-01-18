/**
 * @file Servicio para interactuar con la API pública de GitHub.
 * Proporciona funciones para obtener información de usuarios.
 */

const API_BASE_URL = "https://api.github.com";

/**
 * Obtiene los datos del perfil de un usuario de GitHub.
 *
 * **Funcionalidad:**
 * - Realiza una petición HTTP GET a la API pública de GitHub
 * - Valida la entrada (username) antes de la petición
 * - Normaliza las respuestas de error (404, 403, etc.) en excepciones controladas
 *
 * **Flujo de ejecución:**
 * 1. Verifica si el username es válido
 * 2. Construye la URL del endpoint
 * 3. Ejecuta fetch() y espera la respuesta
 * 4. Evalúa el status code para lanzar errores específicos o parsear el JSON
 *
 * **Efectos secundarios:**
 * - Realiza una solicitud de red externa (Network Request)
 *
 * **Códigos de estado manejados:**
 * - 200: Éxito - Retorna datos del usuario
 * - 403: Límite de rate limit excedido (60 req/hora sin auth)
 * - 404: Usuario no encontrado
 * - Otros: Error genérico de la API
 *
 * **Rate Limiting:**
 * - Sin autenticación: 60 requests por hora
 * - Con token: 5000 requests por hora
 *
 * @param {string} username - Nombre de usuario de GitHub (ej: 'octocat')
 * @returns {Promise<object>} Promesa que resuelve con los datos del perfil del usuario
 * @throws {Error} Si el username está vacío, el usuario no existe (404) o hay error de red
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
        throw new Error(
            "Límite de tasa de la API excedido. Inténtalo más tarde."
        );
    }

    if (!response.ok) {
        throw new Error(`Error en la API de GitHub: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};

/**
 * @file Define el modelo de datos para un usuario de GitHub.
 * Este archivo contiene la definición TypeDef que documenta la estructura
 * completa de un objeto de usuario retornado por la API de GitHub.
 */

/**
 * Representa un usuario de GitHub con todos sus datos de perfil.
 *
 * **Propósito:**
 * - Documentar la estructura de datos retornada por la API de GitHub
 * - Proporcionar autocompletado en IDEs compatibles con JSDoc
 * - Servir como contrato de datos para componentes que consumen usuarios
 *
 * **Fuente de datos:**
 * - API Endpoint: GET https://api.github.com/users/{username}
 * - Documentación: https://docs.github.com/en/rest/users/users
 *
 * **Propiedades principales:**
 * - Identificación: login, id, node_id
 * - Perfil público: name, bio, avatar_url, location, blog
 * - Estadísticas: public_repos, followers, following
 * - URLs: html_url (perfil), repos_url, followers_url, etc.
 * - Metadatos: created_at, updated_at, type
 *
 * @typedef {object} GithubUser
 * @property {string} login - Nombre de usuario único en GitHub
 * @property {number} id - ID numérico único del usuario
 * @property {string} node_id - ID global de GraphQL
 * @property {string} avatar_url - URL de la imagen de perfil
 * @property {string} gravatar_id - ID de Gravatar (generalmente vacío)
 * @property {string} url - URL de la API REST para este usuario
 * @property {string} html_url - URL del perfil público en GitHub.com
 * @property {string} followers_url - URL de la API para obtener seguidores
 * @property {string} following_url - URL de la API para obtener seguidos
 * @property {string} gists_url - URL de la API para obtener gists
 * @property {string} starred_url - URL de la API para obtener repos starred
 * @property {string} subscriptions_url - URL de la API para obtener suscripciones
 * @property {string} organizations_url - URL de la API para obtener organizaciones
 * @property {string} repos_url - URL de la API para obtener repositorios
 * @property {string} events_url - URL de la API para obtener eventos
 * @property {string} received_events_url - URL de la API para eventos recibidos
 * @property {string} type - Tipo de cuenta ('User' o 'Organization')
 * @property {boolean} site_admin - true si es administrador de GitHub
 * @property {string | null} name - Nombre completo del usuario (puede ser null)
 * @property {string | null} company - Empresa donde trabaja (puede ser null)
 * @property {string | null} blog - URL del blog o sitio web (puede ser null)
 * @property {string | null} location - Ubicación geográfica (puede ser null)
 * @property {string | null} email - Email público (puede ser null)
 * @property {boolean | null} hireable - Disponible para contratación (puede ser null)
 * @property {string | null} bio - Biografía del usuario (puede ser null)
 * @property {string | null} twitter_username - Usuario de Twitter (puede ser null)
 * @property {number} public_repos - Cantidad de repositorios públicos
 * @property {number} public_gists - Cantidad de gists públicos
 * @property {number} followers - Cantidad de seguidores
 * @property {number} following - Cantidad de usuarios que sigue
 * @property {string} created_at - Fecha de creación de la cuenta (ISO 8601)
 * @property {string} updated_at - Fecha de última actualización del perfil (ISO 8601)
 */

// Export an empty object for now, or specific validation functions later
export const GithubUser = {};

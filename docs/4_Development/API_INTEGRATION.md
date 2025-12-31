# Integración con APIs Externas

Este documento detalla cómo la aplicación se integra con servicios de terceros. Actualmente, la única integración externa es con la **API REST de GitHub**.

## 1. API Utilizada: GitHub REST API

-   **Propósito**: Obtener la información pública de los perfiles de usuario.
-   **Documentación Oficial**: [https://docs.github.com/es/rest](https://docs.github.com/es/rest)

### Endpoint Específico

-   **Endpoint**: `GET https://api.github.com/users/:username`
-   **Descripción**: Recupera la información del perfil público para un usuario específico. El marcador de posición `:username` se reemplaza con el nombre de usuario que se desea buscar.
-   **Ejemplo de URL**: `https://api.github.com/users/slinkter`

## 2. Implementación en el Código

La lógica de comunicación con la API está completamente aislada en la **Capa de Servicios**, específicamente en el archivo `src/services/github.js`.

### Archivo: `src/services/github.js`

Este módulo exporta una función asíncrona, `fetchUser`, que es la única responsable de interactuar con el endpoint de la API de GitHub.

```javascript
/**
 * @file Contiene la lógica para interactuar con la API de GitHub.
 */

const API_BASE_URL = "https://api.github.com";

/**
 * Busca un usuario de GitHub por su nombre de usuario.
 * @param {string} username - El nombre de usuario a buscar.
 * @returns {Promise<Object>} - Una promesa que resuelve a los datos del usuario.
 * @throws {Error} - Lanza un error si la respuesta de la API no es exitosa.
 */
export const fetchUser = async (username) => {
    // ... implementación ...
};
```

### Flujo de la Petición

1.  **Validación de Entrada**: La función primero verifica que el `username` no esté vacío. Si lo está, lanza un error localmente sin hacer una petición de red.
2.  **Construcción de la URL**: Se construye la URL completa uniendo la `API_BASE_URL` con el endpoint y el `username`.
3.  **Llamada con `fetch`**: Se utiliza la API `fetch` nativa del navegador para realizar la petición `GET`.
4.  **Manejo de la Respuesta**: Se analiza el `response.status` para gestionar los diferentes escenarios.

## 3. Manejo de Errores

El servicio está diseñado para "fallar ruidosamente" (fail loudly) lanzando excepciones con mensajes claros, que luego son capturadas por el hook `useGithubUser` y mostradas al usuario.

El manejo de errores se divide en los siguientes casos:

-   **Usuario no encontrado (`404 Not Found`)**:
    -   **Detección**: `if (response.status === 404)`
    -   **Acción**: Lanza `new Error("Usuario no encontrado.")`.
    -   **Impacto en UI**: El usuario ve un mensaje específico indicando que el perfil no existe.

-   **Límite de Tasa Excedido (`403 Forbidden`)**:
    -   **Detección**: `if (response.status === 403)`
    -   **Acción**: Lanza `new Error("Límite de tasa de la API excedido. Inténtalo más tarde.")`.
    -   **Impacto en UI**: El usuario es informado de que debe esperar antes de realizar más búsquedas. Este es un error común para usuarios que comparten una misma IP o realizan muchas búsquedas seguidas sin autenticación.

-   **Otros Errores del Servidor (`!response.ok`)**:
    -   **Detección**: `if (!response.ok)`
    -   **Acción**: Lanza un error genérico, ej: `new Error("Error en la API de GitHub: Bad Request")`.
    -   **Impacto en UI**: Muestra un mensaje de error genérico.

-   **Errores de Red**: Si hay un problema de red que impida completar la petición `fetch`, la promesa será rechazada, y el bloque `catch` en el hook `useGithubUser` capturará este error.

## 4. Modelo de Datos de la API

El objeto JSON que la API retorna es extenso. La aplicación solo utiliza un subconjunto de sus campos. Para ver la estructura de datos exacta que consume la aplicación, consulta el documento:
-   [**Modelo de Datos (`DATA_MODEL.md`)**](../3_Architecture/DATA_MODEL.md)

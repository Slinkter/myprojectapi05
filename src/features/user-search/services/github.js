import { GithubUserSchema } from "@/shared/domain/github-user/models";

/** 
 * Constante inmutable en el scope del módulo (Module Scope).
 * @type {string} 
 */
const API_BASE_URL = "https://api.github.com";

/**
 * Obtiene los datos del perfil de un usuario de GitHub con validación de esquema Zod.
 *
 * **OPTIMIZACIONES APLICADAS:**
 * 1. **Schema Validation (Zod):** Asegura que los datos sigan el contrato GithubUser.
 * 2. **Data Pruning (O(K)):** El parseo de Zod extrae solo los campos declarados.
 *
 * @param {string} username - Nombre de usuario de GitHub.
 * @returns {Promise<import("@/shared/domain/github-user/models").GithubUser>} Datos validados.
 * @throws {Error} Si el esquema es inválido o el usuario no existe.
 */
export const fetchUser = async (username) => {
    // Fail Fast: Validación O(1)
    if (!username?.trim()) {
        throw new Error("El nombre de usuario no puede estar vacío.");
    }

    const url = `${API_BASE_URL}/users/${username}`;
    
    try {
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

        /** 
         * Parsing y Validación Inmediata.
         */
        const data = await response.json();
        
        // Validación y Mapeo en un solo paso (O(K))
        return GithubUserSchema.parse(data);

    } catch (error) {
        if (error.name === 'ZodError') {
            console.error("Schema Mismatch:", error.errors);
            throw new Error("Error en el formato de los datos recibidos de GitHub.");
        }
        
        // Blindaje de errores de red
        if (error.name === 'TypeError') {
            throw new Error("Error de conexión. Verifica tu internet.");
        }
        throw error;
    }
};

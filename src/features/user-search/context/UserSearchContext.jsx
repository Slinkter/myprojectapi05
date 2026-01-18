import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useGithubUser } from "@/features/user-search/hooks/useGithubUser";

/**
 * @typedef {object} UserSearchContextValue
 * @property {object|null} user - The GitHub user data.
 * @property {boolean} isLoading - The loading state of the search.
 * @property {string|null} error - The error message, if any.
 * @property {(username: string) => Promise<void>} searchUser - The function to search for a user.
 */

/**
 * Contexto para la funcionalidad de búsqueda de usuarios.
 *
 * **Funcionalidad:**
 * - Almacena el estado global de la búsqueda (usuario, carga, error)
 * - Proporciona acceso a la función de búsqueda a través del árbol de componentes
 *
 * @type {React.Context<UserSearchContextValue|undefined>}
 */
export const UserSearchContext = createContext(undefined);

/**
 * Componente Proveedor para el UserSearchContext.
 *
 * **Funcionalidad:**
 * - Inicializa el hook de lógica de negocio useGithubUser
 * - Inyecta el estado y las funciones resultantes en el árbol de componentes
 *
 * **Flujo de inicialización:**
 * 1. Ejecuta useGithubUser() para obtener la instancia del servicio
 * 2. Renderiza los hijos envueltos en el Provider con el valor obtenido
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Los componentes hijos que tendrán acceso al contexto
 * @returns {JSX.Element} El componente Provider configurado
 */
export const UserSearchProvider = ({ children }) => {
    const userSearch = useGithubUser();

    return (
        <UserSearchContext.Provider value={userSearch}>
            {children}
        </UserSearchContext.Provider>
    );
};

UserSearchProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

/**
 * Hook personalizado para consumir el UserSearchContext.
 *
 * **Funcionalidad:**
 * - Facilita el acceso al estado de búsqueda de usuarios
 * - Encapsula la validación de existencia del Provider
 *
 * **Efectos secundarios:**
 * - Lanza un Error si se intenta usar fuera del alcance de UserSearchProvider
 *
 * @returns {UserSearchContextValue} El valor del contexto (user, loading, error, searchUser)
 * @throws {Error} Si se usa fuera de un UserSearchProvider
 */
export const useUserSearch = () => {
    const context = useContext(UserSearchContext);
    if (context === undefined) {
        throw new Error(
            "useUserSearch must be used within a UserSearchProvider"
        );
    }
    return context;
};

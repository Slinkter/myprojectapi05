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
 * Context for the user search feature.
 *
 * @type {React.Context<UserSearchContextValue|undefined>}
 */
export const UserSearchContext = createContext(undefined);

/**
 * Provider component for the UserSearchContext.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - The child components.
 * @returns {JSX.Element} The provider component.
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
 * Custom hook to use the UserSearchContext.
 *
 * @returns {UserSearchContextValue} The user search context value.
 * @throws {Error} If used outside of a UserSearchProvider.
 */
export const useUserSearch = () => {
  const context = useContext(UserSearchContext);
  if (context === undefined) {
    throw new Error("useUserSearch must be used within a UserSearchProvider");
  }
  return context;
};

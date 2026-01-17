import { useState, useCallback } from "react";
import { searchUserUseCase } from "@/features/user-search/application/searchUser";

/**
 * Custom hook for searching and managing GitHub users, focused on UI state management.
 *
 * This hook orchestrates the user search by delegating the core logic to a dedicated
 * use case, and manages the component's state (user data, loading status, and errors).
 *
 * @returns {{
 *   user: object | null,
 *   isLoading: boolean,
 *   error: string | null,
 *   searchUser: (username: string) => Promise<void>
 * }} The state and function for the user search.
 *
 * @example
 * const { user, isLoading, error, searchUser } = useGithubUser();
 *
 * // In an async function or useEffect:
 * // await searchUser('react-developer');
 */
export const useGithubUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const searchUser = useCallback(async (username) => {
    setIsLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = await searchUserUseCase(username);
      setUser(userData);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { user, isLoading, error, searchUser };
};

import { useState, useCallback } from "react";
import { fetchUser } from "../services/github";
import { isValidGithubUsername } from "@/domain/github-user/rules"; // New import

/**
 * Custom hook to search for GitHub users.
 * Manages loading state, errors, and user data.
 * Includes validation for the GitHub username before making an API call.
 * @returns {{
 *  user: object | null,
 *  isLoading: boolean,
 *  error: string | null,
 *  searchUser: (username: string) => Promise<void>
 * }}
 */
export const useGithubUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchUser = useCallback(async (username) => {
        setIsLoading(true);
        setError(null);
        setUser(null); // Limpiar usuario anterior en nueva búsqueda

        if (!isValidGithubUsername(username)) { // New validation logic
            setError("Invalid GitHub username.");
            setIsLoading(false);
            setUser(null);
            return;
        }

        try {
            const userData = await fetchUser(username);
            setUser(userData);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { user, isLoading, error, searchUser };
};

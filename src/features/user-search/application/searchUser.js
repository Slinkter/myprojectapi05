import { fetchUser } from "@/features/user-search/services/github";
import { isValidGithubUsername } from "@/shared/domain/github-user/rules";

/**
 * Use case for searching a GitHub user.
 *
 * @param {string} username - The GitHub username to search.
 * @returns {Promise<object>} The user data.
 * @throws {Error} If the username is invalid or the user is not found.
 */
export const searchUserUseCase = async (username) => {
  if (!isValidGithubUsername(username)) {
    throw new Error("Invalid GitHub username.");
  }

  return await fetchUser(username);
};

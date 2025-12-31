/**
 * Validates a GitHub username.
 * @param {string} username - The username to validate.
 * @returns {boolean} - True if the username is valid, false otherwise.
 */
export const isValidGithubUsername = (username) => {
    // GitHub usernames can only contain alphanumeric characters and hyphens.
    // They cannot start or end with a hyphen.
    // Maximum length of 39 characters.
    if (!username || typeof username !== 'string' || username.length === 0 || username.length > 39) {
        return false;
    }
    if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(username)) {
        return false;
    }
    return true;
};

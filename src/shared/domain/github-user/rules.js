/**
 * Valida si un string cumple con las reglas de nombres de usuario de GitHub.
 *
 * **Reglas de GitHub para usernames:**
 * - Solo puede contener caracteres alfanuméricos (a-z, A-Z, 0-9) y guiones (-)
 * - No puede comenzar ni terminar con un guión
 * - Los guiones no pueden ser consecutivos
 * - Longitud mínima: 1 carácter
 * - Longitud máxima: 39 caracteres
 *
 * **Validaciones realizadas:**
 * 1. Verifica que el username no sea null, undefined o vacío
 * 2. Verifica que sea un string
 * 3. Verifica que la longitud esté entre 1 y 39 caracteres
 * 4. Aplica regex para validar el formato según reglas de GitHub
 *
 * **Regex explicada:**
 * - `^[a-z\d]` - Debe comenzar con letra o número
 * - `(?:[a-z\d]|-(?=[a-z\d]))` - Letra/número o guión seguido de letra/número
 * - `{0,38}` - Repetir 0-38 veces (total máximo 39 con el primer carácter)
 * - `$` - Fin del string
 * - `/i` - Case insensitive
 *
 * @param {string} username - Nombre de usuario a validar
 * @returns {boolean} true si el username es válido, false en caso contrario
 *
 * @example
 * isValidGithubUsername('octocat')        // true
 * isValidGithubUsername('my-user-123')    // true
 * isValidGithubUsername('-invalid')       // false (comienza con guión)
 * isValidGithubUsername('invalid-')       // false (termina con guión)
 * isValidGithubUsername('a'.repeat(40))   // false (más de 39 caracteres)
 * isValidGithubUsername('')               // false (vacío)
 */
export const isValidGithubUsername = (username) => {
    // GitHub usernames can only contain alphanumeric characters and hyphens.
    // They cannot start or end with a hyphen.
    // Maximum length of 39 characters.
    if (
        !username ||
        typeof username !== "string" ||
        username.length === 0 ||
        username.length > 39
    ) {
        return false;
    }
    if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(username)) {
        return false;
    }
    return true;
};

/**
 * Formats an ISO date string into a localized date string (e.g., "31 de Diciembre de 2025").
 * @param {string} isoDateString - The ISO 8601 formatted date string.
 * @returns {string} The formatted date string.
 */
export const formatJoinDate = (isoDateString) => {
    if (!isoDateString) return "";
    
    const date = new Date(isoDateString);
    if (isNaN(date.getTime())) {
        return "Fecha inválida";
    }

    return date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

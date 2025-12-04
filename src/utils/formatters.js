/**
 * @file Contiene funciones de utilidad para formatear datos.
 */

/**
 * Formatea un string de fecha ISO a un formato legible "DD Mes YYYY".
 * @param {string | undefined} dateString - El string de fecha en formato ISO.
 * @returns {string} - La fecha formateada o un string vacío si la entrada es inválida.
 */
export const formatJoinDate = (dateString) => {
    if (!dateString) return "";
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return "Fecha inválida";
    }

    return date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

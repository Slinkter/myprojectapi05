/**
 * Formatea una fecha ISO 8601 a un formato legible en español.
 *
 * **Funcionalidad:**
 * - Convierte fechas ISO (ej: "2020-01-15T10:30:00Z") a formato español
 * - Maneja casos de entrada inválida retornando mensajes apropiados
 * - Utiliza la API Intl.DateTimeFormat para localización
 *
 * **Formato de salida:**
 * - Día: numérico (1-31)
 * - Mes: nombre completo en español (enero, febrero, etc.)
 * - Año: numérico completo (2024)
 *
 * **Casos especiales:**
 * - String vacío o null: retorna ""
 * - Fecha inválida: retorna "Fecha inválida"
 *
 * @param {string} isoDateString - Fecha en formato ISO 8601 (ej: "2020-01-15T10:30:00Z")
 * @returns {string} Fecha formateada (ej: "15 de enero de 2020") o mensaje de error
 *
 * @example
 * formatJoinDate("2020-01-15T10:30:00Z")  // "15 de enero de 2020"
 * formatJoinDate("2024-12-25T00:00:00Z")  // "25 de diciembre de 2024"
 * formatJoinDate("")                       // ""
 * formatJoinDate("invalid")                // "Fecha inválida"
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

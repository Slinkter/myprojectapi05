import { Card, CardBody } from "@/shared/components/ui";
import { FiAlertTriangle } from "react-icons/fi";
import PropTypes from "prop-types";

/**
 * Componente para visualización amigable de errores.
 *
 * **Funcionalidad:**
 * - Transforma mensajes de error técnicos en mensajes amigables para el usuario
 * - Categoriza los errores comunes (404, Rate Limit, Genéricos)
 * - Provee feedback visual claro mediante iconos y colores de alerta
 *
 * **Flujo de renderizado:**
 * 1. Recibe el string de `error`
 * 2. Evalúa el tipo de error en un switch case
 * 3. Asigna Título y Mensaje descriptivo correspondiente
 * 4. Renderiza una tarjeta con la información y animación de atención (shake)
 *
 * @param {object} props
 * @param {string} props.error - El mensaje de error original recibido del backend/hook
 * @returns {JSX.Element} Tarjeta de error formateada
 */
const ErrorDisplay = ({ error }) => {
  let title;
  let message;

  switch (error) {
    case "Usuario no encontrado.":
      title = "Usuario No Encontrado";
      message =
        "El usuario que buscas no existe. Verifica el nombre e inténtalo de nuevo.";
      break;
    case "Límite de tasa de la API excedido. Inténtalo más tarde.":
      title = "Límite Excedido";
      message =
        "Has excedido el límite de solicitudes. Espera un momento antes de intentarlo.";
      break;
    default:
      title = "Error";
      message = "Hubo un problema al contactar con la API de GitHub.";
  }

  return (
    <Card className="w-full max-w-md bg-white dark:bg-gray-800 border-red-200 dark:border-red-900 animate-shake">
      <CardBody className="flex flex-col items-center text-center p-8">
        <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
          <FiAlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-xl text-gray-900 dark:text-gray-100 font-bold mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{message}</p>
      </CardBody>
    </Card>
  );
};

ErrorDisplay.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorDisplay;

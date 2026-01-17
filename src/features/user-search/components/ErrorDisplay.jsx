import { Card, CardBody } from "@/components/ui";
import { FiAlertTriangle } from "react-icons/fi";
import PropTypes from "prop-types";

/**
 * Minimalist error display component.
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
    <Card className="w-full max-w-md bg-white dark:bg-gray-800 border-red-200 dark:border-red-900">
      <CardBody className="flex flex-col items-center text-center p-8">
        <FiAlertTriangle className="w-12 h-12 text-red-500 mb-4" />
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

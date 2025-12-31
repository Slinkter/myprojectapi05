
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { FiAlertTriangle } from "react-icons/fi";
import PropTypes from 'prop-types';

/**
 * Muestra un mensaje de error estandarizado.
 * @param {{ error: string }} props
 */
/**
 * A component to display error messages.
 * @param {object} props - The component props.
 * @param {string | null} props.error - The error message to display. If null or empty, nothing is rendered.
 * @returns {JSX.Element | null} The error message display component or null if no error.
 */
const ErrorDisplay = ({ error }) => {
    let title;
    let message;

    switch (error) {
        case "Usuario no encontrado.":
            title = "Usuario No Encontrado";
            message = "Parece que el usuario que buscas no existe. Por favor, revisa el nombre e inténtalo de nuevo.";
            break;
        case "Límite de tasa de la API excedido. Inténtalo más tarde.":
            title = "Límite de API Excedido";
            message = "Has excedido el límite de solicitudes. Por favor, espera un momento antes de volver a intentarlo.";
            break;
        default:
            title = "Ocurrió un Error";
            message = "Hubo un problema al contactar con la API de GitHub. Revisa tu conexión a internet.";
    }

    return (
        <Card
            className="w-full max-w-sm bg-red-50 text-red-700 border border-red-200 shadow-lg 
                       dark:bg-red-900/20 dark:text-red-300 dark:border-red-500/30"
        >
            <CardBody className="flex flex-col items-center text-center p-6">
                 <FiAlertTriangle className="w-12 h-12 text-red-400 dark:text-red-500/80 mb-4" />
                <Typography variant="h5" className="text-red-800 dark:text-red-200 font-bold mb-2">
                    {title}
                </Typography>
                <Typography className="text-red-700 dark:text-red-300">
                    {message}
                </Typography>
            </CardBody>
        </Card>
    );
};

ErrorDisplay.propTypes = {
    error: PropTypes.string.isRequired,
};

export default ErrorDisplay;
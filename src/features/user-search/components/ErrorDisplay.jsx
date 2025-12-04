import React from "react";
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const ErrorIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);


/**
 * Muestra un mensaje de error estandarizado.
 * @param {{ error: string }} props
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
                 <ErrorIcon className="w-12 h-12 text-red-400 dark:text-red-500/80 mb-4" />
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

export default ErrorDisplay;
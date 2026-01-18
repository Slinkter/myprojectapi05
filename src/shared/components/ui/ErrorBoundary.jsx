import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Button } from "@/shared/components/ui";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";

/**
 * Componente ErrorBoundary para capturar errores de renderizado en sus componentes hijos.
 * Muestra una UI de respaldo amigable en lugar de colapsar toda la aplicación.
 *
 * @component
 * @example
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    /**
     * Actualiza el estado para que el siguiente renderizado muestre la UI de respaldo.
     * @param {Error} error - El error capturado.
     */
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    /**
     * Captura errores de componentes descendientes.
     * @param {Error} error - El error capturado.
     * @param {object} errorInfo - Información adicional sobre el error (component stack).
     */
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
        this.setState({ errorInfo });
        // Aquí podrías enviar el error a un servicio de reporte como Sentry
    }

    /**
     * Resetea el estado del error para intentar renderizar de nuevo.
     */
    handleReset = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
        window.location.reload(); // Recarga completa para asegurar un estado limpio
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-[400px] w-full flex items-center justify-center p-4">
                    <Card className="w-full max-w-md bg-white dark:bg-gray-800 border-red-100 dark:border-red-900/30 shadow-lg">
                        <CardBody className="flex flex-col items-center text-center p-8">
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-full mb-6">
                                <FiAlertTriangle className="w-10 h-10 text-red-500" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-macondo">
                                ¡Oops! Algo salió mal
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed font-lora">
                                Ha ocurrido un error inesperado al mostrar este
                                contenido. Por favor, intenta recargar la
                                página.
                            </p>

                            <div className="w-full">
                                <Button
                                    onClick={this.handleReset}
                                    fullWidth
                                    className="flex items-center justify-center gap-2"
                                >
                                    <FiRefreshCw className="w-4 h-4" />
                                    <span>Recargar Página</span>
                                </Button>
                            </div>

                            {/* Detalles técnicos solo en desarrollo */}
                            {import.meta.env.DEV && this.state.error && (
                                <div className="mt-6 w-full text-left">
                                    <details className="text-xs text-gray-400 bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-100 dark:border-gray-800 overflow-auto max-h-40">
                                        <summary className="cursor-pointer font-medium mb-2">
                                            Detalles del error
                                        </summary>
                                        <pre className="whitespace-pre-wrap font-mono">
                                            {this.state.error.toString()}
                                            <br />
                                            {
                                                this.state.errorInfo
                                                    ?.componentStack
                                            }
                                        </pre>
                                    </details>
                                </div>
                            )}
                        </CardBody>
                    </Card>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    fallback: PropTypes.node,
};

export default ErrorBoundary;

import PropTypes from "prop-types";

/**
 * Componente de Spinner reutilizable para indicar estados de carga.
 *
 * **Funcionalidad:**
 * - Provee un indicador de carga visualmente atractivo.
 * - Construido con Tailwind CSS y animaciones CSS.
 * - Soporta diferentes tamaños y colores.
 *
 * @param {object} props
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Tamaño del spinner.
 * @param {'blue'|'gray'|'white'} [props.color='blue'] - Color del spinner.
 * @param {string} [props.className=''] - Clases adicionales de Tailwind.
 * @returns {JSX.Element} El componente del spinner.
 *
 * @example
 * <Spinner size="lg" color="blue" />
 */
const Spinner = ({ size = "md", color = "blue", className = "" }) => {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const colors = {
    blue: "border-blue-600",
    gray: "border-gray-600",
    white: "border-white",
  };

  return (
    <div
      className={`${sizes[size]} border-4 border-t-transparent ${colors[color]} rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Cargando"
    />
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["blue", "gray", "white"]),
  className: PropTypes.string,
};

export default Spinner;

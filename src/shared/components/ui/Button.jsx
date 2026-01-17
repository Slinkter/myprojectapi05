import PropTypes from "prop-types";

/**
 * Componente de Botón reutilizable con estilos de Tailwind encapsulados.
 *
 * **Funcionalidad:**
 * - Provee una interfaz consistente para botones en la aplicación
 * - Soporta múltiples variantes (filled, outlined, text) y tamaños
 * - Gestiona estados de hover, focus y disabled automáticamente
 *
 * **Flujo de renderizado:**
 * - Combina clases base, variantes, tamaños y clases personalizadas (`className`) para generar la clase final
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Contenido del botón
 * @param {'filled'|'outlined'|'text'} [props.variant='filled'] - Estilo visual
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Tamaño del botón
 * @param {boolean} [props.fullWidth=false] - Si debe ocupar el 100% del ancho
 * @param {string} [props.className=''] - Clases adicionales de Tailwind
 * @param {boolean} [props.disabled=false] - Estado deshabilitado
 * @param {function} [props.onClick] - Manejador de evento click
 * @returns {JSX.Element} Elemento button HTML estilizado
 */
const Button = ({
  children,
  variant = "filled",
  size = "md",
  fullWidth = false,
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    filled:
      "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500",
    outlined:
      "border-2 border-gray-400 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
    text: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${disabled ? disabledStyles : ""} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["filled", "outlined", "text"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;

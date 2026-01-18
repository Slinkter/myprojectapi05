import PropTypes from "prop-types";

/**
 * Componente de Input reutilizable con un diseño minimalista y limpio.
 *
 * **Funcionalidad:**
 * - Provee un campo de texto estilizado con Tailwind CSS.
 * - Soporta estados de error y deshabilitado.
 * - El `label` se utiliza como `placeholder`.
 *
 * **Flujo de renderizado:**
 * - Combina clases base con estilos condicionales para los estados de error y deshabilitado.
 * - Envuelve el input en un `div` contenedor para permitir estilización adicional a través de `containerProps`.
 *
 * @param {object} props
 * @param {string} props.label - El texto a mostrar como placeholder.
 * @param {boolean} [props.error=false] - Si el input está en estado de error.
 * @param {boolean} [props.disabled=false] - Si el input está deshabilitado.
 * @param {string} [props.className=''] - Clases adicionales de Tailwind para el elemento `input`.
 * @param {object} [props.containerProps={}] - Props para el `div` contenedor, útil para añadir clases.
 * @returns {JSX.Element} Elemento input estilizado.
 *
 * @example
 * <Input
 *   label="Nombre de usuario"
 *   value={username}
 *   onChange={(e) => setUsername(e.target.value)}
 *   error={hasError}
 * />
 */
const Input = ({
  label,
  error = false,
  disabled = false,
  className = "",
  containerProps = {},
  ...props
}) => {
  const baseStyles =
    "w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100";
  const normalStyles =
    "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100";
  const errorStyles = "border-red-500 focus:ring-red-500";
  const disabledStyles =
    "bg-gray-50 cursor-not-allowed dark:bg-gray-900 opacity-60";

  return (
    <div className={`relative w-full ${containerProps.className || ""}`}>
      <input
        className={`${baseStyles} ${error ? errorStyles : normalStyles} ${disabled ? disabledStyles : ""} ${className}`}
        placeholder={label}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  containerProps: PropTypes.object,
};

export default Input;

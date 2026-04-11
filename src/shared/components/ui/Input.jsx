import PropTypes from "prop-types";

/**
 * Componente de Input premium con diseño minimalista.
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
    "w-full px-5 py-4 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 font-medium";
  
  const normalStyles =
    "border-gray-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100 dark:focus:border-blue-500 dark:focus:ring-blue-500/20";
  
  const errorStyles = "border-red-500 focus:ring-red-500/20 dark:border-red-500/50";
  
  const disabledStyles =
    "bg-gray-50 cursor-not-allowed dark:bg-zinc-950 opacity-50";

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

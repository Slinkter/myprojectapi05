import PropTypes from "prop-types";

/**
 * Custom Input component using pure Tailwind CSS.
 * Minimalist design with clean aesthetics.
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

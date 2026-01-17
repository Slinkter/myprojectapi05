import PropTypes from "prop-types";

/**
 * Custom Spinner component using pure Tailwind CSS.
 * @param {object} props - Component props
 * @param {string} props.size - Spinner size: 'sm' | 'md' | 'lg'
 * @param {string} props.color - Spinner color: 'blue' | 'gray' | 'white'
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
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
      aria-label="Loading"
    />
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["blue", "gray", "white"]),
  className: PropTypes.string,
};

export default Spinner;

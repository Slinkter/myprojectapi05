/**
 * @file A custom loading spinner with a modern design.
 * It uses SVG and CSS animations to create a smooth, looping animation.
 * The colors are customizable via props.
 */
import PropTypes from "prop-types";

/**
 * A modern, visually appealing loading spinner.
 *
 * @param {object} props
 * @param {string} props.size - The size of the spinner (e.g., 'w-12 h-12').
 * @param {string} props.color - The color of the spinner (e.g., 'text-blue-500').
 * @returns {JSX.Element} The loading spinner component.
 */
const LoadingSpinner = ({ size = "w-12 h-12", color = "text-blue-500" }) => {
  return (
    <div className={`relative ${size} ${color}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="stroke-current text-gray-200 dark:text-gray-700"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        />
        <circle
          className="stroke-current animate-spinner-path"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray="251.2"
          strokeDashoffset="251.2"
        />
      </svg>
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default LoadingSpinner;

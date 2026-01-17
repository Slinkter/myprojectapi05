import PropTypes from "prop-types";

/**
 * Custom Card component using pure Tailwind CSS.
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * Custom CardBody component using pure Tailwind CSS.
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - CardBody content
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const CardBody = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

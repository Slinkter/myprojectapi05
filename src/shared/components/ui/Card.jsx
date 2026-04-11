import PropTypes from "prop-types";

/**
 * @file Componentes de tarjeta (Card) premium con efectos de Glassmorphism.
 */

/**
 * Contenedor principal de la tarjeta.
 */
export const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`glass-panel rounded-2xl transition-all duration-300 ${className}`}
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
 * Cabecera de la tarjeta.
 */
export const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-8 border-b border-gray-100 dark:border-zinc-800 ${className}`} {...props}>
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * Cuerpo de la tarjeta.
 */
export const CardBody = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-8 ${className}`} {...props}>
      {children}
    </div>
  );
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/**
 * Pie de la tarjeta con fondo sutil.
 */
export const CardFooter = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 bg-gray-50/50 dark:bg-zinc-900/50 border-t border-gray-100 dark:border-zinc-800 rounded-b-2xl ${className}`} {...props}>
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

import PropTypes from "prop-types";

/**
 * @file Componentes de tarjeta (Card) semánticos y reutilizables.
 * @description Proporciona `Card`, `CardHeader`, `CardBody` y `CardFooter` para construir layouts de tarjetas consistentes.
 */

/**
 * Contenedor principal de la tarjeta.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido de la tarjeta.
 * @param {string} [props.className] - Clases CSS adicionales.
 * @returns {JSX.Element} El componente de la tarjeta.
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
 * Cabecera de la tarjeta.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido de la cabecera.
 * @param {string} [props.className] - Clases CSS adicionales.
 * @returns {JSX.Element} El componente de la cabecera de la tarjeta.
 */
export const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 border-b border-gray-200 dark:border-gray-700 ${className}`} {...props}>
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
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del cuerpo.
 * @param {string} [props.className] - Clases CSS adicionales.
 * @returns {JSX.Element} El componente del cuerpo de la tarjeta.
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

/**
 * Pie de la tarjeta.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del pie.
 * @param {string} [props.className] - Clases CSS adicionales.
 * @returns {JSX.Element} El componente del pie de la tarjeta.
 */
export const CardFooter = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 rounded-b-lg ${className}`} {...props}>
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

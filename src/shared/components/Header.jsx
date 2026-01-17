/**
 * @file Componente de encabezado principal de la aplicación.
 * Muestra el título y una breve descripción del propósito de la aplicación.
 * Es un componente de presentación puro y reutilizable.
 *
 * @component
 * @returns {JSX.Element} El componente de encabezado.
 */
const Header = () => {
  return (
    <header className="text-center mb-12 max-w-2xl">
      <h1 className="font-macondo text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">
        GitHub Explorer
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4">
        Descubre perfiles de desarrolladores
      </p>
    </header>
  );
};

export default Header;

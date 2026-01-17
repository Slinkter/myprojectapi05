/**
 * Componente de encabezado (Header) de la aplicación.
 *
 * **Funcionalidad:**
 * - Muestra la identidad visual de la aplicación (Título y subtítulo)
 * - Actúa como componente puro de presentación
 *
 * **Flujo de inicialización:**
 * - Renderizado estático de elementos HTML con clases de Tailwind
 *
 * @component
 * @returns {JSX.Element} Elemento header con título y descripción
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

import { UserSearchPage } from "@/features/user-search/pages";

/**
 * Componente principal de la aplicación (App).
 *
 * **Funcionalidad:**
 * - Actúa como el contenedor raíz de la aplicación.
 * - Centra la `UserSearchPage` en la pantalla.
 *
 * **Flujo de renderizado:**
 * 1. Establece un contenedor flex que ocupa toda la pantalla.
 * 2. Renderiza la `UserSearchPage` en el centro.
 *
 * @returns {JSX.Element} El componente raíz de la aplicación.
 */
const App = () => {
    return (
        <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 antialiased transition-colors duration-300">
            <UserSearchPage />
        </div>
    );
};

export default App;

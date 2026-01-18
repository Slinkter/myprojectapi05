import { UserSearchPage } from "@/features/user-search/pages";
import { Header } from "@/shared/components";

/**
 * Componente principal de la aplicación (App).
 *
 * **Funcionalidad:**
 * - Actúa como el contenedor raíz de la aplicación
 * - Define la estructura de layout global (Grid layout)
 * - Integra los componentes principales (`Header` y `UserSearchPage`)
 *
 * **Flujo de renderizado:**
 * 1. Establece el contenedor principal con estilos globales (fondo, altura mínima)
 * 2. Renderiza el Header en la parte superior
 * 3. Renderiza la página de búsqueda en el área de contenido principal
 *
 * @returns {JSX.Element} El componente raíz de la aplicación
 */
const App = () => {
    return (
        <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center     p-4 sm:p-6 md:p-8 antialiased transition-colors duration-300">
            <UserSearchPage />
        </div>
    );
};

export default App;

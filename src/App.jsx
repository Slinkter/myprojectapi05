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
        <div className="min-h-screen w-full bg-slate-50 dark:bg-zinc-950 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 antialiased transition-colors duration-500 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <UserSearchPage />
        </div>
    );
};

export default App;

import { UserSearchPage } from "@/features/user-search/pages";
import { Header } from "@/shared/components";

/**
 * @file Componente principal de la aplicación (App).
 * @description Orquesta el layout general y los componentes principales.
 * @returns {JSX.Element} El componente raíz de la aplicación.
 */
const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 grid grid-rows-[auto,1fr] justify-items-center p-4 sm:p-6 md:p-8 antialiased transition-colors duration-300">
      <Header />
      <UserSearchPage />
    </div>
  );
};

export default App;

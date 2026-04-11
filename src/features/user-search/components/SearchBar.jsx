import { useState, useEffect, memo } from "react";
import { Input } from "@/shared/components/ui";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";

/**
 * Componente de barra de búsqueda "Zen" (Sin botones).
 * La búsqueda se dispara exclusivamente al presionar 'Enter'.
 */
const SearchBar = memo(({ onSearch, isLoading, hasError }) => {
  const [searchText, setSearchText] = useState("");
  const [validationError, setValidationError] = useState(false);

  useEffect(() => {
    if (searchText && validationError) {
      setValidationError(false);
    }
  }, [searchText, validationError]);

  const handleSearch = () => {
    if (searchText.trim() === "") {
      setValidationError(true);
      return;
    }
    onSearch(searchText);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const isDisabled = isLoading;
  const showInputError = validationError || hasError;

  return (
    <div className="w-full max-w-md group">
      <div className="relative">
        <FiSearch 
          className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 pointer-events-none z-10
            ${showInputError ? "text-red-400" : "text-gray-400 dark:text-zinc-500 group-focus-within:text-blue-500"}
          `} 
        />
        
        <Input
          type="text"
          label="Buscar perfil..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
          className={`pl-14 pr-6 py-5 bg-white/50 dark:bg-zinc-900/50 border-gray-100 dark:border-zinc-800/50 backdrop-blur-xl rounded-2xl
            text-lg font-medium tracking-tight transition-all duration-300
            shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]
            focus:shadow-[0_20px_40px_rgba(59,130,246,0.1)]
          `}
          error={showInputError}
          disabled={isDisabled}
          containerProps={{
            className: `${validationError ? "animate-shake" : ""}`,
          }}
        />

        {/* Carga visual minimalista dentro del input */}
        {isLoading && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2">
            <div className="w-5 h-5 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          </div>
        )}
      </div>
      
      {/* Pista visual sutil para el usuario */}
      {!isLoading && !showInputError && (
        <p className="text-center mt-3 text-[10px] text-gray-400 dark:text-zinc-600 font-bold tracking-[0.2em] uppercase opacity-0 group-focus-within:opacity-100 transition-opacity duration-500">
          Presiona Enter para buscar
        </p>
      )}
    </div>
  );
});

SearchBar.displayName = "SearchBar";

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default SearchBar;

import React, { useState, useEffect } from "react";
import { Button, Input } from "@material-tailwind/react";

// Icono de búsqueda
const SearchIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

/**
 * Barra de búsqueda para encontrar usuarios de GitHub.
 * @param {{onSearch: (username: string) => void, isLoading: boolean, hasError: boolean}} props
 */
const SearchBar = ({ onSearch, isLoading, hasError }) => {
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
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    
    // El campo solo debe deshabilitarse mientras se carga, no si hay un error.
    const isDisabled = isLoading;

    return (
        <div className="relative flex w-full max-w-md">
            <Input
                type="text"
                label="Buscar usuario de GitHub..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pr-20" // Se mantiene solo el padding para el botón
                containerProps={{
                    className: `min-w-0 ${validationError ? "animate-shake" : ""}`,
                }}
                color="blue" // Se usa la prop del componente para el color de foco
                error={validationError}
                disabled={isDisabled}
            />
            <Button
                size="sm"
                className="!absolute right-1 top-1/2 -translate-y-1/2 rounded bg-gray-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={handleSearch}
                disabled={isDisabled}
            >
                <SearchIcon className="h-5 w-5" />
            </Button>
        </div>
    );
};

export default SearchBar;
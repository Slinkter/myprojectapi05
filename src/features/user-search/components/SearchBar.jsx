import React, { useState, useEffect } from "react";
import { Button, Input } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";

/**
 * Barra de búsqueda para encontrar usuarios de GitHub.
 * @param {{onSearch: (username: string) => void, isLoading: boolean, hasError: boolean}} props
 */
const SearchBar = ({ onSearch, isLoading, hasError }) => {
    const [searchText, setSearchText] = useState("");
    const [validationError, setValidationError] = useState(false);

    useEffect(() => {
        // Limpiar el error de validación si el usuario empieza a escribir
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
        // No limpiar el texto aquí para que el usuario vea lo que buscó
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    const isDisabled = isLoading || hasError;

    // Clases para el Input que cambian con el error de validación
    const inputErrorClass = validationError 
        ? "border-red-500 text-red-500" 
        : "border-gray-400 dark:border-gray-600";

    return (
        <div className="relative flex w-full max-w-[24rem]">
            <Input
                type="text"
                label="Buscar usuario de GitHub..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={handleKeyPress}
                className={`!border ${inputErrorClass} bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-shown:border-t-blue-gray-200`}
                containerProps={{
                    className: `min-w-0 ${validationError ? "animate-shake" : ""}`,
                }}
                labelProps={{
                    className: "dark:text-gray-400",
                }}
                disabled={isDisabled}
            />
            <Button
                size="sm"
                className="!absolute right-1 top-1 rounded flex items-center justify-center gap-2
                           bg-gray-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={handleSearch}
                disabled={isDisabled}
            >
                {isLoading ? (
                    <>
                        <Spinner className="h-4 w-4" />
                        Buscando...
                    </>
                ) : (
                    "Buscar"
                )}
            </Button>
        </div>
    );
};

export default SearchBar;
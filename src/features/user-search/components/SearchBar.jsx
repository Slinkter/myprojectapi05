import { useState, useEffect } from 'react';
import { Button, Input } from "@material-tailwind/react";
import { FiSearch } from "react-icons/fi";
import PropTypes from 'prop-types';

/**
 * Search bar component for finding GitHub users.
 * @param {object} props - The component props.
 * @param {(username: string) => void} props.onSearch - Callback function to execute when a search is performed.
 * @param {boolean} props.isLoading - Indicates if a search is currently in progress.
 * @param {boolean} props.hasError - Indicates if there was an error in the last search attempt (used for propTypes validation, not directly within the component's rendering logic).
 * @returns {JSX.Element} The search bar component.
 */
const SearchBar = ({ onSearch, isLoading }) => {
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
                <FiSearch className="h-5 w-5" />
            </Button>
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
};

export default SearchBar;
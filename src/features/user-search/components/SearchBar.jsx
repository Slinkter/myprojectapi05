import { useState, useEffect } from "react";
import { Button, Input } from "@/shared/components/ui";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";

/**
 * Minimalist search bar component for finding GitHub users.
 */
const SearchBar = ({ onSearch, isLoading }) => {
  /*  */
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

  return (
    <div className="relative w-full max-w-md ">
      <Input
        type="text"
        label="Buscar usuario de GitHub..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={handleKeyPress}
        className="pr-14"
        containerProps={{
          className: `${validationError ? "animate-shake" : ""}`,
        }}
        error={validationError}
        disabled={isDisabled}
      />
      <Button
        size="sm"
        onClick={handleSearch}
        disabled={isDisabled}
        className="!absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md"
      >
        <FiSearch className="h-4 w-4" />
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

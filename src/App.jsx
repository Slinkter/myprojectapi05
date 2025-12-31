import React, { useEffect } from "react";
import { Spinner, Typography } from "@material-tailwind/react";
import { useGithubUser } from "./features/user-search/hooks/useGithubUser";
import SearchBar from "./features/user-search/components/SearchBar";
import UserCard from "./features/user-search/components/UserCard";
import ErrorDisplay from "./features/user-search/components/ErrorDisplay";

const App = () => {
    const { user, isLoading, error, searchUser } = useGithubUser();

    // Cargar un usuario por defecto al iniciar la aplicación
    useEffect(() => {
        searchUser("slinkter");
    }, []); // searchUser es estable gracias a useCallback, no necesita ser dependencia

    return (
        <div className="min-h-dvh w-full bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 antialiased">
            <header className="text-center mb-12">
                <Typography
                    as="h1"
                    className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
                >
                    GitHub Explorer
                </Typography>
                <Typography
                    variant="paragraph"
                    className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400"
                >
                    Encuentra perfiles de desarrolladores de todo el mundo.
                </Typography>
            </header>

            <main className="w-full max-w-md">
                <SearchBar
                    onSearch={searchUser}
                    isLoading={isLoading}
                    hasError={!!error}
                />

                <div className="mt-10 min-h-[420px] flex justify-center items-start">
                    {isLoading && (
                        <div className="flex justify-center pt-10">
                            <Spinner color="blue" className="h-12 w-12" />
                        </div>
                    )}

                    {error && <ErrorDisplay error={error} />}

                    {!isLoading && !error && user && <UserCard user={user} />}
                </div>
            </main>
        </div>
    );
};

export default App;

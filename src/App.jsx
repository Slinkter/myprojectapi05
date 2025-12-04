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
        <div className="min-h-dvh w-full bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-900/50 flex flex-col justify-center items-center p-4 antialiased">
            <header className="text-center mb-8">
                <div className="flex justify-center items-center gap-3">
                    <Typography
                        variant="h2"
                        color="blue-gray"
                        className="font-bold tracking-tight dark:text-gray-100"
                    >
                        GitHub Explorer
                    </Typography>
                </div>

                <Typography
                    variant="paragraph"
                    className="mt-2 text-lg font-normal text-gray-600 dark:text-gray-400"
                >
                    Encuentra perfiles de desarrolladores de todo el mundo.
                </Typography>
            </header>

            <main className="w-full max-w-sm">
                <SearchBar
                    onSearch={searchUser}
                    isLoading={isLoading}
                    hasError={!!error}
                />

                <div className="mt-8 min-h-[400px] flex justify-center items-center">
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

import React, { useEffect } from "react";
import { Spinner, Typography } from "@material-tailwind/react";
import { useGithubUser } from "./features/user-search/hooks/useGithubUser";
import SearchBar from "./features/user-search/components/SearchBar";
import UserCard from "./features/user-search/components/UserCard";
import ErrorDisplay from "./features/user-search/components/ErrorDisplay";



const GithubIcon = (props) => (

    <svg {...props} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">

        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>

    </svg>

);



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

                    <GithubIcon className="w-8 h-8 text-gray-800 dark:text-gray-200" />

                    <Typography

                        variant="h2"

                        color="blue-gray"

                        className="font-bold tracking-tight dark:text-gray-100"

                    >

                        GitHub Explorer

                    </Typography>

                </div>

                <Typography variant="paragraph" className="mt-2 text-lg font-normal text-gray-600 dark:text-gray-400">

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

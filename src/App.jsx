import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardHeader,
    Spinner,
    Typography,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import CardUser from "./components/CardUser";

const App = () => {
    window.document.title = "my-projectapi-05";
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null);
    const [userName, setUserName] = useState("slinkter");
    const [searchText, setSearchText] = useState("");

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null); // Reset the error before fetching
            const url = `https://api.github.com/users/${userName}`;
            const res = await fetch(url);
            if (res.status === 403) {
                throw new Error("API rate limit exceeded");
            }
            if (res.status !== 200) {
                throw new Error("Error: status is not 200");
            }
            const data = await res.json();
            setUserData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            setSearchText("");
        }
    }, [userName]);

    const btnSearch = useCallback(() => {
        if (searchText.trim() === "") {
            alert("Nombre vacío");
            return;
        }
        setUserName(searchText);
    }, [searchText]);

    useEffect(() => {
        getData();
    }, [userName, getData]);

    const userNotFound = useMemo(
        () => !userData && !loading && !error,
        [userData, loading, error]
    );

    return (
        <div className="min-h-dvh w-full flex flex-col justify-center items-center">
            <div>
                <Typography variant="h2" className="mb-2">
                    GitHub API + React + Tailwind CSS
                </Typography>
            </div>
            <div
                className="relative flex w-full max-w-[24rem]"
                disabled={error === "API rate limit exceeded" ? true : false}
            >
                <Input
                    type="text"
                    label="Username"
                    value={searchText}
                    disabled={error}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button
                    className="!absolute right-1 top-1 rounded"
                    size="sm"
                    onClick={btnSearch}
                    disabled={error}
                >
                    Search
                </Button>
            </div>
            {loading && <Spinner color="red" className="h-12 w-12" />}

            {userNotFound && <span>No se encontró el usuario</span>}
            {!loading && !error && (
                <div>
                    <CardUser data={userData} />
                </div>
            )}
            {error && <ErroShow error={error} />}
        </div>
    );
};

export default App;

// Componente ErroShow corregido
const ErroShow = ({ error }) => {
    return (
        <>
            <Card
                className="mt-6 w-96 shadow-xl border-2 border-gray-400"
                color=""
                variant="gradient"
            >
                <CardHeader floated={false} shadow={false} color="transparent">
                    <div className="flex gap-2 justify-center items-center mt-2">
                        <div className="grid h-36 w-36 place-items-center rounded-full bg-gray-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-12 w-12 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                        </div>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="flex flex-col gap-4 justify-center items-center text-center">
                        <Typography variant="h2" className="mb-2">
                            {error !== "API rate limit exceeded" && (
                                <span> el usuario no existe</span>
                            )}
                        </Typography>
                        <Typography variant="lead" className="mb-2">
                            {error === "API rate limit exceeded" && (
                                <div>
                                    <p>
                                        Has excedido el límite de llamadas a la
                                        API. Intenta de nuevo más tarde o
                                        autentica tus solicitudes para obtener
                                        un límite mayor.
                                    </p>
                                </div>
                            )}
                        </Typography>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

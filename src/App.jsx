import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import CardUser from "./components/CardUser";

const App = () => {
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
            const data = await res.json();

            if (res.status === 403) {
                throw new Error("API rate limit exceeded");
            }
            if (res.status !== 200) {
                throw new Error("Error: status is not 200");
            }

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
            <div className="relative flex w-full max-w-[24rem]">
                <Input
                    type="text"
                    label="Username"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button
                    className="!absolute right-1 top-1 rounded"
                    size="sm"
                    onClick={btnSearch}
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
        <div>
            <Typography variant="h2" className="mb-2">
                Error: {error}
            </Typography>
            {error === "API rate limit exceeded" && (
                <div>
                    <p>
                        Has excedido el límite de llamadas a la API. Intenta de
                        nuevo más tarde o autentica tus solicitudes para obtener
                        un límite mayor.
                    </p>
                </div>
            )}
        </div>
    );
};

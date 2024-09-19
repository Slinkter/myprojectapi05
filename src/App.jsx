import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import CardUser from "./components/CardUser";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    //
    const [userName, setUserName] = useState("slinkter");
    const [searchText, setSearchText] = useState("");
    const [userData, setUserData] = useState(null);

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const url = `https://api.github.com/users/${userName}`;
            const res = await fetch(url);
            const data = await res.json();
            if (res.status === 403) {
                throw "API rate limit exceeded";
            }
            if (res.status !== 200) {
                throw "error  no es 200 ";
            }
            setUserData(data);
        } catch (error) {
            setError(error.message);
            console.log(error);
        } finally {
            setLoading(false);
            searchText("");
        }
    }, [userName]);

    const btnSearch = useCallback(() => {
        if (searchText.length <= 0 && searchText.trim() === "") {
            alert("nombre vacio");
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
        <div className="min-h-dvh flex flex-col justify-center  items-center ">
            {loading && <Spinner color="red" className="h-12 w-12" />}
            {error && <ErroShow error={error} />}
            {userNotFound && <span>No se encontró el usuario</span>}
            {!loading && !error && (
                <div>
                    <div className="relative flex w-full max-w-[24rem]">
                        <Input
                            type="email"
                            label="username"
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
                    <CardUser data={userData} />
                </div>
            )}
        </div>
    );
};

export default App;

const ErroShow = (error) => {
    <div>
        <Typography variant="h2" className="mb-2">
            Error : {error}
            {error === "API rate limit exceeded" && (
                <div>
                    <p>
                        Has excedido el límite de llamadas a la API. Intenta de
                        nuevo más tarde o autentica tus solicitudes para obtener
                        un límite mayor.
                    </p>
                </div>
            )}
        </Typography>
    </div>;
};

import React, { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import CardUser from "./components/CardUser";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    //

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {};
    }, []);

    return (
        <div className="min-h-dvh flex flex-col justify-center  items-center ">
            {loading && <Spinner color="red" className="h-12 w-12" />}

            {!loading && (
                <div>
                    <Input className="w-96" label="Username" color="blue" />
                    <CardUser />
                </div>
            )}
        </div>
    );
};

export default App;

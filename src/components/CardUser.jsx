import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader,
} from "@material-tailwind/react";
import React from "react";
import { Avatar } from "@material-tailwind/react";

const CardUser = ({ data }) => {
    const createdDateAt = new Date(data?.created_at);
    const dayDate =
        createdDateAt.getDate() +
        " " +
        createdDateAt.toLocaleDateString("en-us", { month: "short" }) +
        " " +
        createdDateAt.getFullYear();
    return (
        <Card
            className="mt-6 w-96 shadow-xl border-2 border-gray-400"
            color=""
            variant="gradient"
        >
            <CardHeader floated={false} shadow={false} color="transparent">
                <div className="flex gap-2 justify-center items-center mt-2">
                    <Avatar
                        src={
                            data?.avatar_url ||
                            "https://docs.material-tailwind.com/img/face-2.jpg"
                        }
                        alt="avatar"
                        size="xxl"
                    />
                </div>
            </CardHeader>
            <CardBody>
                <div className="flex flex-row gap-4 justify-center items-center text-center">
                    <div>
                        <p>Public Repos</p>
                        <p>{data?.public_repos || "0"}</p>
                    </div>
                    <div>
                        <p>Followers</p>
                        <p>{data?.followers || "0"}</p>
                    </div>
                    <div>
                        <p> Following </p>
                        <p>{data?.following || "0"}</p>
                    </div>
                </div>

                <Typography variant="h5" className="mb-2 text-center">
                    {data?.name || data?.login || "username"}
                </Typography>
                <Typography className="mb-2 text-center">
                    User joined on {dayDate}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0"></CardFooter>
        </Card>
    );
};

export default CardUser;

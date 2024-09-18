import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import React from "react";
import { Avatar } from "@material-tailwind/react";

const CardUser = ({}) => {
    return (
        <Card className="mt-6 w-96">
            <CardBody>
                <div className="flex gap-4">
                    <Avatar
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                        alt="avatar"
                    />
                    <Avatar
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                        alt="avatar"
                        variant="rounded"
                    />
                    <Avatar
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                        alt="avatar"
                        variant="square"
                    />
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    UI/UX Review Check
                </Typography>
                <Typography>
                    Because it&apos;s about motivating the doers. Because
                    I&apos;m here to follow my dreams and inspire others.
                </Typography>

                <div className="">
                    <div>
                        <p>Public Repos</p>
                        <p>{123}</p>
                    </div>
                    <div>
                        <p>Followers</p>
                        <p>{32}</p>
                    </div>
                    <div>
                        <p> Following </p>
                        <p>{321} </p>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="pt-0"></CardFooter>
        </Card>
    );
};

export default CardUser;

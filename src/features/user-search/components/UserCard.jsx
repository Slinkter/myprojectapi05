import React from "react";
import {
    Card,
    CardBody,
    Typography,
    Avatar,
    Button,
} from "@material-tailwind/react";
import { formatJoinDate } from "../../../utils/formatters";

// Iconos SVG como componentes de React para reutilización
const RepoIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9Zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8Z"></path></svg>
);
const FollowersIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path></svg>
);
const FollowingIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Z"></path></svg>
);


const UserStat = ({ icon: Icon, label, value }) => (
    <div className="flex flex-col items-center">
        <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400 mb-1" />
        <Typography variant="small" className="text-gray-600 dark:text-gray-400 font-normal">
            {label}
        </Typography>
        <Typography variant="h6" className="text-blue-gray-700 dark:text-gray-200 font-bold">
            {value}
        </Typography>
    </div>
);

/**
 * Tarjeta de presentación para un usuario de GitHub.
 * @param {{user: object | null}} props
 */
const UserCard = ({ user }) => {
    if (!user) {
        return null;
    }

    const {
        avatar_url,
        name,
        login,
        bio,
        created_at,
        public_repos,
        followers,
        following,
        html_url,
    } = user;

    const joinDate = formatJoinDate(created_at);

    return (
        <Card className="w-full max-w-sm shadow-lg transition-all duration-300 hover:shadow-2xl 
                       bg-white dark:bg-gray-800 
                       border border-gray-200/80 dark:border-gray-700/80">
            <CardBody className="p-6">
                <div className="flex items-center gap-5">
                    <Avatar
                        src={avatar_url || ""}
                        alt={`Avatar de ${login}`}
                        size="xxl"
                        className="border-2 border-white dark:border-gray-600 shadow-md"
                    />
                    <div className="flex-grow">
                        <Typography variant="h4" className="font-bold text-gray-800 dark:text-gray-100">
                            {name || login}
                        </Typography>
                        <Typography className="font-medium text-md text-blue-gray-500 dark:text-blue-gray-300">
                            @{login}
                        </Typography>
                         <Typography className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                            Se unió el {joinDate}
                        </Typography>
                    </div>
                </div>

                <Typography className="mt-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {bio || <span className="italic text-gray-500 dark:text-gray-400">Este usuario no ha añadido una biografía.</span>}
                </Typography>

                <div className="mt-5 flex justify-around items-center bg-gray-50/50 dark:bg-gray-700/30 rounded-lg p-3 border border-gray-200/80 dark:border-gray-700">
                    <UserStat icon={RepoIcon} label="Repos" value={public_repos || 0} />
                    <UserStat icon={FollowersIcon} label="Followers" value={followers || 0} />
                    <UserStat icon={FollowingIcon} label="Following" value={following || 0} />
                </div>
                
                <a href={html_url} target="_blank" rel="noopener noreferrer" className="block mt-6">
                    <Button
                        fullWidth
                        variant="gradient"
                        color="blue"
                        className="dark:text-white"
                    >
                        Ver Perfil en GitHub
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
};

export default UserCard;
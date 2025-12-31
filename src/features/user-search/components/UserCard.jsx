import React from "react";
import {
    Card,
    CardBody,
    Typography,
    Avatar,
    Button,
} from "@material-tailwind/react";
import { formatJoinDate } from "@/utils/formatters";

// --- Íconos para Estadísticas y Enlaces ---

const RepoIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9Zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8Z"></path></svg>
);
const FollowersIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"></path></svg>
);
const FollowingIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Z"></path></svg>
);
const ArrowUpRightIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

// --- Componentes Internos ---

const UserStat = ({ icon: Icon, label, value }) => (
    <div className="flex flex-col items-center text-center">
        <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 mb-1" />
        <Typography variant="h6" className="font-semibold text-blue-gray-800 dark:text-gray-200">
            {value}
        </Typography>
        <Typography variant="small" className="font-normal text-gray-600 dark:text-gray-400">
            {label}
        </Typography>
    </div>
);

/**
 * Tarjeta de presentación para un usuario de GitHub, estilizada de forma limpia.
 * @param {{user: object | null}} props
 */
const UserCard = ({ user }) => {
    if (!user) {
        return null;
    }

    const {
        avatar_url, name, login, bio, created_at,
        public_repos, followers, following, html_url,
    } = user;

    const joinDate = formatJoinDate(created_at);

    return (
        <Card
            variant="outlined"
            shadow={false}
            className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-300 dark:border-gray-700"
        >
            <CardBody className="p-6 sm:p-8">
                {/* Encabezado */}
                <div className="flex items-center gap-5">
                    <Avatar src={avatar_url || ""} alt={`Avatar de ${login}`} size="xxl" />
                    <div className="flex-grow">
                        <Typography as="h2" variant="h4" className="font-bold text-gray-800 dark:text-gray-100">
                            {name || login}
                        </Typography>
                        <Typography as="p" className="text-md font-normal text-blue-500 dark:text-blue-400">
                            @{login}
                        </Typography>
                        <Typography as="p" className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Se unió el {joinDate}
                        </Typography>
                    </div>
                </div>

                {/* Biografía */}
                <Typography as="p" className="mt-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {bio || <span className="italic text-gray-500">Sin biografía disponible.</span>}
                </Typography>

                {/* Estadísticas */}
                <div className="mt-8 grid grid-cols-3 gap-4 rounded-lg bg-gray-50 dark:bg-gray-900/30 p-4 border border-gray-200 dark:border-gray-700/50">
                    <UserStat icon={RepoIcon} label="Repos" value={public_repos || 0} />
                    <UserStat icon={FollowersIcon} label="Followers" value={followers || 0} />
                    <UserStat icon={FollowingIcon} label="Following" value={following || 0} />
                </div>
                
                {/* Enlace a GitHub */}
                <a href={html_url} target="_blank" rel="noopener noreferrer" className="block mt-8">
                    <Button
                        fullWidth
                        variant="outlined"
                        className="flex items-center justify-center gap-3 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                    >
                        Ver Perfil en GitHub
                        <ArrowUpRightIcon className="h-4 w-4" />
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
};

export default UserCard;
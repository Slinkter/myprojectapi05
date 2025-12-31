
import {
    Card,
    CardBody,
    Typography,
    Avatar,
    Button,
} from "@material-tailwind/react";
import { formatJoinDate } from "@/utils/formatters";
import { FiUsers, FiUserPlus, FiGitBranch, FiArrowUpRight } from "react-icons/fi";
import PropTypes from 'prop-types';


/**
 * A sub-component to display a single user statistic (e.g., Repos, Followers).
 * @param {object} props - The component props.
 * @param {React.ElementType} props.icon - The icon component to display next to the statistic.
 * @param {string} props.label - The label for the statistic (e.g., "Repos").
 * @param {number} props.value - The numerical value of the statistic.
 * @returns {JSX.Element} The user statistic display component.
 */
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

UserStat.propTypes = {
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};

/**
 * A clean-styled presentation card for a GitHub user.
 * Displays user's avatar, name, login, join date, bio, key statistics (repos, followers, following),
 * and a link to their GitHub profile.
 * @param {object} props - The component props.
 * @param {GithubUser | null} props.user - The GitHub user object to display, or null if no user is provided.
 * @returns {JSX.Element | null} The user card component or null if no user is provided.
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
            variant="filled"
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
                    <UserStat icon={FiGitBranch} label="Repos" value={public_repos || 0} />
                    <UserStat icon={FiUsers} label="Followers" value={followers || 0} />
                    <UserStat icon={FiUserPlus} label="Following" value={following || 0} />
                </div>
                
                {/* Enlace a GitHub */}
                <a href={html_url} target="_blank" rel="noopener noreferrer" className="block mt-8">
                    <Button
                        fullWidth
                        variant="outlined"
                        className="flex items-center justify-center gap-3 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                    >
                        Ver Perfil en GitHub
                        <FiArrowUpRight className="h-4 w-4" />
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
};

UserCard.propTypes = {
    user: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        name: PropTypes.string, // Can be null
        login: PropTypes.string.isRequired,
        bio: PropTypes.string, // Can be null
        created_at: PropTypes.string.isRequired,
        public_repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        html_url: PropTypes.string.isRequired,
    }),
};

export default UserCard;
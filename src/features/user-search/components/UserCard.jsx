import { Card, CardBody, Button } from "@/components/ui";
import { formatJoinDate } from "@/utils/formatters";
import {
  FiUsers,
  FiUserPlus,
  FiGitBranch,
  FiExternalLink,
} from "react-icons/fi";
import PropTypes from "prop-types";

/**
 * Minimalist user statistic display.
 */
const UserStat = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center text-center">
    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
      {value.toLocaleString()}
    </p>
    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
      <Icon className="w-4 h-4" />
      <p className="text-xs uppercase tracking-wide">{label}</p>
    </div>
  </div>
);

UserStat.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

/**
 * Minimalist GitHub user card.
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
    <Card className="w-full max-w-md bg-white dark:bg-gray-800">
      <CardBody className="p-8">
        {/* Avatar and Name */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={avatar_url || ""}
            alt={`Avatar de ${login}`}
            className="w-20 h-20 rounded-full object-cover mb-3"
          />
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {name || login}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            @{login}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            Desde {joinDate}
          </p>
        </div>

        {/* Bio */}
        {bio && (
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {bio}
          </p>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200 dark:border-gray-700 mb-6">
          <UserStat
            icon={FiGitBranch}
            label="Repos"
            value={public_repos || 0}
          />
          <UserStat icon={FiUsers} label="Followers" value={followers || 0} />
          <UserStat
            icon={FiUserPlus}
            label="Following"
            value={following || 0}
          />
        </div>

        {/* GitHub Link */}
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <Button
            fullWidth
            variant="filled"
            className="flex items-center justify-center gap-2 text-sm"
          >
            <span>Ver Perfil</span>
            <FiExternalLink className="h-4 w-4" />
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    bio: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    public_repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
  }),
};

export default UserCard;

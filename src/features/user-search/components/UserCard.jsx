import { memo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
} from "@/shared/components/ui";
import { formatJoinDate } from "@/shared/utils/formatters";
import {
  FiUsers,
  FiUserPlus,
  FiGitBranch,
  FiExternalLink,
} from "react-icons/fi";
import PropTypes from "prop-types";

/**
 * Sub-componente para mostrar una estadística individual.
 * Extraído fuera del componente principal para evitar re-definiciones en cada render.
 */
const UserStat = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center text-center group">
    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-blue-500 transition-colors">
      {value.toLocaleString()}
    </p>
    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
      <Icon className="w-4 h-4" />
      <p className="text-xs uppercase tracking-wide font-medium">{label}</p>
    </div>
  </div>
);

UserStat.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

/**
 * Tarjeta principal de presentación de usuario.
 *
 * **OPTIMIZACIONES:**
 * - Envuelto en `memo` para estabilidad referencial.
 * - `UserStat` extraído para evitar re-creación de componentes funcionales.
 * - Utiliza transiciones de Tailwind para el diseño "Aura".
 *
 * @param {object} props
 * @param {object} props.user - Datos del usuario obtenidos de la API
 * @returns {JSX.Element|null} La tarjeta renderizada o null si no hay datos
 */
const UserCard = memo(({ user }) => {
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
    <Card className="w-full max-w-md bg-white dark:bg-gray-800 transition-all duration-500 hover:shadow-xl hover:dark:shadow-blue-900/10 flex flex-col max-h-[calc(100vh-10rem)] border-transparent hover:border-blue-500/20">
      <CardHeader className="flex flex-col items-center text-center flex-shrink-0">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={avatar_url || ""}
            alt={`Avatar de ${login}`}
            className="relative w-24 h-24 rounded-full object-cover mb-3 ring-2 ring-gray-100 dark:ring-gray-700 group-hover:ring-blue-500 transition-all"
            loading="lazy"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
          {name || login}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          @{login}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500/70 mt-1">
          Desde {joinDate}
        </p>
      </CardHeader>

      <CardBody className="overflow-y-auto custom-scrollbar">
        {bio && (
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed px-2">
            {bio}
          </p>
        )}

        <div className="grid grid-cols-3 gap-4 bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-xl">
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
      </CardBody>

      <CardFooter className="flex-shrink-0 p-6">
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block"
        >
          <Button
            fullWidth
            variant="filled"
            className="flex items-center justify-center gap-2 text-sm py-3 shadow-lg shadow-blue-500/20 dark:shadow-none"
          >
            <span>Ver Perfil en GitHub</span>
            <FiExternalLink className="h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
});

UserCard.displayName = "UserCard";

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

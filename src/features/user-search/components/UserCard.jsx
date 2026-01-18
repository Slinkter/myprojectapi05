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
 * @file Tarjeta de presentación para usuariode GitHub con estadísticas y detalles.
 */

/**
 * Sub-componente para mostrar una estadística individual.
 *
 * **Funcionalidad:**
 * - Renderiza un icono, etiqueta y valor numérico de forma vertical
 * - Formatea números usando `toLocaleString` para mejor legibilidad
 *
 * @param {object} props
 * @param {React.ElementType} props.icon - Componente de icono (React Icons)
 * @param {string} props.label - Texto descriptivo (ej: "Repos")
 * @param {number} props.value - Valor numérico a mostrar
 * @returns {JSX.Element} Elemento de estadística
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
 * Tarjeta principal de presentación de usuario.
 *
 * **Funcionalidad:**
 * - Presenta la información detallada del perfil (Avatar, Bio, Stats)
 * - Muestra enlaces externos al perfil de GitHub
 * - Maneja el renderizado condicional si no hay usuario (retorna null)
 *
 * **Flujo de renderizado:**
 * 1. Verifica si la prop `user` existe
 * 2. Desestructura las propiedades necesarias
 * 3. Formatea fechas (`formatJoinDate`)
 * 4. Renderiza la UI usando componentes `Card` compuestos
 *
 * @param {object} props
 * @param {object} props.user - Datos del usuario obtenidos de la API
 * @returns {JSX.Element|null} La tarjeta renderizada o null si no hay datos
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
    <Card className="w-full max-w-md bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:dark:shadow-blue-800/20 flex flex-col max-h-[calc(100vh-10rem)]">
      <CardHeader className="flex flex-col items-center text-center flex-shrink-0">
        <img
          src={avatar_url || ""}
          alt={`Avatar de ${login}`}
          className="w-24 h-24 rounded-full object-cover mb-3"
          loading="lazy"
        />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {name || login}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          @{login}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500/70 mt-1">
          Desde {joinDate}
        </p>
      </CardHeader>

      <CardBody className="overflow-y-auto">
        {bio && (
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {bio}
          </p>
        )}

        <div className="grid grid-cols-3 gap-4">
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

      <CardFooter className="flex-shrink-0">
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            fullWidth
            variant="filled"
            className="flex items-center justify-center gap-2 text-sm"
          >
            <span>Ver Perfil</span>
            <FiExternalLink className="h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
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

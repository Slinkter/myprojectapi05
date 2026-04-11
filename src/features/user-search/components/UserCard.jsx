import { memo } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
} from "@/shared/components/ui";
import { formatJoinDate } from "@/shared/utils/formatters";
import {
  FiUsers,
  FiUserPlus,
  FiGitBranch,
} from "react-icons/fi";
import PropTypes from "prop-types";

/**
 * Variantes de animación para el sistema escalonado (Stagger).
 */
const containerVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const UserStat = ({ icon: Icon, label, value }) => (
  <motion.div 
    variants={itemVariants}
    className="flex flex-col items-center text-center group"
  >
    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-1 group-hover:text-blue-500 transition-colors tabular-nums">
      {value.toLocaleString()}
    </p>
    <div className="flex items-center gap-1.5 text-gray-500 dark:text-zinc-500">
      <Icon className="w-3.5 h-3.5" />
      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] font-bold">{label}</p>
    </div>
  </motion.div>
);

UserStat.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

/**
 * Tarjeta de usuario simplificada (Clean & Frameless).
 */
const UserCard = memo(({ user }) => {
  if (!user) return null;

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
  
  const displayName = name || login;
  const displayBio = bio || "Este aventurero prefiere mantener su biografía en secreto por ahora.";

  return (
    <motion.div
      layout
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-md px-2 sm:px-0"
    >
      <Card className="hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-gray-100 dark:border-zinc-800/50 flex flex-col overflow-hidden pb-4">
        <CardHeader className="flex flex-col items-center text-center relative pt-12 pb-6">
          <motion.a 
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="relative mb-6 cursor-alias"
            title="Ver perfil original en GitHub"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full blur-md opacity-20" />
            <img
              src={avatar_url || ""}
              alt={login}
              className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-white dark:ring-zinc-900 shadow-2xl"
            />
          </motion.a>
          
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-1 truncate max-w-full px-6">
            {displayName}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-blue-500 dark:text-blue-400 font-bold text-sm tracking-wide">
            @{login}
          </motion.p>
          <motion.p variants={itemVariants} className="text-[10px] text-gray-400 dark:text-zinc-600 mt-3 font-black tracking-[0.2em]">
            DESDE {joinDate.toUpperCase()}
          </motion.p>
        </CardHeader>

        <CardBody className="pt-0 pb-10">
          <motion.div 
            variants={itemVariants} 
            className="min-h-[70px] flex items-center justify-center mb-10"
          >
            <p className={`text-center text-sm px-6 leading-relaxed font-medium ${!bio ? "text-gray-400 dark:text-zinc-600 italic opacity-60" : "text-gray-600 dark:text-zinc-400"}`}>
              {displayBio}
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-2 bg-gray-50/50 dark:bg-zinc-950/40 p-6 rounded-[2rem] border border-gray-100/50 dark:border-zinc-800/30 mx-4 shadow-inner"
          >
            <UserStat icon={FiGitBranch} label="Repos" value={public_repos} />
            <UserStat icon={FiUsers} label="Followers" value={followers} />
            <UserStat icon={FiUserPlus} label="Following" value={following} />
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
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

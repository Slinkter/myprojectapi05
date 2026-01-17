# 🔄 Plan de Migración: Material Tailwind → Tailwind CSS Puro

**Proyecto:** myprojectapi05  
**Objetivo:** Eliminar completamente Material Tailwind y usar solo Tailwind CSS  
**Estrategia:** Migración incremental por fases para probar cada cambio

---

## 📋 Resumen de Archivos Afectados

### Archivos a Modificar (7)
1. ✅ `package.json` - Eliminar dependencia
2. ✅ `tailwind.config.js` - Remover `withMT` wrapper
3. ✅ `src/main.jsx` - Eliminar MaterialTailwindProvider
4. ✅ `src/App.jsx` - Reemplazar Typography
5. ✅ `src/components/ThemeToggle.jsx` - Reemplazar Button
6. ✅ `src/pages/UserSearchPage.jsx` - Reemplazar Spinner
7. ✅ `src/features/user-search/components/SearchBar.jsx` - Reemplazar Input y Button
8. ✅ `src/features/user-search/components/UserCard.jsx` - Reemplazar Card, Avatar, Typography
9. ✅ `src/features/user-search/components/ErrorDisplay.jsx` - Reemplazar Card, Typography

### Componentes Material Tailwind a Reemplazar
- `Typography` → `<h1>`, `<p>`, etc. con clases Tailwind
- `Button` → `<button>` con clases Tailwind
- `Input` → `<input>` con clases Tailwind
- `Card` / `CardBody` → `<div>` con clases Tailwind
- `Avatar` → `<img>` con clases Tailwind
- `Spinner` → SVG animado o componente custom

---

## 🎯 FASE 1: Preparación y Configuración

### Objetivo
Limpiar configuración y crear componentes base de Tailwind puro.

### Pasos

#### 1.1 Crear Componentes Tailwind Puros

**Crear:** `src/components/ui/Button.jsx`
```jsx
import PropTypes from 'prop-types';

/**
 * Custom Button component using pure Tailwind CSS.
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button variant: 'filled' | 'outlined' | 'text'
 * @param {string} props.size - Button size: 'sm' | 'md' | 'lg'
 * @param {boolean} props.fullWidth - Whether button should be full width
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {function} props.onClick - Click handler
 * @returns {JSX.Element}
 */
const Button = ({ 
  children, 
  variant = 'filled', 
  size = 'md', 
  fullWidth = false,
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    filled: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500',
    outlined: 'border-2 border-gray-400 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',
    text: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${disabled ? disabledStyles : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['filled', 'outlined', 'text']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
```

**Crear:** `src/components/ui/Input.jsx`
```jsx
import PropTypes from 'prop-types';

/**
 * Custom Input component using pure Tailwind CSS.
 */
const Input = ({ 
  label, 
  error = false, 
  disabled = false,
  className = '',
  containerProps = {},
  ...props 
}) => {
  const baseStyles = 'w-full px-3 py-2 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2';
  const normalStyles = 'border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100';
  const errorStyles = 'border-red-500 focus:border-red-500 focus:ring-red-500';
  const disabledStyles = 'bg-gray-100 cursor-not-allowed dark:bg-gray-900';
  
  return (
    <div className={`relative ${containerProps.className || ''}`}>
      <input
        className={`${baseStyles} ${error ? errorStyles : normalStyles} ${disabled ? disabledStyles : ''} ${className}`}
        placeholder={label}
        disabled={disabled}
        {...props}
      />
      {label && (
        <label className="absolute -top-2 left-2 px-1 text-xs bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
          {label}
        </label>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  containerProps: PropTypes.object,
};

export default Input;
```

**Crear:** `src/components/ui/Card.jsx`
```jsx
import PropTypes from 'prop-types';

/**
 * Custom Card component using pure Tailwind CSS.
 */
export const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const CardBody = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
```

**Crear:** `src/components/ui/Spinner.jsx`
```jsx
import PropTypes from 'prop-types';

/**
 * Custom Spinner component using pure Tailwind CSS.
 */
const Spinner = ({ size = 'md', color = 'blue', className = '' }) => {
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };
  
  const colors = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white',
  };
  
  return (
    <div
      className={`${sizes[size]} border-4 border-t-transparent ${colors[color]} rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['blue', 'gray', 'white']),
  className: PropTypes.string,
};

export default Spinner;
```

**Crear:** `src/components/ui/index.js`
```javascript
export { default as Button } from './Button';
export { default as Input } from './Input';
export { Card, CardBody } from './Card';
export { default as Spinner } from './Spinner';
```

#### 1.2 Actualizar Tailwind Config

**Modificar:** `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
```

### ✅ Verificación Fase 1
- [ ] Componentes UI creados en `src/components/ui/`
- [ ] `tailwind.config.js` actualizado (sin `withMT`)
- [ ] Ejecutar `pnpm run dev` - debe compilar sin errores

---

## 🎯 FASE 2: Migrar Componentes Principales

### Objetivo
Reemplazar Material Tailwind en componentes core (App, ThemeToggle, main).

### Pasos

#### 2.1 Migrar App.jsx

**Modificar:** `src/App.jsx`
```jsx
import UserSearchPage from "@/pages/UserSearchPage";

/**
 * Main application component.
 * It sets up the global layout, header, and renders the main feature page.
 * @returns {JSX.Element} The root application component.
 */
const App = () => {
  return (
    <div className="min-h-dvh w-full bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 antialiased">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
          GitHub Explorer
        </h1>
        <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
          Encuentra perfiles de desarrolladores de todo el mundo.
        </p>
      </header>

      <UserSearchPage />
    </div>
  );
};

export default App;
```

#### 2.2 Migrar ThemeToggle.jsx

**Modificar:** `src/components/ThemeToggle.jsx`
```jsx
import { useTheme } from "@/context/useTheme";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * A floating action button component that allows users to toggle between light and dark themes.
 * It displays a moon icon for light theme and a sun icon for dark theme.
 * @returns {JSX.Element} The ThemeToggle button component.
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50
                       bg-gray-800 text-white 
                       dark:bg-yellow-400 dark:text-gray-900
                       hover:bg-gray-700 dark:hover:bg-yellow-500
                       transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-yellow-500"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="w-8 h-8" />
      ) : (
        <FiSun className="w-8 h-8" />
      )}
    </button>
  );
};

export default ThemeToggle;
```

#### 2.3 Migrar main.jsx

**Modificar:** `src/main.jsx`
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "./index.css";
import { ThemeProvider } from "@/context/ThemeContext.jsx";
import ThemeToggle from "@/components/ThemeToggle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
            <ThemeToggle />
        </ThemeProvider>
    </React.StrictMode>
);
```

### ✅ Verificación Fase 2
- [ ] App carga correctamente
- [ ] Header se ve bien
- [ ] ThemeToggle funciona (cambio de tema)
- [ ] No hay errores en consola

---

## 🎯 FASE 3: Migrar Feature Components

### Objetivo
Reemplazar Material Tailwind en componentes de búsqueda de usuarios.

### Pasos

#### 3.1 Migrar UserSearchPage.jsx

**Modificar:** `src/pages/UserSearchPage.jsx`
```jsx
import { useEffect } from "react";
import { Spinner } from "@/components/ui";
import { useGithubUser } from "@/features/user-search/hooks/useGithubUser";
import SearchBar from "@/features/user-search/components/SearchBar";
import UserCard from "@/features/user-search/components/UserCard";
import ErrorDisplay from "@/features/user-search/components/ErrorDisplay";

/**
 * Renders the user search page, including the search bar, user card, and error display.
 * This component orchestrates the user search feature by using the `useGithubUser` hook.
 * @returns {JSX.Element} The user search page component.
 */
const UserSearchPage = () => {
  const { user, isLoading, error, searchUser } = useGithubUser();

  // Cargar un usuario por defecto al iniciar la aplicación
  useEffect(() => {
    searchUser("slinkter");
  }, [searchUser]);

  return (
    <main className="w-full max-w-md">
      <SearchBar
        onSearch={searchUser}
        isLoading={isLoading}
        hasError={!!error}
      />

      <div className="mt-10 min-h-[420px] flex justify-center items-start">
        {isLoading && (
          <div className="flex justify-center pt-10">
            <Spinner size="md" color="blue" />
          </div>
        )}

        {error && <ErrorDisplay error={error} />}

        {!isLoading && !error && user && <UserCard user={user} />}
      </div>
    </main>
  );
};

export default UserSearchPage;
```

#### 3.2 Migrar SearchBar.jsx

**Modificar:** `src/features/user-search/components/SearchBar.jsx`
```jsx
import { useState, useEffect } from 'react';
import { Button, Input } from "@/components/ui";
import { FiSearch } from "react-icons/fi";
import PropTypes from 'prop-types';

/**
 * Search bar component for finding GitHub users.
 */
const SearchBar = ({ onSearch, isLoading }) => {
    const [searchText, setSearchText] = useState("");
    const [validationError, setValidationError] = useState(false);

    useEffect(() => {
        if (searchText && validationError) {
            setValidationError(false);
        }
    }, [searchText, validationError]);

    const handleSearch = () => {
        if (searchText.trim() === "") {
            setValidationError(true);
            return;
        }
        onSearch(searchText);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    
    const isDisabled = isLoading;

    return (
        <div className="relative flex w-full max-w-md">
            <Input
                type="text"
                label="Buscar usuario de GitHub..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pr-20"
                containerProps={{
                    className: `min-w-0 ${validationError ? "animate-shake" : ""}`,
                }}
                error={validationError}
                disabled={isDisabled}
            />
            <Button
                size="sm"
                className="!absolute right-1 top-1/2 -translate-y-1/2 rounded"
                onClick={handleSearch}
                disabled={isDisabled}
            >
                <FiSearch className="h-5 w-5" />
            </Button>
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
};

export default SearchBar;
```

#### 3.3 Migrar UserCard.jsx

**Modificar:** `src/features/user-search/components/UserCard.jsx`
```jsx
import { Card, CardBody, Button } from "@/components/ui";
import { formatJoinDate } from "@/utils/formatters";
import { FiUsers, FiUserPlus, FiGitBranch, FiArrowUpRight } from "react-icons/fi";
import PropTypes from 'prop-types';

/**
 * A sub-component to display a single user statistic.
 */
const UserStat = ({ icon: Icon, label, value }) => (
    <div className="flex flex-col items-center text-center">
        <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 mb-1" />
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {value}
        </p>
        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            {label}
        </p>
    </div>
);

UserStat.propTypes = {
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};

/**
 * A clean-styled presentation card for a GitHub user.
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
        <Card className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardBody className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center gap-5">
                    <img 
                        src={avatar_url || ""} 
                        alt={`Avatar de ${login}`}
                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
                    />
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                            {name || login}
                        </h2>
                        <p className="text-md font-normal text-blue-500 dark:text-blue-400">
                            @{login}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Se unió el {joinDate}
                        </p>
                    </div>
                </div>

                {/* Bio */}
                <p className="mt-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {bio || <span className="italic text-gray-500">Sin biografía disponible.</span>}
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4 rounded-lg bg-gray-50 dark:bg-gray-900/30 p-4 border border-gray-200 dark:border-gray-700/50">
                    <UserStat icon={FiGitBranch} label="Repos" value={public_repos || 0} />
                    <UserStat icon={FiUsers} label="Followers" value={followers || 0} />
                    <UserStat icon={FiUserPlus} label="Following" value={following || 0} />
                </div>
                
                {/* GitHub Link */}
                <a href={html_url} target="_blank" rel="noopener noreferrer" className="block mt-8">
                    <Button
                        fullWidth
                        variant="outlined"
                        className="flex items-center justify-center gap-3"
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
```

#### 3.4 Migrar ErrorDisplay.jsx

**Modificar:** `src/features/user-search/components/ErrorDisplay.jsx`
```jsx
import { Card, CardBody } from "@/components/ui";
import { FiAlertTriangle } from "react-icons/fi";
import PropTypes from 'prop-types';

/**
 * A component to display error messages.
 */
const ErrorDisplay = ({ error }) => {
    let title;
    let message;

    switch (error) {
        case "Usuario no encontrado.":
            title = "Usuario No Encontrado";
            message = "Parece que el usuario que buscas no existe. Por favor, revisa el nombre e inténtalo de nuevo.";
            break;
        case "Límite de tasa de la API excedido. Inténtalo más tarde.":
            title = "Límite de API Excedido";
            message = "Has excedido el límite de solicitudes. Por favor, espera un momento antes de volver a intentarlo.";
            break;
        default:
            title = "Ocurrió un Error";
            message = "Hubo un problema al contactar con la API de GitHub. Revisa tu conexión a internet.";
    }

    return (
        <Card className="w-full max-w-sm bg-red-50 text-red-700 border border-red-200 shadow-lg 
                       dark:bg-red-900/20 dark:text-red-300 dark:border-red-500/30">
            <CardBody className="flex flex-col items-center text-center p-6">
                 <FiAlertTriangle className="w-12 h-12 text-red-400 dark:text-red-500/80 mb-4" />
                <h3 className="text-xl text-red-800 dark:text-red-200 font-bold mb-2">
                    {title}
                </h3>
                <p className="text-red-700 dark:text-red-300">
                    {message}
                </p>
            </CardBody>
        </Card>
    );
};

ErrorDisplay.propTypes = {
    error: PropTypes.string.isRequired,
};

export default ErrorDisplay;
```

### ✅ Verificación Fase 3
- [ ] Búsqueda de usuarios funciona
- [ ] UserCard se renderiza correctamente
- [ ] ErrorDisplay muestra errores correctamente
- [ ] Spinner aparece durante carga
- [ ] Todos los estilos se ven bien en light/dark mode

---

## 🎯 FASE 4: Limpieza Final

### Objetivo
Eliminar completamente Material Tailwind del proyecto.

### Pasos

#### 4.1 Desinstalar Dependencia

```bash
pnpm remove @material-tailwind/react
```

#### 4.2 Verificar Build

```bash
pnpm run build
```

### ✅ Verificación Fase 4
- [ ] Build completa sin errores
- [ ] No hay referencias a `@material-tailwind` en el código
- [ ] `package.json` no tiene la dependencia
- [ ] Aplicación funciona 100% con Tailwind puro

---

## 📊 Checklist de Migración Completa

### Configuración
- [ ] Componentes UI creados (`Button`, `Input`, `Card`, `Spinner`)
- [ ] `tailwind.config.js` actualizado
- [ ] `package.json` limpio

### Componentes Migrados
- [ ] `App.jsx`
- [ ] `ThemeToggle.jsx`
- [ ] `main.jsx`
- [ ] `UserSearchPage.jsx`
- [ ] `SearchBar.jsx`
- [ ] `UserCard.jsx`
- [ ] `ErrorDisplay.jsx`

### Verificación Final
- [ ] `pnpm run dev` funciona
- [ ] `pnpm run build` funciona
- [ ] `pnpm run lint` sin errores
- [ ] Funcionalidad completa preservada
- [ ] Estilos idénticos o mejorados

---

## 🚀 Orden de Ejecución Recomendado

1. **FASE 1** → Crear componentes UI + actualizar config
2. **Probar:** `pnpm run dev`
3. **FASE 2** → Migrar App, ThemeToggle, main
4. **Probar:** Verificar header y tema
5. **FASE 3** → Migrar feature components
6. **Probar:** Búsqueda completa
7. **FASE 4** → Desinstalar Material Tailwind
8. **Probar:** Build final

---

## ⚠️ Notas Importantes

- Cada fase es independiente y se puede probar por separado
- Si algo falla, puedes revertir solo esa fase
- Los estilos están diseñados para mantener la apariencia actual
- Dark mode está completamente soportado
- Todos los componentes tienen PropTypes

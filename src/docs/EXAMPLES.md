# 📓 Ejercicios y Ejemplos: GitHub Explorer

**Versión:** 1.0.0
**Fecha:** 17 de Enero, 2026

---

## 1. Propósito

Este documento proporciona ejemplos de código, ejercicios prácticos y guías paso a paso para ayudar a los desarrolladores a entender y extender la funcionalidad del proyecto **GitHub Explorer**.

---

## 2. Ejemplos de Código Clave

### 2.1. Uso del Contexto de Búsqueda

Para acceder al estado de la búsqueda (usuario, carga, error) y a la función para buscar, se utiliza el hook `useUserSearch` desde cualquier componente hijo del `UserSearchProvider`.

**`src/features/user-search/pages/UserSearchPage.jsx`**
```jsx
import { useUserSearch } from "@/features/user-search/context";

const UserSearchPage = () => {
  // 1. Se consume el contexto
  const { user, isLoading, error, searchUser } = useUserSearch();

  // 2. Se usa la función de búsqueda
  const handleSearch = (username) => {
    searchUser(username);
  };

  // 3. Se renderiza condicionalmente según el estado
  if (isLoading) {
    return <p>Cargando...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (user) {
    return <div>{user.name}</div>;
  }
  return <p>Busca un usuario.</p>;
};
```

### 2.2. Creación de un Componente de UI Compartido

Los componentes de UI reutilizables se crean en `src/shared/components/ui`. Deben ser genéricos y personalizables a través de props.

**`src/shared/components/ui/Button.jsx`**
```jsx
import PropTypes from 'prop-types';

/**
 * @param {object} props
 * @param {'sm' | 'md' | 'lg'} props.size - Tamaño del botón
 * @param {boolean} props.fullWidth - Si el botón debe ocupar todo el ancho
 * @param {React.ReactNode} props.children - Contenido del botón
 */
const Button = ({ size = 'md', fullWidth = false, children, ...props }) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        font-bold text-white bg-blue-600 rounded-lg
        hover:bg-blue-700 transition-colors
      `}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
```

---

## 3. Ejercicios Prácticos

### Ejercicio 1: Añadir Información de Ubicación a `UserCard`

**Objetivo:** Modificar `UserCard` para mostrar la ubicación (`location`) del usuario si está disponible.

**Pasos:**

1.  **Abrir `UserCard.jsx`:** Navega a `src/features/user-search/components/UserCard.jsx`.
2.  **Desestructurar `location`:** Añade `location` a la desestructuración del objeto `user`.
    ```jsx
    const {
      // ... otras propiedades
      location,
    } = user;
    ```
3.  **Añadir el JSX:** Justo debajo del alias (`@login`), añade un nuevo elemento `<p>` que solo se renderice si `location` existe.
    ```jsx
    // ... dentro de CardHeader
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
      @{login}
    </p>
    {location && (
      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
        <FiMapPin className="w-3 h-3" /> {/* Necesitarás importar FiMapPin de react-icons/fi */}
        {location}
      </p>
    )}
    <p className="text-xs text-gray-400 dark:text-gray-500/70 mt-1">
      Desde {joinDate}
    </p>
    ```
4.  **Importar el icono:** No olvides importar `FiMapPin` desde `react-icons/fi`.
5.  **Verificar:** Realiza una búsqueda de un usuario que tenga una ubicación definida (ej. "gaearon") y comprueba que se muestra correctamente.

---

### Ejercicio 2: Crear una Nueva Feature (Ej. "Historial de Búsqueda")

**Objetivo:** Entender cómo añadir una nueva funcionalidad siguiendo la arquitectura del proyecto.

**Pasos Conceptuales:**

1.  **Crear Carpeta de Feature:** Crea un nuevo directorio `src/features/search-history`.
2.  **Definir Componentes:** Dentro de `search-history`, crea una carpeta `components`. Podrías tener un componente `HistoryList.jsx` que muestre una lista de los usuarios buscados.
3.  **Gestionar Estado con Context:** Crea una carpeta `context` con un `SearchHistoryContext.jsx`. Este contexto podría almacenar un array de los nombres de usuario buscados.
    *   El `Provider` de este contexto debería envolver `App.jsx` en `main.jsx`, justo como `UserSearchProvider`.
4.  **Modificar `useGithubUser`:** Actualiza el hook `useGithubUser` para que, después de cada búsqueda exitosa, llame a una función del `SearchHistoryContext` para añadir el nuevo `username` al historial.
5.  **Renderizar el Componente:** Importa y renderiza `HistoryList` en `UserSearchPage.jsx` o donde consideres apropiado (ej. en una barra lateral).

Este ejercicio demuestra cómo la arquitectura basada en features permite añadir nuevas funcionalidades de forma aislada y modular.

---

## 4. Guía de Estilo Rápida

*   **Componentes:** Siempre en `PascalCase`. Archivo y componente deben tener el mismo nombre.
*   **Funciones y Variables:** Siempre en `camelCase`.
*   **JSDoc:** Documenta cada componente y función exportada. Explica el `@file`, `@param`, `@returns`.
*   **Tailwind CSS:**
    *   Usa clases de utilidad siempre que sea posible.
    *   Mantén un orden lógico de clases (ej. layout, espaciado, tipografía, colores).
    *   Usa `dark:` para estilos de modo oscuro.
    *   Usa `hover:`, `focus:`, `group-hover:` para interactividad.
    *   Usa `sm:`, `md:`, `lg:` para estilos responsivos (mobile-first).

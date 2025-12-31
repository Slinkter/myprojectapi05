# Guía de Desarrollo

Esta guía está destinada a desarrolladores que deseen contribuir, mantener o entender la estructura interna del proyecto.

## 1. Filosofía de Desarrollo

-   **Código Limpio**: Escribe código que sea fácil de leer y entender. Usa nombres de variables y funciones descriptivos.
-   **Componentes Pequeños**: Prefiere componentes pequeños con una única responsabilidad.
-   **Abstracción de Lógica**: Encapsula la lógica de estado y los efectos secundarios en hooks personalizados. Aísla la comunicación con APIs en la capa de servicios.
-   **Consistencia**: Sigue las convenciones de estilo y estructura ya establecidas en el proyecto.

## 2. Estructura de Carpetas (`src`)

La estructura de `src` está organizada por conceptos y features para promover la escalabilidad y la separación de responsabilidades.

```
/src
├── /components/           # Componentes de UI globales y reutilizables (ej. ThemeToggle).
├── /context/              # React Contexts para estado global (ej. ThemeContext).
├── /features/             # Módulos de funcionalidades específicas (features).
│   └── /user-search/      # Feature: Búsqueda de usuarios.
│       ├── /components/   # Componentes específicos de esta feature.
│       └── /hooks/        # Hooks específicos de esta feature.
├── /services/             # Lógica de comunicación con APIs externas.
├── /utils/                # Funciones de utilidad puras y reutilizables (ej. formateadores).
├── App.jsx                # Componente raíz, layout principal y enrutador (si lo hubiera).
├── index.css              # Estilos globales y directivas de Tailwind CSS.
└── main.jsx               # Punto de entrada de la aplicación React.
```

## 3. Flujo de Trabajo para Añadir una Nueva Feature

Si deseas añadir una nueva funcionalidad (ej. "visualizador de repositorios"), sigue estos pasos:

1.  **Crear Carpeta de Feature**: Dentro de `src/features`, crea una nueva carpeta para tu feature (ej. `src/features/repo-viewer`).
2.  **Crear Componentes**: Desarrolla los componentes de React necesarios para la UI de tu feature dentro de `src/features/repo-viewer/components`.
3.  **Crear Hook de Lógica**: Si la feature requiere su propio estado o interactúa con una API, crea un hook personalizado (ej. `useRepoData.js`) dentro de `src/features/repo-viewer/hooks`.
4.  **Añadir Servicio (si es necesario)**: Si necesitas comunicarte con un nuevo endpoint de la API, añade una nueva función al servicio correspondiente en `src/services` o crea un nuevo archivo de servicio.
5.  **Integrar en la App**: Importa y utiliza el componente principal de tu nueva feature en `App.jsx` o en el componente de página que corresponda.

## 4. Convenciones de Código

### Nombrado
-   **Componentes**: `PascalCase` (ej. `UserCard.jsx`).
-   **Hooks**: `camelCase` con el prefijo `use` (ej. `useGithubUser.js`).
-   **Funciones de Servicio/Utilidad**: `camelCase` (ej. `fetchUser.js`, `formatJoinDate.js`).
-   **Archivos**: El nombre del archivo debe coincidir con el del componente/hook/función principal que exporta.

### Estilo de Código
-   **ESLint**: El proyecto está configurado con ESLint. Asegúrate de que tu código no produzca errores de linting ejecutando `npm run lint`.
-   **Formato**: Se sigue un formato de código consistente (similar a Prettier). Utiliza 2 espacios para la indentación.
-   **Importaciones**: Organiza las importaciones en el siguiente orden:
    1.  Librerías externas (ej. `react`).
    2.  Componentes de librerías de UI (ej. `@material-tailwind/react`).
    3.  Importaciones absolutas del proyecto (ej. `from 'features/user-search/hooks/useGithubUser'`).
    4.  Importaciones relativas (ej. `from '../utils/formatters'`).

### Comentarios y Documentación
-   **JSDoc**: Utiliza JSDoc para documentar el propósito y los parámetros de funciones, hooks y componentes, especialmente aquellos que son reutilizables o complejos.

    ```javascript
    /**
     * Hook personalizado para buscar usuarios de GitHub.
     * @returns {{
     *  user: object | null,
     *  isLoading: boolean,
     *  error: string | null,
     *  searchUser: (username: string) => Promise<void>
     * }}
     */
    export const useGithubUser = () => {
      // ...
    };
    ```

## 5. Manejo de Estado

-   **Estado Local**: Para estado que solo afecta a un componente (ej. el valor de un input), usa `useState` dentro de ese mismo componente.
-   **Estado de Feature (Co-localizado)**: Para estado que es compartido por varios componentes dentro de una misma feature, encapsúlalo en un hook personalizado.
-   **Estado Global**: Para estado que debe ser accesible por toda la aplicación (ej. tema, información de usuario autenticado), utiliza `React.Context`.

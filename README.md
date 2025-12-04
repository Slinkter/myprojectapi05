# Visor de Perfiles de GitHub (API 05)

Este proyecto es un visor de perfiles de usuario de GitHub construido con React, Vite y Tailwind CSS. La aplicación permite a los usuarios buscar perfiles de GitHub y ver información clave como su nombre, avatar, estadísticas de repositorios y seguidores.

![Captura de pantalla de la aplicación](./api05.jpeg)

## ✨ Core Technologies

-   **React (v18.2)**: Para la construcción de la interfaz de usuario.
-   **Vite**: Como herramienta de desarrollo y empaquetado, ofreciendo un entorno de desarrollo ultrarrápido.
-   **Tailwind CSS**: Para el diseño de la interfaz, utilizando un enfoque utility-first.
-   **@material-tailwind/react**: Biblioteca de componentes de React que implementa Material Design 2 y es compatible con Tailwind CSS.
-   **ESLint**: Para el análisis estático de código, asegurando la calidad y consistencia del código.

## 🏛️ Arquitectura del Sistema

La arquitectura del proyecto ha sido refactorizada para seguir principios de **Clean Architecture** y **Feature-Based Architecture**, mejorando la escalabilidad, mantenibilidad y separación de conceptos.

### Principales Decisiones de Diseño

1.  **Estructura Basada en Features**: El código está organizado por funcionalidades (`features`). Toda la lógica relacionada con la búsqueda de usuarios de GitHub (`user-search`) se encuentra encapsulada en su propio módulo, incluyendo sus componentes y hooks específicos.
2.  **Separación de la Lógica de UI y de Negocio**:
    -   **Hooks Personalizados (`useGithubUser`)**: La lógica de negocio, el manejo del estado del servidor (datos de la API, carga, errores) y las llamadas a la API se abstraen en un hook personalizado. Esto permite que los componentes de la UI sean más "tontos" y se centren únicamente en la presentación.
    -   **Capa de Servicios (`services`)**: La comunicación directa con la API de GitHub está aislada en una capa de servicio (`services/github.js`). Esto desacopla la lógica de obtención de datos de la implementación específica de `fetch` y facilita las pruebas y el mantenimiento.
3.  **Componentes Atómicos y Reutilizables**: Se ha descompuesto la UI en componentes pequeños y con una única responsabilidad (ej: `SearchBar`, `UserCard`, `ErrorDisplay`). Los componentes compartidos se pueden ubicar en `src/components`, mientras que los específicos de una feature residen dentro de su carpeta.

### Estructura de Carpetas

```
/src
├── /features
│   └── /user-search       # Feature principal: Búsqueda de usuarios
│       ├── /components    # Componentes específicos de esta feature
│       │   ├── ErrorDisplay.jsx
│       │   ├── SearchBar.jsx
│       │   └── UserCard.jsx
│       └── /hooks         # Hooks específicos de esta feature
│           └── useGithubUser.js
├── /services              # Lógica de comunicación con APIs externas
│   └── github.js
├── /utils                 # Funciones de utilidad reutilizables
│   └── formatters.js
├── App.jsx                # Componente raíz y layout principal
├── index.css              # Estilos globales y configuración de Tailwind
└── main.jsx               # Punto de entrada de la aplicación
```

## 🚀 Instalación y Ejecución

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

**1. Clonar el repositorio:**

```bash
git clone <URL_DEL_REPOSITORIO>
cd myprojectapi05
```

**2. Instalar dependencias:**

Se recomienda usar `pnpm` o `npm`.

```bash
npm install
```
*(Nota: Al ejecutar `npm install`, se eliminarán las dependencias no utilizadas como `react-router-dom` que se limpiaron durante la refactorización).*

**3. Ejecutar el servidor de desarrollo:**

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite indique).

**4. Build para Producción:**

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos resultantes se encontrarán en el directorio `dist/`.

## ✅ Buenas Prácticas Aplicadas

-   **Principio de Responsabilidad Única (SRP)**: El `App.jsx` monolítico fue descompuesto. La lógica de estado está en el hook `useGithubUser`, la lógica de API en `services`, y la UI en componentes dedicados.
-   **Don't Repeat Yourself (DRY)**: La lógica de formato de fechas se extrajo a una función de utilidad en `utils/formatters.js`.
-   **Abstracción de Lógica Compleja**: Toda la complejidad del manejo de estados asíncronos (loading, error, data) está encapsulada en el hook `useGithubUser`, haciendo que `App.jsx` sea declarativo y fácil de leer.
-   **Clean Code**: Se han mejorado los nombres de variables y componentes, se han añadido comentarios JSDoc y se ha eliminado código innecesario.

## ↔️ Comparación: Antes y Después de la Refactorización

| Aspecto | Antes | Después (Recomendado) |
| :--- | :--- | :--- |
| **Estructura** | Archivos sueltos en `src/` y `src/components`. | Arquitectura basada en features, con separación clara de `services`, `hooks` y `utils`. |
| **Componente `App.jsx`** | Más de 100 líneas, con lógica de API, estado y múltiples definiciones de componentes. | Menos de 40 líneas, actúa como un simple orquestador de componentes. |
| **Manejo de Estado** | Múltiples `useState` para `data`, `loading`, `error`, etc. | Un único hook `useGithubUser` que devuelve el estado de forma controlada. |
| **Llamada a API** | `fetch` dentro de un `useCallback` en `App.jsx`. | Aislada en `services/github.js`, fácilmente mockeable para tests. |
| **Reutilización** | Baja. `ErroShow` y la barra de búsqueda estaban acoplados a `App.jsx`. | Alta. `SearchBar`, `UserCard` y `ErrorDisplay` son componentes independientes y reutilizables. |

## 🗺️ Roadmap y Mejoras Futuras

-   **Migración a TypeScript**: Como se solicitó, el siguiente gran paso es migrar el proyecto a TypeScript para añadir tipado estático y mejorar la robustez.
-   **Testing**: Añadir tests unitarios para los servicios (`github.js`) y los hooks (`useGithubUser`), y tests de integración para el flujo de búsqueda. Se podría usar `Vitest` y `React Testing Library`.
-   **Paginación o Scroll Infinito**: Para usuarios con muchos repositorios o para listas de resultados de búsqueda.
-   **Gestión de Estado Avanzada**: Aunque `useReducer` podría ser una opción, para una escalabilidad mayor se podría integrar una librería como **Zustand** o **Redux Toolkit** si el estado global crece.
-   **Optimistic UI**: Al dar "follow" o "star" a un repo, la UI podría actualizarse instantáneamente mientras la petición a la API se completa en segundo plano.
-   **Autenticación**: Permitir a los usuarios iniciar sesión con su cuenta de GitHub para realizar acciones y aumentar el límite de la API.
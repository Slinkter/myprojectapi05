# Changelog

Todos los cambios notables en este proyecto se documentarán en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-31

Esta es la primera versión estable del proyecto después de una importante refactorización arquitectónica y la generación de la documentación completa.

### Added (Añadido)
-   **Arquitectura Limpia**: Se implementó una arquitectura basada en features, separando la lógica en capas de Vista, Lógica de UI (Hooks) y Servicios.
-   **Hook `useGithubUser`**: Se creó un hook personalizado para encapsular toda la lógica de estado y de servidor de la feature de búsqueda de usuarios.
-   **Capa de Servicios**: Se aisló toda la comunicación con la API de GitHub en `src/services/github.js`.
-   **Componentes de UI Atómicos**: Se descompuso la interfaz en componentes de responsabilidad única como `UserCard`, `SearchBar` y `ErrorDisplay`.
-   **Manejo de Errores Mejorado**: Se añadieron mensajes de error específicos para "Usuario no encontrado" y "Límite de API excedido".
-   **Tema Oscuro/Claro**: Se implementó un `ThemeContext` para permitir el cambio de tema y su persistencia en `localStorage`.
-   **Documentación Completa**: Se ha generado un set completo de documentación técnica y de arquitectura en el directorio `/docs`.
-   **Linting**: Se ha configurado ESLint para asegurar la calidad y consistencia del código.

### Changed (Cambiado)
-   **Refactorización de `App.jsx`**: El componente `App.jsx` fue completamente refactorizado, pasando de ser un componente monolítico a un simple orquestador de la UI.
-   **Estructura de Carpetas**: El proyecto ahora sigue una estructura `feature-sliced`, con carpetas para `features`, `services`, `utils`, `context`, etc.
-   **README.md**: El `README.md` principal ha sido actualizado para ser más conciso y actuar como un punto de entrada a la documentación completa.

### Removed (Eliminado)
-   Se eliminó lógica de estado y de llamadas a `fetch` del interior del componente `App.jsx`.
-   Se eliminaron las dependencias no utilizadas del proyecto.

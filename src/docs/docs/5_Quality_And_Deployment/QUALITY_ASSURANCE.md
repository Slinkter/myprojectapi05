# Estrategia de Calidad y Pruebas

Este documento define las herramientas, estándares y procesos implementados para asegurar la calidad del software.

## 1. Calidad del Código

La calidad del código es la primera línea de defensa contra los bugs y el deterioro del software. Se apoya en dos pilares principales:

### 1.1. Análisis Estático de Código (Linting)

-   **Herramienta**: **ESLint**
-   **Configuración**: El proyecto está configurado con un archivo `.eslintrc.cjs` que define un conjunto de reglas para mantener la consistencia, prevenir errores comunes y forzar buenas prácticas.
-   **Integración**:
    -   **En Desarrollo**: ESLint se integra con Vite para mostrar advertencias y errores directamente en la consola mientras se desarrolla.
    -   **Manualmente**: Se puede ejecutar un análisis completo de todo el proyecto con el siguiente comando:
        ```bash
        npm run lint
        ```
-   **Objetivo**: Todo el código nuevo que se integre al proyecto no debe introducir ninguna nueva advertencia o error de ESLint.

### 1.2. Revisión de Código (Code Review)

-   **Proceso**: Aunque este es un proyecto individual, en un entorno de equipo, todo código nuevo debería pasar por un proceso de Pull Request (PR) y ser revisado por al menos otro desarrollador.
-   **Criterios de Revisión**:
    -   ¿El código cumple con los requerimientos?
    -   ¿Sigue las guías de arquitectura y estilo del proyecto?
    -   ¿Es legible y fácil de entender?
    -   ¿Maneja correctamente los casos de error?
    -   ¿Introduce nueva deuda técnica?

## 2. Estrategia de Pruebas (Testing)

Actualmente, el proyecto no cuenta con un arnés de pruebas automatizadas. La siguiente estrategia define los pasos a seguir para implementar una cobertura de pruebas adecuada.

### 2.1. Herramientas Recomendadas

-   **Framework de Pruebas**: **Vitest**. Es un framework de testing moderno y extremadamente rápido, diseñado para funcionar con Vite. Es compatible con la API de Jest.
-   **Librería de Pruebas de Componentes**: **React Testing Library**. Permite probar componentes de React de la manera en que los usuarios los utilizan, interactuando con el DOM en lugar de con los detalles de implementación interna.

### 2.2. Tipos de Pruebas a Implementar

La estrategia de pruebas debe seguir la pirámide de testing, priorizando las pruebas unitarias.

#### a) Pruebas Unitarias (Unit Tests)

-   **Objetivo**: Probar las piezas más pequeñas y aisladas de la lógica de la aplicación.
-   **Candidatos Principales**:
    -   **Funciones de Utilidad (`src/utils`)**: Probar que `formatJoinDate` formatea correctamente diferentes fechas.
    -   **Capa de Servicios (`src/services`)**: Probar que `fetchUser` construye la URL correctamente y maneja diferentes respuestas de `fetch` (éxito, error 404, etc.). Esto se haría utilizando *mocks* para la función `fetch` global.

#### b) Pruebas de Integración (Integration Tests)

-   **Objetivo**: Probar cómo colaboran varias unidades de código juntas.
-   **Candidatos Principales**:
    -   **Hook `useGithubUser`**: Probar el hook en su conjunto, verificando que los cambios de estado (`isLoading`, `error`, `user`) ocurren correctamente en respuesta a la llamada a `searchUser` y al resultado (mockeado) del servicio.
    -   **Flujo de Búsqueda Completo**: Probar la integración desde que el usuario escribe en `SearchBar`, hace clic en "Buscar", y ve la `UserCard` o el `ErrorDisplay` correspondiente. Esto se haría renderizando el componente `App` y simulando eventos de usuario.

#### c) Pruebas de Extremo a Extremo (End-to-End Tests) - (Opcional)

-   **Objetivo**: Probar la aplicación completa en un navegador real.
-   **Herramientas**: Cypress o Playwright.
-   **Alcance**: Para un proyecto de esta escala, las pruebas E2E pueden ser excesivas, pero podrían añadirse en el futuro para validar los flujos más críticos de forma automática.

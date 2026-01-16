# Roadmap del Proyecto

Este documento describe las posibles mejoras y nuevas funcionalidades que podrían implementarse en el futuro para mejorar y expandir la aplicación. Se dividen en mejoras de arquitectura/código y nuevas funcionalidades para el usuario.

## 1. Mejoras de Arquitectura y Calidad del Código

-   **Q1: Migración a TypeScript**
    -   **Descripción**: Reescribir la base del código de JavaScript a TypeScript.
    -   **Beneficios**: Añadir tipado estático para detectar errores en tiempo de desarrollo, mejorar el autocompletado y la robustez general, y hacer que el código sea más auto-documentado.
    -   **Prioridad**: Alta.

-   **Q2: Implementación de Pruebas (Testing)**
    -   **Descripción**: Añadir un conjunto de pruebas automatizadas utilizando Vitest y React Testing Library.
    -   **Beneficios**: Aumentar la confianza al hacer cambios, prevenir regresiones (bugs en código que antes funcionaba) y validar la lógica de negocio.
    -   **Prioridad**: Alta.
    -   **Ver**: [Estrategia de Calidad y Pruebas](./../5_Quality_And_Deployment/QUALITY_ASSURANCE.md)

-   **Q3: Gestión de Estado Avanzada**
    -   **Descripción**: Si la aplicación crece y requiere compartir más estado entre features no relacionadas, se podría integrar una librería de gestión de estado global.
    -   **Beneficios**: Desacoplar el estado de la UI, facilitando su gestión en aplicaciones complejas.
    -   **Opciones**: Zustand (preferido por su simplicidad), Redux Toolkit.
    -   **Prioridad**: Baja (solo si es necesario).

## 2. Nuevas Funcionalidades (Features)

-   **F1: Lista de Repositorios del Usuario**
    -   **Descripción**: Debajo de la tarjeta del perfil, añadir una sección que liste los repositorios más populares o recientes del usuario, obtenidos de la API de GitHub.
    -   **API Endpoint**: `GET /users/{username}/repos`
    -   **Beneficios**: Proporcionar información más valiosa sobre la actividad del desarrollador.

-   **F2: Paginación o Scroll Infinito**
    -   **Descripción**: Si se implementa la lista de repositorios (F1), añadir paginación o un scroll infinito para manejar a los usuarios que tienen una gran cantidad de repositorios.
    -   **Beneficios**: Mejorar el rendimiento al no tener que cargar todos los repositorios a la vez.

-   **F3: Búsqueda de Repositorios**
    -   **Descripción**: Añadir una nueva vista o modo en la aplicación que permita buscar repositorios en todo GitHub, no solo usuarios.
    -   **API Endpoint**: `GET /search/repositories`
    -   **Beneficios**: Expandir significativamente la utilidad de la aplicación.

-   **F4: Autenticación de Usuario (OAuth)**
    -   **Descripción**: Permitir a los usuarios iniciar sesión con su propia cuenta de GitHub.
    -   **Beneficios**:
        -   Aumentar drásticamente el límite de tasa de la API, ya que se usaría el token del usuario autenticado.
        -   Abrir la puerta a funcionalidades personalizadas (ej. ver tus propios repositorios privados, seguir a un usuario).
    -   **Prioridad**: Media.

-   **F5: UI Optimista (Optimistic UI)**
    -   **Descripción**: Si se implementan acciones como "seguir a un usuario" o "dar estrella a un repo", la UI podría actualizarse instantáneamente para reflejar la acción, mientras la petición a la API se completa en segundo plano. Si la petición falla, la UI se revierte.
    -   **Beneficios**: Mejorar la experiencia de usuario percibida, haciendo que la aplicación se sienta más rápida.

## 3. Mejoras de UI/UX

-   **UX1: Debounce en la Búsqueda**
    -   **Descripción**: Añadir un pequeño retraso (debounce) en la barra de búsqueda para evitar realizar peticiones a la API con cada tecla pulsada si se decidiera buscar en tiempo real, o para prevenir "doble-clics" en el botón de buscar.
    -   **Beneficios**: Reducir el número de peticiones a la API y mejorar el rendimiento.

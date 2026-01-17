# 📙 Documento Técnico de Software: GitHub Explorer

**Versión:** 1.0.0
**Fecha:** 17 de Enero, 2026
**Autor:** Senior Frontend Architect

---

## 1. Inicio y Alcance

### 1.1. Propósito

Este documento describe en detalle la arquitectura, diseño, y componentes técnicos de la aplicación **GitHub Explorer**. El propósito de la aplicación es permitir a los usuarios buscar perfiles de desarrolladores en GitHub y visualizar su información de manera clara y atractiva.

Este documento está diseñado para servir como una guía central para los desarrolladores, arquitectos y cualquier persona involucrada en el mantenimiento y evolución del proyecto.

### 1.2. Alcance del Proyecto

El alcance actual del proyecto incluye las siguientes funcionalidades:

*   Búsqueda de usuarios de GitHub por nombre de usuario.
*   Visualización de la información del perfil del usuario, incluyendo:
    *   Avatar, nombre, y alias.
    *   Biografía y fecha de ingreso.
    *   Estadísticas: repositorios públicos, seguidores y seguidos.
*   Enlace directo al perfil de GitHub del usuario.
*   Interfaz con tema claro y oscuro (dark mode).
*   Diseño responsivo adaptado para dispositivos móviles, tablets y de escritorio.

### 1.3. Objetivos

*   **Técnicos:**
    *   Implementar una arquitectura frontend moderna, escalable y mantenible (Feature-Based Architecture).
    *   Asegurar una alta calidad de código con convenciones claras y documentación (JSDoc).
    *   Utilizar un stack tecnológico moderno y eficiente (React, Vite, Tailwind CSS).
*   **De Producto:**
    *   Ofrecer una experiencia de usuario (UX) fluida, intuitiva y agradable.
    *   Proporcionar una interfaz de usuario (UI) limpia, profesional y estéticamente cuidada.
    *   Garantizar un rendimiento óptimo de la aplicación.

---

## 2. Requerimientos Funcionales y No Funcionales

### 2.1. Requerimientos Funcionales

| ID | Requerimiento | Descripción |
|----|---------------|-------------|
| RF-001 | Búsqueda de Usuario | El usuario debe poder introducir un nombre de usuario en una barra de búsqueda y ejecutar la búsqueda. |
| RF-002 | Visualización de Perfil | Tras una búsqueda exitosa, la aplicación debe mostrar la tarjeta de perfil del usuario encontrado. |
| RF-003 | Visualización de Estadísticas | La tarjeta de perfil debe incluir el número de repositorios públicos, seguidores y seguidos. |
| RF-004 | Enlace a GitHub | La tarjeta debe contener un botón o enlace que redirija al perfil completo en `github.com`. |
| RF-005 | Estado de Carga | Mientras se realiza la búsqueda, la aplicación debe mostrar un indicador de carga. |
| RF-006 | Estado de Error | Si el usuario no se encuentra o la API falla, se debe mostrar un mensaje de error claro. |
| RF-007 | Estado Inicial | Al abrir la aplicación, se debe mostrar un estado inicial que invite a la búsqueda. |
| RF-008 | Tema Oscuro | La aplicación debe soportar un tema claro y uno oscuro, con un interruptor para cambiar entre ellos. |

### 2.2. Requerimientos No Funcionales

| ID | Requerimiento | Descripción |
|----|---------------|-------------|
| RNF-001 | Performance | La aplicación debe cargar rápidamente y responder de forma fluida a las interacciones del usuario. First Contentful Paint (FCP) < 2s. |
| RNF-002 | Responsividad | La interfaz debe ser completamente funcional y visualmente correcta en los principales tamaños de pantalla (móvil, tablet, desktop). |
| RNF-003 | Calidad de Código | El código debe seguir las guías de estilo, estar bien documentado y ser fácil de mantener. |
| RNF-004 | Escalabilidad | La arquitectura debe permitir agregar nuevas funcionalidades (features) en el futuro con un impacto mínimo en el código existente. |
| RNF-005 | Compatibilidad | La aplicación debe ser compatible con las últimas dos versiones de los navegadores modernos (Chrome, Firefox, Safari, Edge). |

---

## 3. Arquitectura y Diseño

### 3.1. Arquitectura del Software

El proyecto sigue una **Arquitectura Basada en Features (Feature-Based Architecture)**. Esta arquitectura organiza el código en "rodajas" verticales, donde cada rodaja representa una funcionalidad de la aplicación.

**Principales Directorios:**

*   `src/features`: Contiene las diferentes funcionalidades de la aplicación. Actualmente, solo existe `user-search`.
    *   Cada feature contiene sus propios componentes, hooks, lógica y servicios.
*   `src/shared`: Contiene código reutilizable que puede ser consumido por cualquier feature. Esto incluye componentes de UI, hooks genéricos, utilidades, y el dominio de negocio compartido.

Esta estructura promueve la modularidad y facilita el desarrollo, ya que todo el código relacionado con una feature está co-localizado.

### 3.2. Diseño de la Interfaz (UI/UX)

El diseño se basa en principios minimalistas, buscando la claridad y la facilidad de uso.

*   **Paleta de Colores:** Se utiliza una paleta de grises neutros para los temas claro y oscuro, con un color de acento (azul) para las interacciones principales.
*   **Tipografía:** Se usan las fuentes `Lora` y `Macondo` para dar una identidad visual única y mejorar la legibilidad.
*   **Micro-interacciones:** Se emplean animaciones sutiles (hover, fade-in, etc.) para proporcionar feedback al usuario y hacer que la interfaz se sienta más viva y receptiva.
*   **Layout:** Se utiliza CSS Grid para la estructura principal, asegurando un layout consistente y responsivo.

### 3.3. Flujo de Datos

El flujo de datos es unidireccional, siguiendo el patrón de React:

1.  **UI (Componente):** Un componente (ej. `SearchBar`) dispara un evento (ej. `onSearch`).
2.  **Contexto:** El evento llama a una función expuesta por un contexto (`useUserSearch().searchUser`).
3.  **Hook:** El hook de la feature (`useGithubUser`) actualiza su estado (ej. `isLoading = true`).
4.  **Caso de Uso:** El hook invoca un caso de uso (`searchUserUseCase`).
5.  **Servicio:** El caso de uso llama al servicio (`fetchUser`) que realiza la petición a la API externa.
6.  **Actualización de Estado:** El resultado de la API se propaga hacia arriba, actualizando el estado en el hook.
7.  **Re-renderizado:** React re-renderiza los componentes suscritos al contexto con la nueva información.

---

## 4. Desarrollo e Implementación

### 4.1. Stack Tecnológico

*   **Librería UI:** [React](https://reactjs.org/) v18.3
*   **Build Tool:** [Vite](https://vitejs.dev/) v5.4
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/) v3.4
*   **Gestor de Paquetes:** [pnpm](https://pnpm.io/)
*   **Linting:** [ESLint](https://eslint.org/) con `eslint-plugin-react`.

### 4.2. Estructura de Componentes

Los componentes se dividen en dos categorías:

*   **Componentes de Feature (`src/features/.../components`):** Específicos de una funcionalidad y no reutilizables fuera de ella.
*   **Componentes Compartidos (`src/shared/components`):** Componentes genéricos y de UI (como `Button`, `Card`) que pueden ser usados en cualquier parte de la aplicación.

### 4.3. Manejo de Estado

El estado se gestiona con una combinación de `useState` local y `React Context` para el estado global de la feature.

*   **`ThemeContext`:** Gestiona el estado del tema (claro/oscuro) en toda la aplicación.
*   **`UserSearchContext`:** Gestiona el estado de la búsqueda de usuarios (`user`, `isLoading`, `error`), haciéndolo accesible a todos los componentes de la feature.

---

Este documento continuará con las secciones de Calidad, Despliegue y más, una vez que la implementación avance.

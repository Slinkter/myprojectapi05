# 📗 Glosario de Términos: GitHub Explorer

**Versión:** 1.0.0
**Fecha:** 17 de Enero, 2026

---

## 1. Propósito

Este glosario define los términos técnicos, patrones de arquitectura y tecnologías clave utilizadas en el proyecto **GitHub Explorer**. Su objetivo es proporcionar un entendimiento común para todos los miembros del equipo.

---

## 2. Tecnologías Principales

| Término | Definición |
|---|---|
| **React** | Una biblioteca de JavaScript para construir interfaces de usuario. Permite crear componentes de UI reutilizables y gestionar su estado de forma eficiente. |
| **Vite** | Un entorno de desarrollo y herramienta de construcción extremadamente rápida para proyectos web modernos. Proporciona un servidor de desarrollo con Hot Module Replacement (HMR) y optimiza el build para producción. |
| **Tailwind CSS** | Un framework de CSS "utility-first" que permite construir diseños directamente en el HTML utilizando clases predefinidas (ej. `flex`, `p-4`, `text-center`). |
| **JavaScript (JS/JSX)** | El lenguaje de programación principal del proyecto. JSX es una extensión de sintaxis que permite escribir HTML dentro de JavaScript, utilizada por React para definir componentes. |
| **API REST** | (Representational State Transfer) Un estilo de arquitectura para diseñar aplicaciones en red. La aplicación consume la API REST de GitHub para obtener los datos de los perfiles. |
| **SPA** | (Single Page Application) Una aplicación web que carga una única página HTML y actualiza dinámicamente su contenido a medida que el usuario interactúa con ella, en lugar de cargar páginas nuevas desde el servidor. |

---

## 3. Patrones de Arquitectura y Diseño

| Término | Definición |
|---|---|
| **Feature-Based Architecture** | Un patrón de arquitectura donde el código se organiza en "features" o funcionalidades. Cada feature es un módulo que contiene todo lo necesario para funcionar (UI, lógica, servicios). Esto promueve la co-localización y la modularidad. |
| **Componente** | En React, un componente es una pieza de UI reutilizable e independiente. Puede ser una función o una clase que retorna JSX. |
| **Custom Hook** | Una función en React cuyo nombre empieza con "use" y que permite reutilizar lógica de estado y efectos entre diferentes componentes. En este proyecto, `useGithubUser` es un custom hook. |
| **Context API** | Una API de React que permite compartir estado global a través del árbol de componentes sin tener que pasar props manualmente en cada nivel (evita el "prop drilling"). |
| **Flujo de Datos Unidireccional** | Un patrón en React donde los datos fluyen en una sola dirección, generalmente desde los componentes padres hacia los hijos. Las actualizaciones se realizan enviando eventos hacia arriba para modificar el estado en un nivel superior. |
| **Barrel File** | Un archivo `index.js` que re-exporta todos los módulos de un directorio. Su propósito es simplificar las importaciones desde ese directorio, creando un punto de entrada único. |

---

## 4. Conceptos de UI/UX

| Término | Definición |
|---|---|
| **Dark Mode** | Un esquema de color oscuro que reduce la luz emitida por la pantalla, mejorando la legibilidad en entornos con poca luz y reduciendo la fatiga visual. |
| **Responsive Design** | La práctica de diseñar una interfaz para que se adapte y se vea bien en cualquier tamaño de pantalla, desde dispositivos móviles hasta monitores de escritorio. |
| **Estado de Carga (Loading State)** | Una indicación visual (como un spinner) que informa al usuario que una operación (ej. una petición a la API) está en progreso. |
| **Estado de Error (Error State)** | Un mensaje o componente que se muestra cuando una operación falla, informando al usuario sobre el problema. |
| **Estado Vacío / Inicial (Empty/Initial State)** | La pantalla que se muestra cuando no hay datos para presentar, ya sea porque el usuario aún no ha realizado ninguna acción o porque una búsqueda no arrojó resultados. |
| **Micro-interacción** | Pequeñas animaciones o respuestas visuales a las acciones del usuario (ej. un efecto `hover` en un botón) que mejoran la experiencia de usuario y proporcionan feedback. |

---

## 5. Otros Términos

| Término | Definición |
|---|---|
| **JSDoc** | Un lenguaje de marcado para documentar código JavaScript. Permite describir funciones, parámetros, y retornos, y es utilizado por editores y herramientas para proporcionar autocompletado y análisis de código. |
| **Props (Propiedades)** | En React, son los argumentos que se pasan a un componente para configurarlo, similar a los atributos de HTML. |
| **Estado (State)** | Datos que un componente de React mantiene a lo largo del tiempo. Cuando el estado cambia, el componente se vuelve a renderizar para reflejar esos cambios. |

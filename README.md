# Visor de Perfiles de GitHub (API 05)

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Fast-yellow?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-blueviolet?logo=tailwind-css)](https://tailwindcss.com/)

Este proyecto es una aplicación de página única (SPA) que permite buscar y visualizar perfiles de usuario de GitHub. Ha sido construido siguiendo principios de arquitectura limpia y un enfoque basado en características para garantizar que el código sea mantenible, escalable y fácil de entender.

![Captura de pantalla de la aplicación](./api05.jpeg)

## ✨ Tecnologías Principales

-   **React**: Para la construcción de la interfaz de usuario.
-   **Vite**: Como herramienta de desarrollo y empaquetado.
-   **Tailwind CSS**: Para el diseño de la interfaz mediante utility-first.
-   **@material-tailwind/react**: Biblioteca de componentes que implementa Material Design sobre Tailwind CSS.
-   **ESLint**: Para el análisis estático y la calidad del código.
-   **JSDoc**: Para la documentación de código y la mejora de la comprensión del proyecto.

## 🏛️ Arquitectura Aplicada

La arquitectura de este proyecto se adhiere a un **enfoque basado en características (Feature-Based Architecture)**, donde el código se organiza principalmente por la funcionalidad que entrega, promoviendo una alta cohesión y bajo acoplamiento. Los principios de **Clean Architecture** han guiado la separación de responsabilidades para mejorar la mantenibilidad y escalabilidad.

Las capas clave incluyen:

-   **Capa de Presentación (`src/pages`, `src/components`, `src/features/*/components`):** Responsable de la interfaz de usuario y la interacción con el usuario. Las páginas orquestan las características, y los componentes presentan la información.
-   **Capa de Aplicación (`src/features/*/hooks`):** Contiene la lógica específica de la aplicación y la orquestación del flujo de datos para cada característica. Los **Custom Hooks** son fundamentales aquí para encapsular la lógica reutilizable y el estado.
-   **Capa de Dominio (`src/domain`):** Una capa central y agnóstica a la infraestructura que define las entidades, modelos y reglas de negocio. Esta capa es pura y no depende de la UI o los servicios externos.
-   **Capa de Infraestructura (`src/services`):** Se encarga de la comunicación con servicios externos, como la API de GitHub (`src/features/*/services`). Proporciona implementaciones concretas para las interfaces definidas por la capa de dominio o de aplicación.

Esta estructura facilita:
-   **Separación de Responsabilidades (SRP):** Cada módulo tiene una razón única para cambiar.
-   **Reusabilidad:** Componentes y hooks pueden ser reutilizados a través de la aplicación o en otras.
-   **Testabilidad:** Las diferentes capas pueden ser probadas de forma aislada.
-   **Escalabilidad:** Fácil adición de nuevas características o modificación de las existentes sin impactar todo el sistema.

Para una comprensión profunda del proyecto, su arquitectura, requerimientos y guías de desarrollo, por favor, consulta la **documentación completa** en el directorio `/docs`.

[**>> Acceder a la Documentación Completa <<](./docs/1_Scope/PROJECT_OVERVIEW.md)**

## 🚀 Instalación y Ejecución Local

**Requisitos:** Node.js (v18 o superior) y pnpm.

**1. Clonar el repositorio:**
```bash
git clone <URL_DEL_REPOSITORIO>
cd myprojectapi05
```

**2. Instalar dependencias:**
```bash
pnpm install
```

**3. Ejecutar el servidor de desarrollo:**
```bash
pnpm run dev
```
La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## 🛠️ Comandos Disponibles

-   `pnpm run dev`: Inicia el servidor de desarrollo.
-   `pnpm run build`: Compila la aplicación para producción en el directorio `dist/`.
-   `pnpm run lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.
-   `pnpm run preview`: Sirve localmente el build de producción.
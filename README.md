# Visor de Perfiles de GitHub (API 05)

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Fast-yellow?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-blueviolet?logo=tailwind-css)](https://tailwindcss.com/)

Este proyecto es una aplicación de página única (SPA) que permite buscar y visualizar perfiles de usuario de GitHub. Ha sido construido siguiendo principios de arquitectura limpia para garantizar que el código sea mantenible, escalable y fácil de entender.

![Captura de pantalla de la aplicación](./api05.jpeg)

## ✨ Tecnologías Principales

-   **React**: Para la construcción de la interfaz de usuario.
-   **Vite**: Como herramienta de desarrollo y empaquetado.
-   **Tailwind CSS**: Para el diseño de la interfaz mediante utility-first.
-   **@material-tailwind/react**: Biblioteca de componentes que implementa Material Design sobre Tailwind CSS.
-   **ESLint**: Para el análisis estático y la calidad del código.

## 🏛️ Arquitectura y Documentación

La arquitectura del proyecto está basada en features y separa claramente la lógica de la presentación. Para una comprensión profunda del proyecto, su arquitectura, requerimientos y guías de desarrollo, por favor, consulta la **documentación completa** en el directorio `/docs`.

[**>> Acceder a la Documentación Completa <<](./docs/1_Scope/PROJECT_OVERVIEW.md)**

## 🚀 Instalación y Ejecución Local

**Requisitos:** Node.js (v18 o superior).

**1. Clonar el repositorio:**
```bash
git clone <URL_DEL_REPOSITORIO>
cd myprojectapi05
```

**2. Instalar dependencias:**
```bash
npm install
```

**3. Ejecutar el servidor de desarrollo:**
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## 🛠️ Comandos Disponibles

-   `npm run dev`: Inicia el servidor de desarrollo.
-   `npm run build`: Compila la aplicación para producción en el directorio `dist/`.
-   `npm run lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.
-   `npm run preview`: Sirve localmente el build de producción.

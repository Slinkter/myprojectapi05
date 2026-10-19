# 🔍 GitHub Profiler & Interactive Cards

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![Zod](https://img.shields.io/badge/Validation-Zod-3E67B1?style=flat&logo=zod)](https://zod.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-0055FF?style=flat&logo=framer)](https://www.framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Plataforma frontend para la búsqueda, inspección y visualización cinemática de desarrolladores en GitHub, diseñada con una arquitectura resiliente y tipado estricto en tiempo de ejecución.

---

## 🎯 Características Principales

- **Búsqueda Instantánea de Desarrolladores**: Acceso al perfil completo mediante nombre de usuario de GitHub.
- **Tarjetas Cinemáticas Interactivas**: Tarjetas con efectos de hover, profundidad y microinteracciones fluidas.
- **Contratos de Datos Blindados con Zod**: Validación estricta que previene fallos de renderizado ante respuestas inesperadas.
- **Notificaciones con Sonner**: Sistema de toast no intrusivo para alertas de límite de tasa y errores de red.
- **Modo Offline & Resiliencia**: Degradación elegante ante perfiles inexistentes o rate limits.

---

## 🛠️ Stack Tecnológico

| Tecnología | Rol |
| :--- | :--- |
| **React 18.3** | Componentes funcionales y ciclo de vida |
| **Vite 5.4** | Bundler ultrarrápido |
| **Tailwind CSS 3.4** | Estilizado declarativo y diseño responsivo |
| **Zod** | Validación y tipado estricto en runtime |
| **Framer Motion** | Animaciones de física y transiciones de interfaz |
| **Sonner** | Sistema moderno y accesible de notificaciones toast |

---

## 🚀 Inicio Rápido

### Requisitos Previos
- **Node.js**: v18.0 o superior
- **pnpm**: v9.0 o superior

### Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   ```

3. **Iniciar en desarrollo:**
   ```bash
   pnpm run dev
   ```

4. **Compilar para producción:**
   ```bash
   pnpm run build
   ```

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo `LICENSE` para más información.

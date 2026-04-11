# 🚀 GitHub Explorer

[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-yellow?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blueviolet?logo=tailwind-css)](https://tailwindcss.com/)
[![Zod](https://img.shields.io/badge/Validation-Zod-8b5cf6)](https://zod.dev/)

**GitHub Explorer** es una plataforma de ingeniería frontend diseñada para la búsqueda y visualización de perfiles de desarrolladores con una experiencia cinemática y un motor de datos blindado.

---

## I. 🚀 Quick Start

### Pre-requisitos
- Node.js v18+
- pnpm

### Instalación y Ejecución
```bash
pnpm install
pnpm run dev
```
La aplicación se iniciará en `http://localhost:5173`.

---

## II. 🏗️ Arquitectura Core

El proyecto implementa una **Arquitectura Basada en Features**, optimizada para la separación de responsabilidades y escalabilidad modular.

```text
src/
├── features/        # Módulos funcionales (Vertical Slices)
└── shared/          # Infraestructura, UI Atómica y Dominio
```

---

## III. 📂 Explorador de Ingeniería (Índice Maestro)

Toda la documentación técnica está estructurada jerárquicamente para facilitar su consulta y mantenimiento.

### **[1.0] Estrategia y Visión**
- **[1.1] [Documento Técnico](./src/docs/TECHNICAL_DOCUMENT.md)**: El SSOT de arquitectura, stack y flujo de datos.
- **[1.2] [Casos de Uso](./src/docs/USE_CASES.md)**: Requerimientos funcionales desde la perspectiva del usuario.
- **[1.3] [Glosario](./src/docs/GLOSSARY.md)**: Terminología técnica y de dominio.

### **[2.0] Diseño y UI (Aura Standards)**
- **[2.1] [Análisis UX/UI](./src/docs/UX_UI_ANALYSIS.md)**: Detalles sobre el tema "Midnight", paleta Zinc-950 y tipografía Inter.
- **[2.2] [Diagramas de Arquitectura](./src/docs/DIAGRAMS.md)**: Representación visual del flujo asíncrono y componentes.

### **[3.0] Desarrollo e Implementación**
- **[3.1] [Ejemplos y Guías](./src/docs/EXAMPLES.md)**: Fragmentos de código para extender la funcionalidad.
- **[3.2] [Estándares JSDoc](./src/docs/JSDOC_IMPROVEMENTS.md)**: Convenciones de documentación interna.

### **[4.0] Mantenimiento y Ciclo de Vida**
- **[4.1] [Plan de Limpieza](./src/docs/CLEANUP_PLAN.md)**: Estrategia de gestión de deuda técnica.
- **[4.2] [Hoja de Ruta de Migración](./src/docs/MIGRATION_PLAN.md)**: Planificación de actualizaciones tecnológicas.
- **[4.3] [Análisis Final](./src/docs/FINAL_ANALYSIS.md)**: Informe sobre la madurez y calidad del software.

---

## IV. 🤖 IA & Context
Para agentes de IA y colaboradores, consultar:
- **[GEMINI.md](./GEMINI.md)**: Contexto operacional y mandatos de ingeniería.
- **[prompt.md](./prompt.md)**: Protocolo de activación del escuadrón especializado.

---

**Desarrollado con ❤️ bajo los estándares de Senior Frontend Architecture.**

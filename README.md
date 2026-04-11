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

## II. 🏗️ Core Architecture

El proyecto implementa una **Arquitectura Basada en Features**, optimizada para la separación de responsabilidades y escalabilidad modular.

```text
src/
├── features/        # Módulos funcionales (Vertical Slices)
└── shared/          # Infraestructura, UI Atómica y Dominio
```

---

## III. 📂 Engineering Explorer (Índice Maestro)

Toda la documentación técnica está estructurada jerárquicamente para facilitar su consulta y mantenimiento.

### **[1.0] Specifications**
- **[1.1] Documento Técnico Maestro:** [TECHNICAL_DOCUMENT.md](./src/docs/1.1-TECHNICAL_DOCUMENT.md)
- **[1.2] Casos de Uso del Usuario:** [USE_CASES.md](./src/docs/1.2-USE_CASES.md)
- **[1.3] Glosario de Términos:** [GLOSSARY.md](./src/docs/1.3-GLOSSARY.md)

### **[2.0] Design and UI**
- **[2.1] Análisis de UX/UI:** [UX_UI_ANALYSIS.md](./src/docs/2.1-UX_UI_ANALYSIS.md)
- **[2.2] Diagramas de Flujo:** [DIAGRAMS.md](./src/docs/2.2-DIAGRAMS.md)

### **[3.0] Development Guides**
- **[3.1] Guía de Ejemplos y Patrones:** [EXAMPLES.md](./src/docs/3.1-EXAMPLES.md)
- **[3.2] Estándares JSDoc y Clean Code:** [JSDoc_IMPROVEMENTS.md](./src/docs/3.2-JSDOC_IMPROVEMENTS.md)
- **[3.x] Prompt Documentation:** [prompt-doc.md](./src/docs/prompt-doc.md)

### **[4.0] Lifecycle**
- **[4.1] Hoja de Ruta de Migración:** [MIGRATION_PLAN.md](./src/docs/4.1-MIGRATION_PLAN.md)
- **[4.2] Plan de Limpieza de Deuda Técnica:** [CLEANUP_PLAN.md](./src/docs/4.2-CLEANUP_PLAN.md)
- **[4.3] Análisis Post-Migración:** [POST_MIGRATION_ANALYSIS.md](./src/docs/4.3-POST_MIGRATION_ANALYSIS.md)
- **[4.4] Análisis de Madurez Final:** [FINAL_ANALYSIS.md](./src/docs/4.4-FINAL_ANALYSIS.md)

---

## IV. 🤖 IA Context

Para agentes de IA y colaboradores, consultar:
- **[GEMINI.md](./GEMINI.md)**: Contexto operacional y mandatos de ingeniería.
- **[prompt.md](./prompt.md)**: Protocolo de activación del escuadrón especializado.

---

**Desarrollado con ❤️ bajo los estándares de Senior Frontend Architecture.**

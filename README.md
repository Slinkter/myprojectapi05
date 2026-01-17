# 🚀 GitHub Explorer

[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-yellow?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blueviolet?logo=tailwind-css)](https://tailwindcss.com/)
[![Arquitectura](https://img.shields.io/badge/Arquitectura-Basada_en_Features-green)](src/docs/TECHNICAL_DOCUMENT.md#31-arquitectura-del-software)

**GitHub Explorer** es una aplicación web moderna (SPA) construida para buscar y visualizar perfiles de desarrolladores de GitHub con una interfaz limpia, rápida y responsiva.

![Screenshot](./api05.jpeg)

---

## 🌟 Principales Características

*   **Búsqueda Rápida de Usuarios:** Encuentra perfiles de GitHub al instante.
*   **Tarjeta de Perfil Detallada:** Visualiza información clave como avatar, estadísticas y biografía.
*   **Tema Oscuro y Claro:** Interfaz adaptable a las preferencias del usuario.
*   **Diseño Responsivo:** Experiencia de usuario óptima en cualquier dispositivo.
*   **Animaciones y Micro-interacciones:** Una interfaz fluida y agradable.

---

## 🛠️ Stack Tecnológico

| Área | Tecnología | Propósito |
|---|---|---|
| **UI** | [React](https://reactjs.org/) 18.3 | Construcción de la interfaz de usuario. |
| **Build Tool** | [Vite](https://vitejs.dev/) 5.4 | Entorno de desarrollo y empaquetado ultra rápido. |
| **Estilos** | [Tailwind CSS](https://tailwindcss.com/) 3.4 | Framework CSS Utility-First para un diseño rápido. |
| **Estado Global** | React Context | Manejo de estado de la aplicación (tema, búsqueda). |
| **Iconos** | [React Icons](https://react-icons.github.io/react-icons/) | Biblioteca de iconos populares. |
| **Gestor de Paquetes** | [pnpm](https://pnpm.io/) | Gestor de paquetes rápido y eficiente. |

---

## 🏗️ Arquitectura

Este proyecto implementa una **Arquitectura Basada en Features (Feature-Based Architecture)**, que organiza el código en módulos funcionales y desacoplados.

```
src/
├── features/        # Módulos de funcionalidades (ej. user-search)
└── shared/          # Código reutilizable (componentes de UI, hooks, utils)
```

Este enfoque mejora la escalabilidad y facilita el mantenimiento. Para una explicación detallada, consulta el **[Documento Técnico de Software](src/docs/TECHNICAL_DOCUMENT.md)**.

---

## 📚 Documentación Completa

Toda la documentación del proyecto se encuentra en la carpeta `src/docs/`.

| Documento | Descripción |
|---|---|
| 📙 **[Documento Técnico](src/docs/TECHNICAL_DOCUMENT.md)** | La guía central que describe la arquitectura, diseño y stack. |
| 📕 **[Casos de Uso](src/docs/USE_CASES.md)** | Describe las funcionalidades desde la perspectiva del usuario. |
| 📗 **[Glosario de Términos](src/docs/GLOSSARY.md)** | Define los conceptos y tecnologías clave del proyecto. |
| 📓 **[Ejemplos y Ejercicios](src/docs/EXAMPLES.md)** | Guías prácticas para entender y extender el código. |
| 📐 **[Diagramas de Arquitectura](src/docs/DIAGRAMS.md)** | Diagramas de flujo y arquitectura en formato Mermaid. |

---

## 🚀 Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

### **Pre-requisitos**
Asegúrate de tener [Node.js](https://nodejs.org/) (versión 18 o superior) y [pnpm](https://pnpm.io/installation) instalados.

### **Instalación**

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/myprojectapi05.git
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd myprojectapi05
    ```
3.  Instala las dependencias:
    ```bash
    pnpm install
    ```

### **Ejecución**

*   **Modo Desarrollo:**
    ```bash
    pnpm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

*   **Build para Producción:**
    ```bash
    pnpm run build
    ```
    Los archivos optimizados se generarán en la carpeta `dist/`.

*   **Linting:**
    ```bash
    pnpm run lint
    ```
    Ejecuta ESLint para analizar el código en busca de problemas.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1.  Haz un Fork del proyecto.
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`).
4.  Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un Pull Request.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ y las mejores prácticas de Frontend.**

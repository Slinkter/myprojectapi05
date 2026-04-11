# GEMINI.md - GitHub Explorer Context

Este archivo proporciona el contexto esencial y las directrices para trabajar en el proyecto **GitHub Explorer**.

## 🚀 Descripción del Proyecto
**GitHub Explorer** es una Single Page Application (SPA) moderna diseñada para buscar y visualizar perfiles de usuarios de GitHub. Utiliza la API pública de GitHub y ofrece una interfaz limpia con soporte para temas claro/oscuro y diseño responsivo.

### 🛠️ Stack Tecnológico
- **Frontend:** React 18.3 (JavaScript)
- **Build Tool:** Vite 5.4
- **Estilos:** Tailwind CSS 3.4 + PostCSS
- **Estado:** React Context API (`ThemeContext`, `UserSearchContext`)
- **Iconos:** React Icons
- **Gestión de Paquetes:** pnpm
- **Despliegue:** GitHub Pages

---

## 🏗️ Arquitectura y Estructura
El proyecto sigue una **Arquitectura Basada en Features (Feature-Based Architecture)**, organizada en rodajas verticales.

### Organización de Directorios
```text
src/
├── features/          # Módulos funcionales (ej. user-search)
│   └── user-search/
│       ├── application/  # Casos de uso / Lógica de negocio
│       ├── components/   # Componentes específicos de la feature
│       ├── context/      # Estado global de la feature
│       ├── hooks/        # Hooks personalizados de la feature
│       ├── pages/        # Páginas de la feature (entry points)
│       └── services/     # Integraciones con APIs externas (GitHub)
├── shared/            # Código reutilizable por cualquier feature
│   ├── components/       # Componentes de UI genéricos (Button, Card, Input)
│   ├── context/          # Contextos globales (Theme)
│   ├── domain/           # Modelos y reglas de negocio compartidas
│   └── utils/            # Funciones de utilidad y formateadores
└── docs/              # Documentación técnica exhaustiva
```

### Patrones y Convenciones
- **Estándar Aura (UI/UX):** Implementar micro-interacciones (ej: `active:scale-95` en botones) y espaciado base 4 (Tailwind `p-4`, `p-6`).
- **Performance First:** Memoizar contextos con `useMemo` y componentes puros con `React.memo` para evitar re-renders en cascada.
- **Alias de Importación:** Se utiliza `@/` para referenciar la carpeta `src/`.
- **Documentación:** Uso obligatorio de **JSDoc** para documentar funciones, componentes y servicios.
- **Separación de Responsabilidades:** Se sigue el patrón de **Contenedor/Presentacional** (ej: `UserSearchPage` orquesta, `UserSearchResult` presenta).
- **Inyección de Dependencias:** Los servicios se consumen preferiblemente a través de casos de uso o hooks de aplicación.
- **Componentes de UI:** Localizados en `src/shared/components/ui/`. Son componentes atómicos y reutilizables.

---

## 🛠️ Comandos de Desarrollo
| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo en `http://localhost:5173`. |
| `pnpm build` | Genera el bundle de producción en la carpeta `dist/`. |
| `pnpm lint` | Ejecuta ESLint para verificar la calidad del código. |
| `pnpm preview` | Previsualiza localmente el build de producción. |
| `pnpm deploy` | Despliega la aplicación en GitHub Pages. |

---

## 💡 Guías de Implementación
1.  **Nuevas Funcionalidades:** Deben crearse dentro de `src/features/` siguiendo la estructura interna de `user-search`.
2.  **Estilos:** Utilizar clases de **Tailwind CSS**. Evitar CSS plano a menos que sea estrictamente necesario (en `index.css`).
3.  **Rendimiento:**
    - Utilizar `React.lazy` y `Suspense` para componentes pesados.
    - Implementar `Skeleton Screens` para estados de carga.
    - Usar `loading="lazy"` en imágenes.
4.  **Manejo de Errores:** Utilizar el `ErrorBoundary` ubicado en `src/shared/components/ui/` para envolver secciones críticas.
5.  **Temas:** El estado del tema se maneja vía `ThemeContext` y clases `dark:` de Tailwind.

---

## 📚 Referencia de Documentación
Para detalles profundos, consultar los archivos en `src/docs/`:
- `TECHNICAL_DOCUMENT.md`: Arquitectura, requerimientos y flujo de datos.
- `DIAGRAMS.md`: Flujos de la aplicación (Mermaid).
- `USE_CASES.md`: Definición de funcionalidades desde el usuario.
- `GLOSSARY.md`: Términos técnicos usados en el proyecto.

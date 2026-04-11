# 📙 Documento Técnico: GitHub Explorer (v2.5)

**Versión:** 2.5.0 (Midnight Stack)
**SSOT:** Arquitectura, Datos y Flujo Asíncrono.

---

## 1. Arquitectura y Patrones

El proyecto implementa una **Arquitectura Basada en Features (Feature-Based Architecture)**, organizada en módulos verticales desacoplados.

### 1.1. Estructura de Directorios
- `src/features/`: Módulos de funcionalidad (ej. `user-search`). Contiene su propio `application`, `hooks` y `services`.
- `src/shared/`: Infraestructura transversal. Incluye componentes UI atómicos, utilidades de dominio y contextos globales.

### 1.2. Principios de Ingeniería
- **Hoisting-Free Logic:** El 100% de la lógica de negocio utiliza expresiones de flecha (`const`) para asegurar la predictibilidad del scope.
- **Fail-Fast Pattern:** Validaciones tempranas en los servicios para evitar la propagación de errores.
- **Single Source of Truth (SSOT):** Los datos se validan en la frontera del sistema (Servicio) antes de entrar al estado de React.

---

## 2. Gestión de Datos y Validación

### 2.1. Blindaje con Zod
Se utiliza **Zod** para la validación de esquemas en tiempo de ejecución. Esto garantiza que la respuesta de la API de GitHub cumpla con el contrato esperado por la UI.

- **`GithubUserSchema`**: Define el contrato de datos del usuario.
- **`GithubUsernameSchema`**: Valida las reglas de nomenclatura de GitHub antes de disparar peticiones de red.

### 2.2. Data Pruning (O(K))
Para optimizar el uso de memoria RAM (crítico para sistemas de 8GB), el servicio de GitHub realiza una desestructuración inmediata del JSON recibido, reteniendo únicamente las propiedades necesarias para la UI.

---

## 3. Flujo Asíncrono y Estado

### 3.1. Orquestación (Context + Hooks)
1. **Acción:** El usuario dispara una búsqueda vía `onSearch`.
2. **Aplicación:** `useGithubUser` invoca el caso de uso `searchUserUseCase`.
3. **Validación:** El caso de uso valida el input vía Zod.
4. **Infraestructura:** El servicio realiza la petición y parsea la respuesta con Zod.
5. **Propagación:** El estado se actualiza en el contexto y se notifica mediante **Sonner** en caso de error.

### 3.2. Optimización de Renders
- **Context Memoization**: Uso de `useMemo` en los Providers para estabilizar el objeto de estado.
- **Component Memoization**: Uso de `React.memo` en componentes puros para evitar re-renders en cascada.

---

## 4. Stack Tecnológico de Ingeniería

| Componente | Tecnología | Versión |
|---|---|---|
| **Motor de UI** | React | 18.3 |
| **Validación** | Zod | 4.3 |
| **Build Tool** | Vite | 5.4 |
| **Estilos** | Tailwind CSS | 3.4 |
| **Notificaciones** | Sonner | 2.0 |
| **Animaciones** | Framer Motion | 12.3 |

---

*Para detalles de diseño visual y experiencia de usuario, consultar [UX_UI_ANALYSIS.md](./UX_UI_ANALYSIS.md).*

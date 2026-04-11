# 📕 Casos de Uso: GitHub Explorer

**Versión:** 1.0.0
**Fecha:** 17 de Enero, 2026

---

## 1. Introducción

Este documento detalla los casos de uso principales para la aplicación **GitHub Explorer**. Un caso de uso describe una secuencia de interacciones entre un actor (el usuario) y el sistema para lograr un objetivo específico.

**Actor Principal:** Usuario (Developer, Reclutador, o cualquier persona interesada en perfiles de GitHub).

---

## 2. Casos de Uso

### CU-01: Buscar un Perfil de Usuario de GitHub

| | |
|---|---|
| **ID del Caso de Uso** | CU-01 |
| **Nombre** | Buscar un Perfil de Usuario de GitHub |
| **Actor** | Usuario |
| **Descripción** | El usuario introduce un nombre de usuario de GitHub en la barra de búsqueda y obtiene el perfil correspondiente. |
| **Precondiciones** | La aplicación debe estar cargada y visible en el navegador. |
| **Flujo Principal** |
| | 1. El sistema muestra una barra de búsqueda y un estado inicial que invita a la acción. |
| | 2. El **Usuario** introduce un nombre de usuario válido en la barra de búsqueda (ej. "slinkter"). |
| | 3. El **Usuario** presiona la tecla "Enter" o hace clic en el botón de búsqueda. |
| | 4. El **Sistema** valida que el nombre de usuario no esté vacío. |
| | 5. El **Sistema** muestra un indicador de carga (`LoadingSpinner`). |
| | 6. El **Sistema** realiza una petición a la API de GitHub con el nombre de usuario. |
| | 7. La API de GitHub responde con los datos del perfil del usuario. |
| | 8. El **Sistema** oculta el indicador de carga. |
| | 9. El **Sistema** muestra la tarjeta de perfil (`UserCard`) con la información del usuario encontrado. |
| **Postcondiciones** | La tarjeta de perfil del usuario buscado es visible en la pantalla. |
| **Flujos Alternativos** |
| | **4a. El campo de búsqueda está vacío:** |
| |    1. Si el usuario intenta buscar con el campo vacío, el sistema muestra una validación visual (ej. un borde rojo o una animación) y no procede con la búsqueda. |
| | **7a. El usuario no existe:** |
| |    1. La API de GitHub responde con un error 404 (Not Found). |
| |    2. El sistema muestra un componente de error (`ErrorDisplay`) con el mensaje "Usuario No Encontrado". |
| | **7b. Límite de API excedido:** |
| |    1. La API de GitHub responde con un error 403 (Forbidden). |
| |    2. El sistema muestra un componente de error con el mensaje "Límite de Solicitudes Excedido". |
| | **7c. Error de red u otro error de API:** |
| |    1. La petición a la API falla por problemas de conectividad o un error inesperado del servidor. |
| |    2. El sistema muestra un componente de error genérico. |

---

### CU-02: Cambiar el Tema de la Aplicación

| | |
|---|---|
| **ID del Caso de Uso** | CU-02 |
| **Nombre** | Cambiar el Tema de la Aplicación |
| **Actor** | Usuario |
| **Descripción** | El usuario cambia la apariencia de la aplicación entre un tema claro y un tema oscuro. |
| **Precondiciones** | La aplicación es visible. |
| **Flujo Principal** |
| | 1. El **Sistema** muestra un interruptor de tema (`ThemeToggle`), usualmente con un icono de sol ☀️ o luna 🌙. |
| | 2. El **Usuario** hace clic en el interruptor de tema. |
| | 3. El **Sistema** invierte el tema actual (de claro a oscuro, o viceversa). |
| | 4. Todos los componentes de la interfaz se actualizan para reflejar el nuevo tema. |
| | 5. El **Sistema** guarda la preferencia del tema en el `localStorage` del navegador para futuras visitas. |
| **Postcondiciones** | La aplicación se muestra en el tema seleccionado por el usuario. |

---

### CU-03: Ver Perfil Completo en GitHub

| | |
|---|---|
| **ID del Caso de Uso** | CU-03 |
| **Nombre** | Ver Perfil Completo en GitHub |
| **Actor** | Usuario |
| **Descripción** | El usuario navega desde la tarjeta de perfil en la aplicación hacia el perfil completo en `github.com`. |
| **Precondiciones** | Se está mostrando una tarjeta de perfil de usuario (`UserCard`) tras una búsqueda exitosa. |
| **Flujo Principal** |
| | 1. El **Sistema** muestra un botón "Ver Perfil" en la `UserCard`. |
| | 2. El **Usuario** hace clic en el botón. |
| | 3. El **Sistema** abre una nueva pestaña en el navegador que redirige a la URL del perfil del usuario en GitHub (ej. `https://github.com/slinkter`). |
| **Postcondiciones** | El usuario puede ver el perfil completo y oficial en el sitio de GitHub. |

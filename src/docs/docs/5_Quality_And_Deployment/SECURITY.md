# Seguridad

Este documento aborda los aspectos de seguridad de la aplicación, identificando posibles vectores de riesgo y las medidas de mitigación correspondientes.

## 1. Superficie de Ataque

La aplicación es una SPA (Single Page Application) que se ejecuta completamente en el lado del cliente (frontend). No tiene un backend propio ni una base de datos. La única interacción con un servicio externo es a través de peticiones `GET` a la API pública de GitHub.

Esto reduce significativamente la superficie de ataque, ya que no hay lógica de autenticación, gestión de sesiones ni almacenamiento de datos sensibles de usuarios en un servidor propio.

## 2. Análisis de Riesgos y Mitigaciones

| Riesgo | Descripción | Impacto | Probabilidad | Mitigación |
| :--- | :--- | :--- | :--- | :--- |
| **Abuso del Límite de Tasa de la API (Rate Limiting)** | Un usuario (o un script malicioso) realiza una gran cantidad de búsquedas en un corto período, agotando el límite de peticiones que la API de GitHub permite para una IP no autenticada. | **Alto** | **Media** | 1. **Mitigación Actual (Reactiva)**: La aplicación detecta el código de estado `403` de la API y muestra un mensaje de error claro al usuario, informándole de la situación. <br><br> 2. **Mitigación Futura (Proactiva)**: Implementar un *debounce* en la barra de búsqueda. Esto añadiría un pequeño retraso desde que el usuario deja de escribir hasta que se puede realizar la búsqueda, evitando peticiones accidentales o demasiado rápidas. <br><br> 3. **Mitigación Avanzada (Roadmap)**: Implementar autenticación OAuth con GitHub. Las peticiones autenticadas tienen un límite de tasa mucho mayor. |
| **Cross-Site Scripting (XSS)** | Los datos obtenidos de la API de GitHub (como el nombre de usuario o la biografía) podrían contener scripts maliciosos. Si estos datos se renderizan incorrectamente en el DOM, podrían ejecutarse en el navegador del usuario. | **Medio** | **Baja** | **Mitigación Actual (Por defecto en React)**: React, por defecto, escapa todo el contenido que se renderiza dentro de JSX. Por ejemplo, al hacer `{user.bio}`, React se asegura de que cualquier HTML o script en esa cadena se trate como texto literal y no se ejecute. La aplicación no utiliza mecanismos peligrosos como `dangerouslySetInnerHTML`. |
| **Seguridad de Dependencias (NPM)** | Las dependencias de `node_modules` podrían tener vulnerabilidades de seguridad conocidas. | **Alto** | **Media** | 1. **Mitigación Actual**: Utilizar un gestor de paquetes moderno (`npm`, `pnpm`) que audita las dependencias al instalar. <br><br> 2. **Mitigación Proactiva**: Ejecutar periódicamente el comando `npm audit` para detectar vulnerabilidades en el árbol de dependencias e instalar parches con `npm audit fix`. Mantener las dependencias actualizadas a sus últimas versiones estables. |
| **Exposición de Claves de API** | Si en el futuro se utilizara una clave de API para acceder a servicios, podría quedar expuesta en el código del lado del cliente. | **Crítico** | **No Aplica (Actualmente)** | **Mitigación Futura (Buenas Prácticas)**: NUNCA almacenar claves de API directamente en el código fuente de una aplicación de frontend. Utilizar variables de entorno (`.env`) y cargarlas a través del sistema de Vite. Para claves que deban permanecer secretas, se requeriría un pequeño backend o una función serverless que actúe como proxy, ocultando la clave al cliente. |

## 3. Encabezados de Seguridad HTTP

Aunque la aplicación se sirve como un conjunto de archivos estáticos, es recomendable que el servidor que los aloje (ej. Vercel, Netlify) configure los siguientes encabezados HTTP para mejorar la seguridad:

-   **`Strict-Transport-Security (HSTS)`**: Para forzar que la comunicación se realice siempre sobre HTTPS.
-   **`Content-Security-Policy (CSP)`**: Para definir de qué dominios se permite cargar recursos (scripts, imágenes, etc.), reduciendo el riesgo de ataques XSS.
-   **`X-Content-Type-Options`**: Para prevenir que el navegador intente interpretar archivos con un tipo MIME diferente al declarado.
-   **`X-Frame-Options`**: Para prevenir que la página sea cargada en un `<iframe>` en otro sitio (ataques de Clickjacking).

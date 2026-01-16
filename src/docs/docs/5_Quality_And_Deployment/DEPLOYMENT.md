# Guía de Despliegue

Este documento proporciona las instrucciones para compilar la aplicación para producción y desplegarla en plataformas de alojamiento comunes para aplicaciones estáticas.

## 1. Compilación para Producción (Build)

El proyecto utiliza Vite para el proceso de compilación, que optimiza y empaqueta todos los archivos (JavaScript, CSS, imágenes) para un rendimiento máximo en producción.

### Comando de Build

Para generar la versión de producción de la aplicación, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm run build
```

### ¿Qué hace este comando?
-   Empaqueta todo el código de React y JavaScript en archivos estáticos y optimizados.
-   Minifica el código JavaScript y CSS para reducir su tamaño.
-   Aplica el *tree-shaking* para eliminar código no utilizado.
-   Procesa los estilos de Tailwind CSS, eliminando todas las clases de utilidad que no se usan en el proyecto final, lo que resulta en un archivo CSS muy pequeño.
-   Copia los assets públicos.

### El Directorio `dist`

Una vez que el comando finaliza con éxito, se creará un nuevo directorio llamado `dist/` en la raíz del proyecto. Este directorio contiene **todo** lo que se necesita para desplegar la aplicación. Su estructura se verá similar a esto:

```
/dist
├── assets/
│   ├── index-xxxxxxxx.js
│   └── index-xxxxxxxx.css
├── index.html
└── ... (otros assets como vite.svg)
```

**El contenido de la carpeta `dist/` es el artefacto de despliegue.**

## 2. Despliegue

La aplicación, al ser un sitio estático (una vez compilada), puede ser desplegada en cualquier servicio de alojamiento de sitios estáticos. A continuación, se describen los pasos para dos de las plataformas más populares y recomendadas.

### Opción A: Despliegue en Vercel (Recomendado)

Vercel es una plataforma optimizada para frameworks de frontend como React y Vite.

1.  **Requisitos**: Una cuenta de Vercel (puede ser la gratuita) y tener tu proyecto subido a un repositorio de Git (GitHub, GitLab, Bitbucket).
2.  **Crear un Nuevo Proyecto**: En tu dashboard de Vercel, haz clic en "Add New..." -> "Project".
3.  **Importar Repositorio**: Importa el repositorio de Git de tu proyecto.
4.  **Configuración del Proyecto**: Vercel detectará automáticamente que estás usando Vite. La configuración por defecto suele ser correcta:
    -   **Framework Preset**: `Vite`
    -   **Build Command**: `npm run build` (o `vite build`)
    -   **Output Directory**: `dist`
    -   **Install Command**: `npm install`
5.  **Desplegar**: Haz clic en el botón "Deploy".

Vercel compilará tu proyecto y lo desplegará. Además, configurará automáticamente un pipeline de CI/CD, de modo que cada vez que hagas `git push` a tu rama principal, se disparará un nuevo despliegue automáticamente.

### Opción B: Despliegue en Netlify

Netlify es otra excelente opción para sitios estáticos.

1.  **Requisitos**: Una cuenta de Netlify y tu proyecto en un repositorio de Git.
2.  **Crear un Nuevo Sitio**: En tu dashboard de Netlify, ve a "Sites" y haz clic en "Add new site" -> "Import an existing project".
3.  **Conectar con Proveedor de Git**: Elige tu proveedor de Git y selecciona el repositorio de tu proyecto.
4.  **Configuración de Despliegue**: Netlify también debería detectar la configuración de Vite. Asegúrate de que los comandos sean correctos:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `dist`
5.  **Desplegar Sitio**: Haz clic en "Deploy site".

Al igual que Vercel, Netlify desplegará tu sitio y configurará despliegues continuos con cada `git push`.

## 3. Servir Localmente el Build de Producción

Si deseas probar la versión de producción en tu máquina local antes de desplegarla, puedes usar el comando `preview` de Vite:

```bash
# 1. Asegúrate de haber compilado el proyecto primero
npm run build

# 2. Sirve el contenido de la carpeta /dist
npm run preview
```

Este comando iniciará un servidor web local simple que servirá los archivos desde `dist/`, permitiéndote verificar que todo funciona como se espera en el entorno de producción.

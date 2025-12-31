# Gestión de Importaciones y Rutas Absolutas

Este documento describe la configuración y el uso de rutas absolutas con un alias para las importaciones en el proyecto.

## 1. Problema

A medida que un proyecto crece, el uso de importaciones relativas (`../`, `../../`) se vuelve problemático por varias razones:
-   **Difícil Lectura:** Es complicado saber la ubicación de un módulo a simple vista.
-   **Fragilidad:** Mover un archivo que usa importaciones relativas obliga a actualizar todas esas importaciones, lo cual es tedioso y propenso a errores.
-   **"Infierno de Importaciones":** En estructuras de carpetas profundas, las rutas pueden volverse extremadamente largas (ej. `../../../../components/ui/Button`).

## 2. Solución: Rutas Absolutas con Alias `@`

Para solucionar estos problemas, el proyecto ha sido configurado para soportar rutas absolutas con un alias `@` que apunta directamente al directorio `src/`.

Esto transforma las importaciones de esto:

```javascript
// Malo: Frágil y difícil de leer
import { fetchUser } from '../../../services/github';
import { formatJoinDate } from '../../../utils/formatters';
```

A esto:

```javascript
// Bueno: Limpio, robusto y legible
import { fetchUser } from '@/services/github';
import { formatJoinDate } from '@/utils/formatters';
```

## 3. Configuración

La implementación de esta funcionalidad requirió la configuración de dos archivos:

### 3.1. `vite.config.js`

Se añadió una sección `resolve.alias` para que Vite (nuestro bundler) pueda resolver estas rutas durante el proceso de compilación y en el servidor de desarrollo.

```javascript
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // ... otros plugins
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### 3.2. `jsconfig.json`

Se creó este archivo en la raíz del proyecto para que los editores de código (como Visual Studio Code) entiendan el alias `@`. Esto es crucial para que el autocompletado, la navegación (Cmd/Ctrl + Click) y las importaciones automáticas funcionen correctamente.

```json
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

## 4. Convención de Uso

-   **Obligatorio:** Todas las importaciones de módulos que se encuentren dentro de `src/` deben usar el alias `@`.
-   **Excepción:** Las importaciones relativas están permitidas (y son preferibles) para archivos dentro del mismo directorio o en un directorio hijo inmediato (ej. `import './styles.css'` o `import ChildComponent from './ChildComponent'`).

Esta convención mejora drásticamente la experiencia de desarrollador (DX) y la mantenibilidad del proyecto a largo plazo.

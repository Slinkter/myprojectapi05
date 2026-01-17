# 📚 Documentación - myprojectapi05

**Proyecto:** GitHub Explorer  
**Versión:** 1.0.0  
**Última actualización:** 16 de Enero, 2026

---

## 📖 Índice

1. [Descripción General](#descripción-general)
2. [Arquitectura](#arquitectura)
3. [Instalación](#instalación)
4. [Desarrollo](#desarrollo)
5. [Deployment](#deployment)

---

## 🎯 Descripción General

Aplicación SPA para buscar y visualizar perfiles de GitHub con diseño minimalista.

### Stack Tecnológico

- **React 18.3** - UI Library
- **Vite 5.4** - Build Tool
- **Tailwind CSS 3.4** - Styling
- **Google Fonts** - Lora & Macondo
- **React Icons** - Iconografía

### Características

✅ Búsqueda de usuarios de GitHub  
✅ Visualización de perfil completo  
✅ Dark mode  
✅ Diseño responsive  
✅ Animaciones suaves  
✅ Feature-Based Architecture  

---

## 🏗️ Arquitectura

### Feature-Based Architecture

```
src/
├── features/                    # Features auto-contenidas
│   └── user-search/
│       ├── components/          # UI de la feature
│       ├── hooks/               # Lógica de aplicación
│       └── services/            # Integración API
├── components/                  # Componentes compartidos
│   ├── ui/                      # Sistema de diseño
│   └── ThemeToggle.jsx
├── context/                     # Estado global
├── domain/                      # Lógica de negocio
├── pages/                       # Orquestación
└── utils/                       # Utilidades
```

### Principios Aplicados

- ✅ **Vertical Slicing** - Features completas
- ✅ **Separation of Concerns** - Capas bien definidas
- ✅ **DRY** - Sin código duplicado
- ✅ **SOLID** - Principios de diseño
- ✅ **Clean Code** - Código legible

---

## 🚀 Instalación

### Requisitos

- Node.js 18+
- pnpm 8+

### Pasos

```bash
# 1. Clonar repositorio
git clone <URL>
cd myprojectapi05

# 2. Instalar dependencias
pnpm install

# 3. Ejecutar en desarrollo
pnpm run dev

# 4. Abrir navegador
http://localhost:5173
```

---

## 💻 Desarrollo

### Comandos Disponibles

```bash
pnpm run dev      # Servidor de desarrollo
pnpm run build    # Build de producción
pnpm run preview  # Preview del build
pnpm run lint     # Linter
```

### Estructura de Componentes UI

#### Button
```jsx
<Button variant="filled|outlined|text" size="sm|md|lg" fullWidth>
  Click me
</Button>
```

#### Input
```jsx
<Input 
  label="Placeholder" 
  error={boolean}
  disabled={boolean}
/>
```

#### Card
```jsx
<Card>
  <CardBody>
    Content
  </CardBody>
</Card>
```

#### Spinner
```jsx
<Spinner size="sm|md|lg" color="blue|gray|white" />
```

### Tipografías

```jsx
// Lora (por defecto)
<p>Texto con Lora</p>

// Macondo (decorativa)
<h1 className="font-macondo">Título</h1>
```

### Rutas Absolutas

Usar alias `@` para importaciones:

```javascript
// ✅ Correcto
import { Button } from '@/components/ui';
import { useGithubUser } from '@/features/user-search/hooks/useGithubUser';

// ❌ Evitar
import { Button } from '../../../components/ui';
```

### Configuración

**`vite.config.js`**
```javascript
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
}
```

**`jsconfig.json`**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

## 🌐 Deployment

### GitHub Pages

```bash
# 1. Build
pnpm run build

# 2. Deploy
pnpm run deploy
```

### Variables de Entorno

No se requieren variables de entorno. La app usa la API pública de GitHub.

### Configuración de Base URL

Para GitHub Pages, configurar en `vite.config.js`:

```javascript
export default defineConfig({
  base: '/myprojectapi05/',
  // ...
});
```

---

## 📊 Métricas del Proyecto

| Métrica | Valor |
|---------|-------|
| **Componentes** | 12 |
| **Features** | 1 (user-search) |
| **Hooks Custom** | 3 |
| **Líneas de Código** | ~1000 |
| **Bundle Size (JS)** | 159 KB (51 KB gzip) |
| **Bundle Size (CSS)** | 15 KB (3.5 KB gzip) |
| **Lighthouse Score** | 95+ |

---

## 🎨 Sistema de Diseño

### Colores

- **Primary**: Gray scale
- **Accent**: Blue (links, buttons)
- **Error**: Red
- **Success**: Green

### Espaciado

Múltiplos de 4px: `p-2`, `p-4`, `p-6`, `p-8`, `p-12`

### Breakpoints

```javascript
sm: '640px'   // Tablet
md: '768px'   // Desktop
lg: '1024px'  // Large desktop
```

---

## 📝 Changelog

### v1.0.0 (16 Enero 2026)

- ✅ Migración de Material Tailwind a Tailwind CSS puro
- ✅ Diseño minimalista implementado
- ✅ Tipografías Lora y Macondo agregadas
- ✅ Feature-Based Architecture aplicada
- ✅ Documentación consolidada

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ usando React + Vite + Tailwind CSS**

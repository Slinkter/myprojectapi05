# Sistema de UI: Material-Tailwind y Tailwind CSS

Este documento describe el sistema de diseño y la librería de componentes utilizada en el proyecto, junto con las convenciones y buenas prácticas a seguir.

## 1. Tecnologías de UI

-   **Tailwind CSS**: Es el framework CSS principal, basado en el paradigma *utility-first*. Permite construir diseños complejos directamente en el HTML/JSX aplicando clases de utilidad, lo que evita la necesidad de escribir CSS personalizado.
-   **Material-Tailwind**: Es la librería de componentes de React utilizada. Ofrece componentes pre-construidos (como `Card`, `Button`, `Input`) que siguen los principios de Material Design, pero que son completamente configurables a través de props y clases de Tailwind.

La combinación de ambas herramientas permite un desarrollo rápido de la UI, a la vez que se mantiene un alto grado de personalización y consistencia visual.

## 2. Principios de Diseño y Uso

### Utility-First sobre CSS Personalizado
-   **Principio**: Siempre se debe priorizar el uso de las clases de utilidad de Tailwind para aplicar estilos. Se debe evitar escribir archivos `.css` con CSS personalizado, a menos que sea estrictamente necesario para un efecto muy específico que Tailwind no pueda lograr.
-   **Ejemplo (Correcto)**:
    ```jsx
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        Contenido
    </div>
    ```
-   **Ejemplo (Incorrecto)**:
    ```jsx
    // No hacer esto si se puede evitar
    <div className="custom-container">...</div> 
    
    // Y en un archivo .css
    .custom-container {
        padding: 1rem;
        background-color: #f3f4f6;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }
    ```

### Composición de Componentes
-   **Principio**: Utiliza los componentes de Material-Tailwind como bloques de construcción fundamentales. La mayoría de las necesidades de la UI (inputs, botones, tarjetas, avatares) ya están resueltas por la librería.
-   **Uso**: Importa los componentes que necesites desde `@material-tailwind/react` y personalízalos mediante `props`.
    ```jsx
    import { Card, CardBody, Avatar, Typography } from "@material-tailwind/react";
    ```

### Personalización de Estilos
-   **Principio**: Los componentes de Material-Tailwind se pueden estilizar de dos maneras:
    1.  **Props de Estilo**: `color`, `variant`, `size`, etc. Úsalas siempre que sea posible para mantener la consistencia del tema.
    2.  **Prop `className`**: Para ajustes finos y específicos, puedes pasar clases de Tailwind directamente a través de la prop `className`. Esto sobreescribirá o complementará los estilos por defecto del componente.

    ```jsx
    <Button
        color="blue" // Prop de estilo
        className="dark:bg-blue-600 dark:hover:bg-blue-700" // Clases de Tailwind para el modo oscuro
    >
        Botón
    </Button>
    ```

## 3. Tema y Modo Oscuro (Dark Mode)

-   **Implementación**: El modo oscuro se gestiona a través de una clase `dark` en el elemento `<html>`, controlada por el `ThemeContext`.
-   **Uso**: Tailwind CSS tiene un modificador `dark:` que permite aplicar estilos específicos solo cuando el modo oscuro está activo.
-   **Convención**: Para cada estilo que deba cambiar en modo oscuro (colores de fondo, texto, bordes), aplica la clase base y luego su contraparte `dark:`.

    ```jsx
    // Este div tendrá fondo blanco en modo claro y gris oscuro en modo oscuro.
    <div className="bg-white dark:bg-gray-800">
    
    // Este texto será gris oscuro en modo claro y gris claro en modo oscuro.
    <p className="text-gray-800 dark:text-gray-100">Hola Mundo</p>
    </div>
    ```

## 4. Diseño Responsivo

-   **Principio**: El diseño debe ser *mobile-first*. Esto significa que los estilos por defecto (sin prefijos) se aplican a pantallas pequeñas, y se utilizan los prefijos de Tailwind (`sm:`, `md:`, `lg:`) para añadir estilos en pantallas más grandes.
-   **Ejemplo**:
    ```jsx
    // Este div tendrá 1 columna en móvil y 3 columnas en pantallas medianas o más grandes.
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* ... items ... */}
    </div>
    ```

## 5. Buenas Prácticas

-   **Consistencia**: Antes de crear un nuevo estilo o componente, verifica si Material-Tailwind o una combinación de utilidades de Tailwind ya lo resuelven.
-   **No Repetir Clases**: Si un conjunto de clases de Tailwind se repite constantemente en muchos lugares, considera extraer ese elemento a un componente de React reutilizable.
-   **Accesibilidad**: Asegúrate de que los colores de texto y fondo tengan suficiente contraste, tanto en modo claro como oscuro. Utiliza los componentes de Material-Tailwind, ya que muchos de ellos (como `Input` con `label`) ya vienen con buenas prácticas de accesibilidad incorporadas.

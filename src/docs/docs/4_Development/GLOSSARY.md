# Glosario Técnico

Este glosario define conceptos clave relacionados con la arquitectura de software y las tecnologías utilizadas en este proyecto.

---

### A

-   **API (Application Programming Interface)**: Un contrato que permite que dos piezas de software se comuniquen entre sí. En este proyecto, usamos la API REST de GitHub para obtener datos de perfiles.
-   **Arquitectura Limpia (Clean Architecture)**: Un conjunto de principios de diseño de software que aboga por la separación de conceptos (SoC), permitiendo que los sistemas sean independientes de los frameworks, la UI y la base deatos, y, por lo tanto, más fáciles de probar y mantener.
-   **Arquitectura basada en Features (Feature-Sliced Design)**: Un enfoque para organizar el código fuente donde los archivos se agrupan por funcionalidad (feature) en lugar de por su tipo técnico. Mejora la cohesión y reduce el acoplamiento.

### C

-   **Componente (React)**: Una pieza de código independiente y reutilizable que controla una parte de la interfaz de usuario. En React, los componentes pueden ser "de clase" o "funcionales". Este proyecto solo usa componentes funcionales.
-   **Componente Controlado (Controlled Component)**: Un componente de formulario (como un `<input>`) cuyo valor es controlado por el estado de React.
-   **Context (React)**: Un mecanismo para pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel. Es ideal para estado global como temas o información de usuario autenticado.

### D

-   **Debounce**: Una técnica de programación que retrasa la ejecución de una función hasta que haya pasado un cierto tiempo sin que se haya llamado. Es útil para optimizar eventos frecuentes como la escritura en un input o el redimensionamiento de la ventana.
-   **Despliegue Continuo (Continuous Deployment - CD)**: Una práctica de DevOps en la que los cambios de código que pasan las pruebas se liberan automáticamente al entorno de producción.

### E

-   **ESLint**: Una herramienta de análisis estático de código (linter) para JavaScript y TypeScript. Ayuda a encontrar y corregir problemas de formato, errores de código y violaciones de buenas prácticas.

### H

-   **Hook (React)**: Funciones que te permiten "enganchar" el estado de React y las características del ciclo de vida desde componentes funcionales. Ejemplos: `useState`, `useEffect`, `useContext`.
-   **Hook Personalizado (Custom Hook)**: Una función de JavaScript cuyo nombre comienza con `use` y que puede llamar a otros Hooks. Es un mecanismo para reutilizar lógica con estado entre componentes.

### J

-   **JSDoc**: Un lenguaje de marcado para añadir documentación a código JavaScript en comentarios. Ayuda a editores y herramientas a entender el código y proporcionar autocompletado y validación de tipos.
-   **JSX (JavaScript XML)**: Una extensión de la sintaxis de JavaScript que permite escribir una estructura similar a HTML en el código de React.

### M

-   **Material-Tailwind**: Una librería de componentes de React que implementa los principios de Material Design utilizando Tailwind CSS para sus estilos.
-   **Mock (Simulacro)**: En el contexto de las pruebas (testing), un mock es un objeto falso que simula el comportamiento de un objeto o módulo real. Se usa para aislar el código que se está probando, por ejemplo, para simular una llamada a una API sin realizar una petición de red real.

### P

-   **Prop (React)**: Abreviatura de "propiedades". Son los datos que se pasan de un componente padre a un componente hijo para configurar su comportamiento o el contenido que renderiza.
-   **Prop Drilling**: Un anti-patrón en React donde las props se pasan a través de varios niveles de componentes anidados, incluso si los componentes intermedios no las necesitan.

### R

-   **Renderizado Condicional**: En React, es la práctica de mostrar diferentes componentes o elementos de la UI basándose en el estado actual de la aplicación (ej. mostrar un `Spinner` si `isLoading` es `true`).
-   **REST (Representational State Transfer)**: Un estilo de arquitectura para diseñar APIs en red. Las APIs REST se comunican a través de HTTP y utilizan sus métodos (GET, POST, PUT, DELETE) para operar sobre los recursos.

### S

-   **Separación de Conceptos (SoC - Separation of Concerns)**: El principio de dividir un programa de computadora en distintas secciones, de manera que cada sección aborde una preocupación o responsabilidad separada. Es un pilar de la Arquitectura Limpia.
-   **SPA (Single Page Application)**: Una aplicación web que carga una única página HTML y actualiza dinámicamente su contenido a medida que el usuario interactúa con ella, en lugar de cargar páginas completamente nuevas desde el servidor.

### T

-   **Tailwind CSS**: Un framework de CSS *utility-first* que proporciona clases de bajo nivel para construir diseños directamente en el marcado, promoviendo la rapidez y la consistencia sin escribir CSS personalizado.
-   **Tree Shaking**: Un término comúnmente usado en el contexto de los empaquetadores de JavaScript (como Vite o Webpack) que se refiere al proceso de eliminar código no utilizado (código muerto) del paquete final de producción.

### U

-   **UI (User Interface)**: La interfaz de usuario; la parte visual y tangible con la que un usuario interactúa.
-   **UX (User Experience)**: La experiencia del usuario; la percepción y las emociones de una persona al interactuar con un sistema, producto o servicio.
-   **Utility-First CSS**: Un enfoque de CSS (popularizado por Tailwind) donde se utilizan clases pequeñas y de propósito único (`.text-center`, `.p-4`, `.flex`) para componer una UI, en lugar de clases grandes y semánticas (`.user-profile-card`).

### V

-   **Vite**: Una herramienta de construcción de frontend moderna que ofrece un servidor de desarrollo extremadamente rápido y un proceso de compilación optimizado para producción.

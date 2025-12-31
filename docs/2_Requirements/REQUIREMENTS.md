# Requerimientos del Sistema

Este documento detalla los requerimientos funcionales y no funcionales para el Visor de Perfiles de GitHub.

## 1. Requerimientos Funcionales (RF)

-   **RF-01: Búsqueda de Usuario**: La aplicación DEBE proporcionar un campo de texto para que el usuario ingrese un nombre de usuario de GitHub.
-   **RF-02: Inicio de Búsqueda**: La aplicación DEBE tener un botón para iniciar la acción de búsqueda. La búsqueda también DEBE poder iniciarse al presionar la tecla "Enter" en el campo de texto.
-   **RF-03: Interacción con API Externa**: La aplicación DEBE realizar una petición a la API pública de GitHub (`https://api.github.com/users/{username}`) para obtener los datos del perfil.
-   **RF-04: Feedback de Carga**: La aplicación DEBE mostrar un indicador visual de carga (ej. un spinner) mientras se espera la respuesta de la API, bloqueando la posibilidad de iniciar nuevas búsquedas simultáneamente.
-   **RF-05: Visualización de Datos del Perfil**: Si el usuario es encontrado, la aplicación DEBE mostrar, como mínimo, la siguiente información:
    -   Avatar (imagen de perfil)
    -   Nombre real del usuario
    -   Nombre de usuario de GitHub (username)
    -   Fecha de creación de la cuenta
    -   Número de repositorios públicos
    -   Número de seguidores (`followers`)
    -   Número de seguidos (`following`)
-   **RF-06: Manejo de Usuario No Encontrado**: Si la API responde con un error indicando que el usuario no existe (ej. error 404), la aplicación DEBE mostrar un mensaje de error claro y conciso al usuario.
-   **RF-07: Manejo de Otros Errores de API**: Si ocurre otro tipo de error durante la comunicación con la API (ej. límite de tasa excedido, error del servidor), la aplicación DEBE mostrar un mensaje de error apropiado.
-   **RF-08: Carga de Perfil Inicial**: La aplicación DEBE cargar un perfil de usuario predeterminado al iniciar por primera vez.
-   **RF-09: Cambio de Tema**: La aplicación DEBE permitir al usuario cambiar entre un tema visual claro y uno oscuro.
-   **RF-10: Persistencia del Tema**: La elección de tema del usuario DEBE persistir entre sesiones (ej. utilizando `localStorage`).

## 2. Requerimientos No Funcionales (RNF)

-   **RNF-01 (Rendimiento)**: El tiempo de carga inicial de la aplicación debe ser menor a 5 segundos. La respuesta visual a una búsqueda no debe superar los 3 segundos en una conexión de red promedio.
-   **RNF-02 (Usabilidad)**: La interfaz debe ser simple, intuitiva y auto-explicativa, requiriendo una curva de aprendizaje mínima o nula. Todos los elementos interactivos deben tener estados claros (hover, focus, disabled).
-   **RNF-03 (Mantenibilidad)**: El código debe seguir principios de arquitectura limpia (separación de conceptos, bajo acoplamiento) para facilitar su modificación, corrección de errores y extensión.
-   **RNF-04 (Compatibilidad)**: La aplicación debe ser completamente funcional y visualmente consistente en las últimas dos versiones estables de los siguientes navegadores: Google Chrome, Mozilla Firefox, Apple Safari y Microsoft Edge.
-   **RNF-05 (Accesibilidad)**: La aplicación debe seguir las pautas básicas de WCAG, asegurando que los colores tengan suficiente contraste y que los elementos interactivos sean accesibles mediante teclado.
-   **RNF-06 (Diseño Responsivo)**: La aplicación debe ser usable y verse bien en un rango de tamaños de pantalla, desde teléfonos móviles (ancho mínimo de 320px) hasta monitores de escritorio.

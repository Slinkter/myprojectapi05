# Casos de Uso

Este documento describe los casos de uso principales del sistema, identificando a los actores involucrados y el flujo de acciones.

## 1. Actores

-   **Usuario General**: Cualquier persona que accede a la aplicación web para buscar un perfil de GitHub.

## 2. Casos de Uso

A continuación se detallan los casos de uso del sistema.

---

### **CU-01: Buscar un perfil de GitHub**

-   **Actor Principal**: Usuario General
-   **Nivel**: Nivel de usuario
-   **Descripción**: El usuario busca un perfil de GitHub por su nombre de usuario para ver su información consolidada.
-   **Pre-condición**: El usuario ha cargado la aplicación en su navegador.
-   **Disparador**: El usuario desea encontrar la información de un perfil de GitHub.

-   **Flujo Básico (Camino Feliz)**:
    1.  El sistema muestra la página principal con la barra de búsqueda.
    2.  El usuario introduce un nombre de usuario válido de GitHub en el campo de búsqueda.
    3.  El usuario hace clic en el botón "Buscar" o presiona la tecla "Enter".
    4.  El sistema muestra un indicador de carga y deshabilita la barra de búsqueda.
    5.  El sistema realiza una petición a la API de GitHub con el nombre de usuario proporcionado.
    6.  La API de GitHub responde con los datos del usuario.
    7.  El sistema oculta el indicador de carga y presenta los datos del perfil en una tarjeta formateada.
    8.  El caso de uso finaliza.

-   **Flujos Alternativos (Extensiones)**:

    -   **CU-01.E1: Usuario no encontrado**
        1.  En el paso 6 del flujo básico, la API de GitHub responde que el usuario no existe (error 404).
        2.  El sistema oculta el indicador de carga.
        3.  El sistema muestra un mensaje de error claro, indicando "Usuario no encontrado".
        4.  La barra de búsqueda se vuelve a habilitar para permitir un nuevo intento.
        5.  El caso de uso finaliza.

    -   **CU-01.E2: Límite de API excedido**
        1.  En el paso 6 del flujo básico, la API de GitHub responde que se ha excedido el límite de peticiones (error 403).
        2.  El sistema oculta el indicador de carga.
        3.  El sistema muestra un mensaje de error claro, indicando "Límite de tasa de la API excedido. Inténtalo más tarde.".
        4.  La barra de búsqueda se vuelve a habilitar.
        5.  El caso de uso finaliza.

    -   **CU-01.E3: Búsqueda con campo vacío**
        1.  En el paso 2 del flujo básico, el usuario intenta realizar una búsqueda sin haber introducido texto.
        2.  El sistema muestra una validación visual en el campo de texto (ej. un borde rojo) para indicar que el campo es obligatorio.
        3.  El sistema no realiza ninguna petición a la API.
        4.  El caso de uso finaliza.

---

### **CU-02: Cambiar tema de la interfaz**

-   **Actor Principal**: Usuario General
-   **Nivel**: Nivel de sistema
-   **Descripción**: El usuario cambia la apariencia visual de la aplicación entre un tema claro y uno oscuro.
-   **Pre-condición**: El usuario está en la página principal.
-   **Disparador**: El usuario desea cambiar el modo de color de la interfaz.

-   **Flujo Básico**:
    1.  El sistema muestra un control (interruptor o botón) para cambiar el tema.
    2.  El usuario hace clic en el control de cambio de tema.
    3.  El sistema invierte el tema actual (de claro a oscuro, o de oscuro a claro).
    4.  El sistema aplica los nuevos estilos a toda la aplicación de forma inmediata.
    5.  El sistema guarda la preferencia del nuevo tema en el almacenamiento local del navegador para que persista en futuras visitas.
    6.  El caso de uso finaliza.

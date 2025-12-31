# Descripción General del Proyecto: Visor de Perfiles de GitHub

## 1. Propósito del Proyecto

El proyecto **Visor de Perfiles de GitHub** es una aplicación de página única (SPA) desarrollada en React. Su objetivo principal es ofrecer una interfaz de usuario limpia, rápida y efectiva para que cualquier persona pueda buscar y visualizar perfiles de desarrolladores en la plataforma GitHub.

La aplicación sirve tanto como un proyecto de portafolio técnico, demostrando buenas prácticas de arquitectura de software en el ecosistema de React, como una utilidad funcional para reclutadores, desarrolladores o curiosos que deseen obtener una vista rápida de un perfil de GitHub.

## 2. Problema que Resuelve

Encontrar información consolidada y clave de un usuario de GitHub a menudo requiere navegar por varias páginas dentro de la plataforma. Este proyecto aborda esa necesidad proveyendo una vista de "tarjeta de presentación" digital que resume la información más relevante de un perfil en un único lugar y de forma instantánea.

Los problemas específicos que se resuelven son:
- **Acceso Rápido:** Evita la necesidad de navegar por la web de GitHub para obtener datos básicos de un perfil.
- **Consolidación de Información:** Presenta el avatar, nombre, estadísticas de seguidores/seguidos y repositorios en una vista unificada.
- **Manejo de Errores:** Provee feedback inmediato y claro al usuario si el perfil buscado no existe o si hay problemas de comunicación con la API.

## 3. Objetivos

### Objetivos Técnicos
- **Demostrar una Arquitectura Limpia:** Implementar una separación clara de responsabilidades (Vista, Lógica de UI, Servicios) utilizando patrones modernos de React (hooks personalizados, feature slicing).
- **Código Mantenible y Escalable:** Crear una base de código que sea fácil de entender, modificar y extender con nuevas funcionalidades.
- **Rendimiento:** Asegurar que la aplicación sea rápida y responsiva, utilizando herramientas modernas como Vite y siguiendo buenas prácticas de optimización.
- **Calidad del Código:** Mantener un estándar de código alto a través de herramientas de linting y formateo.

### Objetivos Funcionales
- **Búsqueda Exitosa:** Permitir al usuario buscar y encontrar cualquier perfil público de GitHub por su nombre de usuario.
- **Visualización Clara:** Mostrar la información del perfil de una manera estéticamente agradable y fácil de leer.
- **Feedback de Usuario:** Informar al usuario sobre los estados de la aplicación (cargando, error, éxito) de manera no intrusiva.

## 4. Alcance del Proyecto

La versión actual del proyecto incluye las siguientes funcionalidades:

- **Búsqueda de Usuario:** Un campo de entrada y un botón para buscar usuarios.
- **Carga de Perfil por Defecto:** Al cargar la aplicación, se muestra un perfil predeterminado.
- **Visualización de Tarjeta de Usuario:** Muestra la información del perfil encontrado.
- **Indicador de Carga:** Un spinner se muestra mientras la aplicación espera la respuesta de la API.
- **Visualización de Errores:** Muestra un mensaje claro cuando un usuario no es encontrado o cuando se excede el límite de la API de GitHub.
- **Tema Oscuro/Claro:** Un interruptor para cambiar entre temas de UI.

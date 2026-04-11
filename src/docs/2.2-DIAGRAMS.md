# 📐 Diagramas: GitHub Explorer

**Versión:** 1.0.0
**Fecha:** 17 de Enero, 2026

---

## 1. Propósito

Este documento contiene diagramas generados con Mermaid que ilustran la arquitectura, el flujo de datos y otros aspectos técnicos clave del proyecto **GitHub Explorer**.

---

## 2. Diagrama de Arquitectura del Software

Este diagrama muestra la **Arquitectura Basada en Features** del proyecto, con sus dos componentes principales: `features` y `shared`.

```mermaid
graph TD
    subgraph App [Aplicación Principal]
        A[main.jsx] --> B[App.jsx]
    end

    subgraph Features [src/features]
        direction LR
        F1[user-search]
    end

    subgraph Shared [src/shared]
        direction LR
        S1[components]
        S2[context]
        S3[domain]
        S4[utils]
    end

    B --> F1
    F1 --> Shared
```

**Descripción:**
- La `App` principal monta la feature `user-search`.
- La feature `user-search` consume elementos reutilizables del directorio `shared`.

---

## 3. Diagrama de Flujo de Datos (Búsqueda de Usuario)

Este diagrama ilustra la secuencia de eventos y el flujo de datos cuando un usuario realiza una búsqueda.

```mermaid
sequenceDiagram
    actor User
    participant SearchBar
    participant UserSearchPage
    participant UserSearchContext
    participant useGithubUser
    participant searchUserUseCase
    participant githubService
    participant GitHub API

    User->>SearchBar: 1. Introduce username y hace clic en buscar
    SearchBar->>UserSearchPage: 2. Llama a onSearch(username)
    UserSearchPage->>UserSearchContext: 3. Llama a searchUser(username)
    UserSearchContext->>useGithubUser: 4. Ejecuta la función searchUser
    
    useGithubUser->>useGithubUser: 5. Actualiza estado (isLoading = true)
    
    useGithubUser->>searchUserUseCase: 6. Invoca el caso de uso
    searchUserUseCase->>githubService: 7. Llama a fetchUser(username)
    githubService->>GitHub API: 8. Realiza petición GET /users/{username}
    
    GitHub API-->>githubService: 9. Devuelve datos del usuario (JSON)
    githubService-->>searchUserUseCase: 10. Retorna los datos
    searchUserUseCase-->>useGithubUser: 11. Retorna los datos del usuario
    
    useGithubUser->>useGithubUser: 12. Actualiza estado (user = datos, isLoading = false)
    
    UserSearchContext-->>UserSearchPage: 13. Notifica a los suscriptores del cambio de estado
    UserSearchPage-->>User: 14. Re-renderiza la UI y muestra UserCard
```

---

## 4. Diagrama de Ciclo de Vida del Componente Principal

Este diagrama simplificado muestra el ciclo de vida de la página `UserSearchPage` y cómo responde a los cambios de estado del contexto.

```mermaid
graph TD
    Start((Inicio)) --> InitialState{Estado Inicial};
    
    subgraph "Ciclo de Interacción"
        InitialState -- "Búsqueda" --> LoadingState{Cargando};
        LoadingState -- "API Responde OK" --> SuccessState{Éxito: Muestra UserCard};
        LoadingState -- "API Responde Error" --> ErrorState{Error: Muestra ErrorDisplay};
        SuccessState -- "Nueva Búsqueda" --> LoadingState;
        ErrorState -- "Nueva Búsqueda" --> LoadingState;
    end
```
---
## 5. Estructura de Componentes de la Feature

```mermaid
graph TD
    subgraph "Feature: user-search"
        P[UserSearchPage]
        
        subgraph "Componentes de UI"
            C1[SearchBar]
            C2[UserCard]
            C3[ErrorDisplay]
        end

        subgraph "Lógica y Estado"
            H[useGithubUser]
            CTX[UserSearchContext]
        end

        subgraph "Datos"
            UC[searchUserUseCase]
            S[githubService]
        end

        P --> C1
        P --> C2
        P --> C3
        P --> CTX

        CTX --> H
        H --> UC
        UC --> S
    end
```

**Descripción:**
- La página `UserSearchPage` es el punto de entrada que consume el contexto y renderiza los componentes de UI según el estado.
- La lógica de estado está encapsulada en el hook `useGithubUser`, que es provisto a través de `UserSearchContext`.
- La lógica de negocio y el acceso a datos están aislados en el caso de uso y el servicio.

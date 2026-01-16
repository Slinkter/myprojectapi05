# Modelo y Estructura de Datos

Este documento define la estructura de los objetos de datos clave que se manejan dentro de la aplicación. Dado que la aplicación interactúa principalmente con la API de GitHub, el modelo de datos principal es el objeto `User` que esta API retorna.

## 1. Objeto `User`

Este objeto representa a un usuario de GitHub. La aplicación no utiliza todos los campos proporcionados por la API, sino un subconjunto específico para mostrar en la tarjeta de perfil.

A continuación se describe la estructura del objeto `user` tal como es consumido por la aplicación.

### Estructura del Objeto

```json
{
  "login": "slinkter",
  "id": 12345,
  "avatar_url": "https://avatars.githubusercontent.com/u/12345?v=4",
  "html_url": "https://github.com/slinkter",
  "name": "John Doe",
  "bio": "Software Developer | Tech Enthusiast",
  "public_repos": 150,
  "followers": 2500,
  "following": 50,
  "created_at": "2015-01-20T18:04:02Z"
}
```

### Descripción de Campos Utilizados

| Campo | Tipo | Opcional | Descripción |
| :--- | :--- | :--- | :--- |
| `login` | `string` | No | El nombre de usuario único de GitHub. Se usa como identificador principal en la UI. |
| `avatar_url`| `string` | No | La URL a la imagen de perfil (avatar) del usuario. |
| `html_url` | `string` | No | La URL a la página principal del perfil del usuario en GitHub. |
| `name` | `string` | **Sí** | El nombre real/público que el usuario ha configurado. Puede ser `null`. |
| `bio` | `string` | **Sí** | La biografía personal que el usuario ha configurado. Puede ser `null`. |
| `public_repos`| `number` | No | El número de repositorios públicos que posee el usuario. |
| `followers` | `number` | No | El número de otros usuarios que siguen a este usuario. |
| `following` | `number` | No | El número de otros usuarios a los que este usuario sigue. |
| `created_at`| `string` | No | La fecha y hora en formato ISO 8601 en la que se creó la cuenta. Este campo se formatea para mostrarse en un formato legible. |

## 2. Flujo del Dato en la Aplicación

1.  **Origen**: La capa de servicios (`services/github.js`) realiza una petición al endpoint `https://api.github.com/users/{username}`.
2.  **Recepción**: La API de GitHub retorna un objeto JSON con la estructura completa del usuario.
3.  **Almacenamiento en Estado**: El hook `useGithubUser` recibe este objeto y lo guarda en su estado (`const [user, setUser] = useState(null)`).
4.  **Consumo**: El componente `UserCard.jsx` recibe el objeto `user` a través de sus props, desestructura los campos necesarios y los renderiza en la interfaz.

No se realizan transformaciones significativas al modelo de datos entre la recepción de la API y su consumo en la UI, a excepción del campo `created_at`, que se formatea a una cadena de texto legible mediante una función en `utils/formatters.js`.

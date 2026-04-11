import { z } from "zod";

/**
 * @file Esquema de datos para el usuario de GitHub.
 * Define la estructura y validaciones de los datos obtenidos de la API.
 */

/**
 * Esquema de Zod para validar la respuesta de la API de GitHub.
 * Asegura que los tipos de datos sean consistentes con la UI.
 */
export const GithubUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  avatar_url: z.string().url(),
  html_url: z.string().url(),
  name: z.string().nullable().optional(),
  company: z.string().nullable().optional(),
  blog: z.string().nullable().optional(),
  location: z.string().nullable().optional(),
  bio: z.string().nullable().optional(),
  public_repos: z.number().default(0),
  followers: z.number().default(0),
  following: z.number().default(0),
  created_at: z.string(),
});

/**
 * @typedef {z.infer<typeof GithubUserSchema>} GithubUser
 */

/**
 * Esquema para validar un nombre de usuario de GitHub antes de la búsqueda.
 */
export const GithubUsernameSchema = z.string()
  .min(1, "El nombre de usuario no puede estar vacío.")
  .max(39, "Máximo 39 caracteres.")
  .regex(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, "Formato de usuario inválido.");

/**
 * Minimal environment validation to keep startup errors friendly.
 * dotenv is loaded via the npm scripts (nodemon -r dotenv/config).
 */
const required = ['DATABASE_URL', 'JWT_SECRET'];

export function validateEnv() {
  const missing = required.filter((k) => !process.env[k] || String(process.env[k]).trim() === '');

  if (missing.length) {
    const msg =
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Create backend/.env based on backend/.env.example.';
    // Throwing here fails fast before Prisma/Express start.
    throw new Error(msg);
  }
}

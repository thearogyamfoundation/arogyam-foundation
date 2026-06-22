// Configuration file - uses environment variables for security
// Set VITE_OPENROUTER_API_KEY in your .env file or Vercel environment variables

// API key from environment variable (Vite requires VITE_ prefix)
export const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || '';

// Model to use - see available models at https://openrouter.ai/models
export const MODEL = import.meta.env.VITE_OPENROUTER_MODEL || 'openai/gpt-oss-20b:free';
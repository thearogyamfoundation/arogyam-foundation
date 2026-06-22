// Configuration file - uses environment variables for security
// Set VITE_OPENROUTER_API_KEYS in your .env file or Vercel environment variables
// Multiple keys can be comma-separated for fallback

// API keys from environment variable (comma-separated for fallback)
// Example: key1,key2,key3
const keysString = import.meta.env.VITE_OPENROUTER_API_KEYS || import.meta.env.VITE_OPENROUTER_API_KEY || '';

export const API_KEYS = keysString.split(',').map(k => k.trim()).filter(k => k);

// Primary key (first one)
export const API_KEY = API_KEYS[0] || '';

// Model to use - see available models at https://openrouter.ai/models
export const MODEL = import.meta.env.VITE_OPENROUTER_MODEL || 'openai/gpt-oss-20b:free';
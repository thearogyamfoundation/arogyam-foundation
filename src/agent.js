// Import configuration
import { API_KEYS, MODEL } from './config.js';

/**
 * Simple chat using OpenRouter API directly with fallback keys
 */
export async function chat(message) {
  if (!API_KEYS.length) {
    throw new Error('API key not configured. Set VITE_OPENROUTER_API_KEY in environment variables.');
  }

  console.log('[Agent] Calling model:', MODEL);
  console.log('[Agent] Available keys:', API_KEYS.length);

  let lastError = null;

  // Try each API key until one works
  for (let i = 0; i < API_KEYS.length; i++) {
    const apiKey = API_KEYS[i];
    console.log(`[Agent] Trying key ${i + 1}/${API_KEYS.length}...`);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:5173',
          'X-Title': 'Arogyam Foundation',
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [{ role: 'user', content: message }],
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error(`[Agent] Key ${i + 1} failed:`, error);

        // If "User not found" (401), this key is invalid - skip to next
        // Otherwise, throw the error
        if (response.status === 401) {
          const errorObj = JSON.parse(error);
          if (errorObj.error?.code === 401) {
            lastError = new Error('User not found - key is invalid');
            continue; // Try next key
          }
        }
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      console.log('[Agent] Response:', data);

      return data.choices?.[0]?.message?.content || 'No response';
    } catch (err) {
      console.error(`[Agent] Key ${i + 1} error:`, err.message);
      lastError = err;
      // Continue to next key
    }
  }

  // All keys failed
  console.error('[Agent] All API keys failed');
  throw lastError || new Error('All API keys failed');
}

/**
 * Chat with system prompt
 */
export async function chatWithSystem(systemPrompt, userMessage) {
  const fullPrompt = `${systemPrompt}\n\nUser: ${userMessage}`;
  return chat(fullPrompt);
}

export default { chat, chatWithSystem };
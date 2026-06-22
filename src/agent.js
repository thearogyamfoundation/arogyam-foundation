// Import configuration
import { API_KEY, MODEL } from './config.js';

/**
 * Simple chat using OpenRouter API directly
 */
export async function chat(message) {
  if (!API_KEY) {
    throw new Error('API key not configured. Set VITE_OPENROUTER_API_KEY in environment variables.');
  }

  console.log('[Agent] Calling model:', MODEL);

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
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
    console.error('[Agent] API Error:', error);
    throw new Error(`API request failed: ${response.status}`);
  }

  const data = await response.json();
  console.log('[Agent] Response:', data);

  return data.choices?.[0]?.message?.content || 'No response';
}

/**
 * Chat with system prompt
 */
export async function chatWithSystem(systemPrompt, userMessage) {
  const fullPrompt = `${systemPrompt}\n\nUser: ${userMessage}`;
  return chat(fullPrompt);
}

export default { chat, chatWithSystem };
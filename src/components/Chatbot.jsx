import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { chat } from '../agent';

// Format message content to HTML (plain text with simple formatting)
function formatMessage(content) {
  if (!content) return '';

  let formatted = content
    // Escape HTML
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Bold text **text**
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Line breaks
    .replace(/\n/g, '<br/>');

  // Format numbered lists with blue numbers
  formatted = formatted.replace(/(\d+)\.\s\*\*(.*?)\*\*:\s?(.*?)(?=\n\d+\.|$)/gs,
    '<div class="bot-list-item"><span class="bot-list-num">$1</span><strong>$2</strong>: $3</div>');

  // Format bullet points
  formatted = formatted.replace(/-\s\*\*(.*?)\*\*:\s?(.*?)(?=\n-|$)/gs,
    '<div class="bot-list-item"><span class="bot-bullet">•</span><strong>$1</strong>: $2</div>');

  // Clean up extra <br/>
  formatted = formatted.replace(/(<br\/>){3,}/g, '<br/><br/>');

  return formatted;
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  // Listen for custom event to open chatbot from MindMantra button
  useEffect(() => {
    const handleOpenChatbot = () => setIsOpen(true);
    window.addEventListener('openChatbot', handleOpenChatbot);
    return () => window.removeEventListener('openChatbot', handleOpenChatbot);
  }, []);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! I\'m MindMantra, your wellness companion from Arogyam Foundation. "Sukham Sampadam" - Wellness is Wealth. How can I support you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const systemPrompt = `You are MindMantra, a friendly and empathetic AI assistant for Arogyam Foundation NGO.
Arogyam Foundation's tagline is "Sukham Sampadam" which means "Wellness is Wealth" and focuses on mental and physical wellness.

Key initiatives:
- MindMitra: Anonymous multilingual AI chatbot for emotional support
- RedAlert: SMS-based period tracker and hygiene educator
- WellBeing India: Mental health awareness programs

Your role:
- Be warm, compassionate, and understanding
- Provide accurate information about Arogyam's programs if user asks for it
- Offer emotional support every time someone reaches out
- Encourage people to seek help when needed
- Guide people to appropriate resources
- Maintain a positive, hopeful tone

Guidelines:
- Do NOT mention donations
- If the user is in crisis, encourage them to tell you everything and seek a mental health professional
- Do NOT provide medical advice
- If asked about mental health, do not promote MindMitra chatbot instead provide general emotional support
- If asked about menstrual health, do not promote RedAlert program instead provide general hygiene tips
- Keep responses concise but helpful
- Be culturally sensitive
- REMEMBER CONTEXT FROM PREVIOUS MESSAGES IN THE SAME CONVERSATION
- Do NOT mention any personal phone numbers unless it's an official indian govt emergency numbers.
- Theres no need to mention all the points, only mention if relevant to the user's query`;

      // Build conversation history from previous messages
      const conversationHistory = messages
        .map(msg => `${msg.role === 'user' ? 'User' : 'MindMantra'}: ${msg.content}`)
        .join('\n\n');

      const prompt = `${systemPrompt}\n\nConversation so far:\n${conversationHistory}\n\nUser: ${userMessage}`;

      console.log('Sending prompt:', prompt);
      const response = await chat(prompt);
      console.log('Response received:', response);
      setMessages(prev => [...prev, { role: 'bot', content: response || 'I\'m here to support you. Could you tell me more?' }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'bot',
        content: 'I\'m currently experiencing some technical difficulties. Please try again later, or reach out to us directly for support.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} color="white" /> : <img src="/images/mindmantra.jpg" alt="MindMantra" className="chat-logo-img" />}
      </button>

      <div className={`chat-modal ${isOpen ? 'active' : ''}`}>
        {/* Chat Header */}
        <div className="chat-header">
          <img src="/images/mindmantra.jpg" alt="MindMantra" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
          <div className="chat-header-text">
            <h3>MindMantra</h3>
            <p>AI Wellness Companion</p>
          </div>
          <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
            <X size={20} color="white" />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.role}`}
              dangerouslySetInnerHTML={{ __html: msg.role === 'bot' ? formatMessage(msg.content) : msg.content }}
            />
          ))}
          {isLoading && (
            <div className="chat-message bot">
              <span>Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button className="btn btn-primary" onClick={sendMessage} disabled={isLoading}>
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
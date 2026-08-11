"use client";

import { useState, useRef, useEffect } from "react";

// Generate a random session ID once when the component mounts
const generateSessionId = () => Math.random().toString(36).substring(2, 15);

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sessionId] = useState(generateSessionId());
  const [messages, setMessages] = useState<{ role: 'user' | 'bot' | 'form', text: string }[]>([
    { role: 'bot', text: 'Hi there! 👋 How can we help you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Lead Form State
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMsg = message.trim();
    if (!userMsg) return;

    // Add user message to UI
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("https://multi-tenant-chatbot-production-55f0.up.railway.app/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bot_id: "tecwrites",
          question: userMsg,
          session_id: sessionId
        })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [...prev, { role: 'bot', text: data.answer }]);
        
        // Render the form if the bot requires a lead
        if (data.lead_required && !leadSubmitted) {
          setMessages(prev => [...prev, { role: 'form', text: 'Please provide your details so we can reach out:' }]);
        }
      } else {
        setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm having trouble connecting right now." }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Network error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("https://multi-tenant-chatbot-production-55f0.up.railway.app/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bot_id: "tecwrites",
          session_id: sessionId,
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone
        })
      });
      
      if (res.ok) {
        setLeadSubmitted(true);
        setMessages(prev => [...prev, { role: 'bot', text: 'Thank you! Our team has received your information and will be in touch shortly.' }]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="clay-card w-[340px] sm:w-[380px] h-[540px] max-h-[calc(100vh-3rem)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300 shadow-2xl bg-surface rounded-2xl border border-outline-variant/30">
          {/* Header */}
          <div className="bg-primary p-4 text-on-primary flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">support_agent</span>
              <span className="font-label-caps text-sm tracking-wider uppercase">Live Chat</span>
            </div>
            <button 
              onClick={toggleChat}
              className="hover:scale-110 transition-transform flex items-center justify-center p-1 rounded-full hover:bg-white/10"
              title="Close Chat"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 p-4 bg-surface/50 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div key={index} className={`w-full flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                {msg.role !== 'form' ? (
                  <div 
                    className={`p-3.5 rounded-2xl text-sm max-w-[85%] shadow-sm leading-relaxed ${
                      msg.role === 'bot' 
                        ? 'bg-surface-container-high text-on-surface-variant rounded-tl-sm' 
                        : 'bg-primary text-on-primary rounded-tr-sm'
                    }`}
                  >
                    {/* Parse out raw JSON string if it slips through during testing */}
                    {msg.text.startsWith('{') && msg.text.includes('"message"')
                      ? (() => {
                          try {
                            const parsed = JSON.parse(msg.text);
                            return parsed.message || parsed.reply || msg.text;
                          } catch {
                            return msg.text;
                          }
                        })()
                      : msg.text}
                  </div>
                ) : (
                  <div className="bg-surface-container-high text-on-surface-variant p-4 rounded-2xl rounded-tl-sm text-sm self-start w-[90%] shadow-sm mt-2 border border-outline-variant/30">
                    <p className="mb-3 font-medium text-primary">{msg.text}</p>
                    {leadSubmitted ? (
                      <div className="text-[#059669] bg-[#d1fae5] p-3 rounded-xl text-center font-medium border border-[#34d399]/30">
                        ✓ Details submitted successfully
                      </div>
                    ) : (
                      <form onSubmit={handleLeadSubmit} className="flex flex-col gap-2.5">
                        <input 
                          required 
                          type="text" 
                          placeholder="Your Name" 
                          value={leadData.name} 
                          onChange={e => setLeadData(prev => ({...prev, name: e.target.value}))} 
                          className="bg-surface border border-outline-variant/50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface w-full transition-all" 
                        />
                        <input 
                          required 
                          type="email" 
                          placeholder="Email Address" 
                          value={leadData.email} 
                          onChange={e => setLeadData(prev => ({...prev, email: e.target.value}))} 
                          className="bg-surface border border-outline-variant/50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface w-full transition-all" 
                        />
                        <input 
                          required 
                          type="tel" 
                          placeholder="Phone Number" 
                          value={leadData.phone} 
                          onChange={e => setLeadData(prev => ({...prev, phone: e.target.value}))} 
                          className="bg-surface border border-outline-variant/50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface w-full transition-all" 
                        />
                        <button 
                          type="submit" 
                          disabled={isLoading} 
                          className="bg-primary text-on-primary py-2.5 rounded-lg font-medium mt-1 hover:brightness-110 transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          {isLoading ? "Sending..." : "Submit Details"}
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="bg-surface-container-high text-on-surface-variant p-3.5 rounded-2xl rounded-tl-sm text-sm self-start shadow-sm flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <div className="p-3 bg-surface border-t border-outline-variant/30">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..." 
                className="flex-1 bg-surface-container-lowest border border-outline-variant/50 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-on-surface"
                disabled={isLoading}
              />
              <button 
                type="submit"
                className="bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md disabled:opacity-50"
                disabled={!message.trim() || isLoading}
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button (Only visible when chat is closed) */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="clay-btn w-14 h-14 rounded-full flex items-center justify-center text-on-primary shadow-clay-active hover:scale-105 transition-transform"
          title="Open Live Chat"
        >
          <span className="material-symbols-outlined text-2xl transition-all duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>
            chat_bubble
          </span>
        </button>
      )}
    </div>
  );
}

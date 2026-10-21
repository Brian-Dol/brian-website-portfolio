"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string; meta?: string };

const SUGGESTIONS = [
  "What are Brian's strongest skills?",
  "Tell me about his AI and automation work",
  "How does this chatbot work?",
  "What is his experience with APIs?",
];

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi! I'm Brian's AI assistant. Ask me about his experience, skills or projects, or how I was built.",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy, open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;
    const next: Message[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content: c }) => ({ role, content: c })),
        }),
      });
      const data = (await res.json()) as {
        reply?: string;
        error?: string;
        meta?: { model: string; latencyMs: number };
      };
      if (!res.ok || !data.reply) throw new Error(data.error ?? "Request failed");
      const meta = data.meta
        ? `POST /api/chat · ${res.status} · ${data.meta.latencyMs} ms · ${data.meta.model.split("/").pop()}`
        : undefined;
      setMessages([...next, { role: "assistant", content: data.reply, meta }]);
    } catch (error) {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            error instanceof Error && error.message
              ? error.message
              : "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void send(input);
  }

  return (
    <div className="chatbot">
      {open && (
        <section className="chat-panel" aria-label="AI assistant">
          <header className="chat-header">
            <div>
              <strong>Ask Brian&apos;s AI</strong>
              <span>Live demo: REST API + LLM integration</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </header>
          <div className="chat-log" ref={logRef} aria-live="polite">
            {messages.map((message, index) => (
              <div className={`chat-msg chat-${message.role}`} key={index}>
                <p>{message.content}</p>
                {message.meta && <code>{message.meta}</code>}
              </div>
            ))}
            {busy && (
              <div className="chat-msg chat-assistant chat-typing" aria-label="Thinking">
                <i />
                <i />
                <i />
              </div>
            )}
          </div>
          {messages.length === 1 && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map((question) => (
                <button type="button" key={question} onClick={() => void send(question)}>
                  {question}
                </button>
              ))}
            </div>
          )}
          <form className="chat-form" onSubmit={onSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Brian..."
              maxLength={500}
              aria-label="Your question"
            />
            <button type="submit" disabled={busy || !input.trim()}>
              Send
            </button>
          </form>
        </section>
      )}
      <button
        type="button"
        className="chat-launcher"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="chat-launcher-dot" aria-hidden="true" />
        {open ? "Close" : "Ask my AI"}
      </button>
    </div>
  );
}

import { env } from "cloudflare:workers";
import { SYSTEM_PROMPT } from "@/lib/profile";

const MODEL = "@cf/meta/llama-3.1-8b-instruct-fp8";
const MAX_MESSAGES = 12;
const MAX_CHARS = 600;

type ChatMessage = { role: "user" | "assistant"; content: string };

function bad(message: string, status = 400) {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return bad("Cross-origin requests are not allowed.", 403);
  }

  let body: { messages?: unknown };
  try {
    body = await request.json();
  } catch {
    return bad("Request body must be JSON.");
  }

  if (!Array.isArray(body.messages) || body.messages.length === 0) {
    return bad("`messages` must be a non-empty array.");
  }

  const messages: ChatMessage[] = [];
  for (const item of body.messages.slice(-MAX_MESSAGES)) {
    const m = item as Partial<ChatMessage>;
    if ((m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") {
      return bad("Each message needs a role (user or assistant) and string content.");
    }
    messages.push({ role: m.role, content: m.content.slice(0, MAX_CHARS) });
  }
  if (messages[messages.length - 1].role !== "user") {
    return bad("The last message must be from the user.");
  }

  const started = Date.now();
  try {
    const result = (await env.AI.run(MODEL, {
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 400,
      temperature: 0.4,
    })) as { response?: string };

    return Response.json({
      reply: result.response?.trim() || "Sorry, I couldn't come up with an answer.",
      meta: { model: MODEL, latencyMs: Date.now() - started, messagesSent: messages.length },
    });
  } catch {
    return bad("The AI service is unavailable right now. Please try again shortly.", 502);
  }
}

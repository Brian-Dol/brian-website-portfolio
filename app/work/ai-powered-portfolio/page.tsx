import Link from "next/link";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import SiteHeader from "@/components/SiteHeader";
import { architectureDiagrams } from "@/lib/architectureDiagrams";

const liveUrl = "https://portfolio.briandol.workers.dev/";
const sourceUrl = "https://github.com/Brian-Dol/brian-website-portfolio";

const decisions = [
  {
    title: "Add a free contact path with an automatic reply.",
    text: "The contact form posts to Formspree, and a small Google Apps Script sends an acknowledgement email with a per-address cooldown, avoiding a paid service.",
  },
  {
    title: "Keep the architecture proportionate to the problem.",
    text: "A curated system prompt is sufficient for a relatively small, stable professional knowledge base. A retrieval pipeline would add complexity without necessarily providing a meaningful benefit at this stage.",
  },
  {
    title: "Validate at the API boundary.",
    text: "The chat endpoint checks request structure, allowed message roles, message content, history length, and the final message role before invoking the model.",
  },
  {
    title: "Keep the main experience lightweight.",
    text: "Server-rendered page content reduces the need for client-side data fetching. Interactive components use client-side state only where necessary.",
  },
  {
    title: "Make operational behavior visible.",
    text: "The health endpoint and chatbot request trace give visitors a way to see that the interface communicates with a real backend.",
  },
];

const limitations = [
  "No dedicated automated test suite yet.",
  "No application-level rate limiting on the chat endpoint.",
  "AI responses are not streamed.",
  "Chat accessibility can be improved, including keyboard navigation and focus management.",
  "The chatbot's origin check is a basic browser-request guard, not authentication or complete abuse prevention.",
  "The contact form's automatic acknowledgement is sent from a free Google Apps Script, so it can land in the sender's spam folder.",
];

const nextSteps = [
  "Add API rate limiting and abuse monitoring.",
  "Implement automated tests for validation, chat behavior, and main user flows.",
  "Stream AI responses to improve perceived responsiveness.",
  "Improve keyboard navigation and focus management in the chat panel.",
  "Add a sitemap, structured metadata, and a self-hosted CV file.",
  "Consolidate professional profile data so the website and chatbot knowledge base remain consistent.",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="case-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PortfolioCaseStudy() {
  return (
    <>
      <SiteHeader />
      <main className="case-study page-wrap">
        <Link className="case-back" href="/#work">
          <span aria-hidden="true">←</span> Back to selected work
        </Link>

        <header className="case-hero">
          <p className="eyebrow">ENGINEERING CASE STUDY · PORTFOLIO ARCHITECTURE</p>
          <h1>
            Building an AI-powered
            <br />
            <span>engineering portfolio.</span>
          </h1>
          <p className="case-stack">
            NEXT.JS · REACT · TYPESCRIPT · CLOUDFLARE WORKERS · WORKERS AI
          </p>
          <p className="case-lede">
            I built my portfolio as a serverless web application rather than a collection of
            static pages. It combines a custom interface, server-rendered content, API endpoints,
            and an AI assistant that answers questions about my professional experience and
            projects.
          </p>
          <p className="case-lede">
            The goal was to create a portfolio that demonstrates the engineering capabilities it
            describes while keeping hosting and operational overhead low.
          </p>
          <div className="case-actions">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Explore the live portfolio ↗
            </a>
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
              View source on GitHub ↗
            </a>
          </div>
        </header>

        <section className="case-section">
          <p className="eyebrow">01 / ARCHITECTURE</p>
          <div className="case-content">
            <h2>The architecture</h2>
            <p>
              The application uses Next.js App Router conventions, React Server Components where
              appropriate, and TypeScript for application code. Vinext and its Cloudflare
              integration provide the build and runtime path for deploying the application to
              Cloudflare Workers.
            </p>
            <p>
              The deployed application uses Cloudflare&apos;s asset and AI bindings, with API
              route handlers for health checks and conversational requests.
            </p>

            <ArchitectureDiagram diagram={architectureDiagrams["ai-powered-portfolio"]} />

            <h3>Website request</h3>
            <div className="case-flow">Browser <span>→</span> Cloudflare Worker <span>→</span> Server-rendered React page or static asset</div>
            <h3>Health check</h3>
            <div className="case-flow">Browser <span>→</span> <code>/api/health</code> <span>→</span> Worker route handler <span>→</span> JSON status response</div>
            <h3>AI conversation</h3>
            <div className="case-flow">
              Chat interface <span>→</span> <code>/api/chat</code> <span>→</span> Request validation <span>→</span> History preparation <span>→</span> Workers AI <span>→</span> JSON reply
            </div>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">02 / AI ASSISTANT</p>
          <div className="case-content">
            <h2>A grounded conversational assistant</h2>
            <p>
              The chatbot uses the <code>@cf/meta/llama-3.1-8b-instruct-fp8</code> model through
              the Cloudflare Workers AI binding. Rather than introducing a vector database and
              retrieval pipeline for a small knowledge base, curated professional information
              and response rules are included in a system prompt.
            </p>
            <p>
              The backend validates the request, accepts user and assistant messages, limits
              conversation history, truncates individual messages, and checks that the latest
              message comes from the user before calling the model.
            </p>
            <p>
              This keeps the implementation relatively simple while demonstrating AI
              integration, API design, input validation, and server-side model invocation.
            </p>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">03 / INTERFACE</p>
          <div className="case-content">
            <h2>Interface engineering</h2>
            <p>
              The interface uses custom CSS rather than a component library. It includes
              responsive navigation, a filterable project gallery, an interactive experience
              timeline, technology badges, and a floating chat interface.
            </p>
            <p>
              Most page content is server-rendered, while client-side React state handles
              interactions that need it. CSS variables and custom animations support the visual
              system, with reduced-motion handling for applicable effects.
            </p>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">04 / DEPLOYMENT</p>
          <div className="case-content">
            <h2>From GitHub to Cloudflare</h2>
            <p>
              The source code is maintained on GitHub. Changes pushed to the main branch trigger
              the configured Cloudflare Workers Builds pipeline, which builds and deploys the
              application.
            </p>
            <p>
              The build uses the project&apos;s vinext-specific scripts. The application runs on
              Cloudflare&apos;s serverless infrastructure without a separately managed Node.js
              server.
            </p>
            <div className="case-code">
              <code>npm run build:vinext</code>
              <code>npm run deploy:vinext</code>
            </div>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">05 / DECISIONS</p>
          <div className="case-content">
            <h2>Engineering decisions</h2>
            <div className="case-decision-grid">
              {decisions.map((decision, index) => (
                <article className="case-decision" key={decision.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{decision.title}</h3>
                  <p>{decision.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">06 / TRADE-OFFS</p>
          <div className="case-content">
            <h2>Current limitations</h2>
            <p>
              This project is an evolving demonstration, not a claim of enterprise-scale
              infrastructure.
            </p>
            <BulletList items={limitations} />
            <h3>What I would improve next</h3>
            <BulletList items={nextSteps} />
          </div>
        </section>

        <section className="case-result">
          <p className="eyebrow">THE RESULT</p>
          <h2>A working serverless application.</h2>
          <p>
            The portfolio brings together frontend engineering, backend route handlers, AI
            integration, custom UI development, and automated deployment. It is also an ongoing
            engineering project: a place to demonstrate implementation decisions, identify
            limitations, and improve the quality of a real application.
          </p>
          <div className="case-actions">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Explore the live portfolio ↗
            </a>
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
              View source on GitHub ↗
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer page-wrap">
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            b.
          </span>
          <span>BRIAN DOL · SENIOR SOFTWARE ENGINEER</span>
        </Link>
        <span>© {new Date().getFullYear()} BRIAN DOL.</span>
        <Link className="back-top" href="/#home">
          BACK TO TOP ↑
        </Link>
      </footer>
    </>
  );
}

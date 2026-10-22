export type ArchNode = {
  id: string;
  label: string;
  tag: string;
  layer: number;
  description: string;
  to?: string[];
};

export type ArchDiagram = {
  intro: string;
  note?: string;
  nodes: ArchNode[];
};

const generalNote =
  "A simplified view built from the documented technologies and responsibilities. Internal details that are not documented are intentionally not assumed.";

export const architectureDiagrams: Record<string, ArchDiagram> = {
  "ai-powered-portfolio": {
    intro: "How a visitor request and a chatbot question move through the deployed application.",
    nodes: [
      {
        id: "browser",
        label: "Browser",
        tag: "Client",
        layer: 0,
        description:
          "Renders the React interface, including the project gallery, timeline, contact form, and floating chat panel. Client-side state is used only where interaction needs it.",
        to: ["worker"],
      },
      {
        id: "worker",
        label: "Cloudflare Worker",
        tag: "Hosting",
        layer: 1,
        description:
          "Runs the vinext-built Next.js application on Cloudflare's serverless platform, serving server-rendered pages, static assets, and API route handlers.",
        to: ["pages", "chat", "health"],
      },
      {
        id: "pages",
        label: "Server-rendered pages",
        tag: "Next.js",
        layer: 2,
        description:
          "App Router pages and React Server Components render most of the content on the server, which reduces client-side data fetching.",
      },
      {
        id: "health",
        label: "/api/health",
        tag: "API",
        layer: 2,
        description: "A route handler that returns a JSON status response with a timestamp, making operational behavior visible.",
      },
      {
        id: "chat",
        label: "/api/chat",
        tag: "API",
        layer: 2,
        description:
          "Validates the request structure, message roles and content, limits conversation history, and checks that the latest message comes from the user before calling the model.",
        to: ["ai"],
      },
      {
        id: "ai",
        label: "Workers AI",
        tag: "AI",
        layer: 3,
        description:
          "Invokes the Llama 3.1 8B Instruct model through the Cloudflare AI binding. Curated professional information and response rules are supplied in a system prompt.",
      },
    ],
  },
  "secure-financial-forecasting": {
    intro: "The main building blocks of the forecasting application and the security controls around them.",
    note: generalNote,
    nodes: [
      {
        id: "users",
        label: "Admins & investors",
        tag: "Users",
        layer: 0,
        description: "Two distinct roles with different capabilities. Administrators and investors see different functionality.",
        to: ["react"],
      },
      {
        id: "react",
        label: "React frontend",
        tag: "Frontend",
        layer: 1,
        description: "The user interface for both roles, communicating with the backend over an encrypted (TLS) connection.",
        to: ["django"],
      },
      {
        id: "django",
        label: "Django backend & API",
        tag: "Backend",
        layer: 2,
        description:
          "Backend logic and API endpoints, including role-based access control that separates administrator and investor capabilities.",
        to: ["db", "fin"],
      },
      {
        id: "db",
        label: "PostgreSQL",
        tag: "Data",
        layer: 3,
        description: "Relational storage for the application's data.",
      },
      {
        id: "fin",
        label: "Financial data APIs",
        tag: "Integration",
        layer: 3,
        description: "External financial data sources used as part of the forecasting context.",
      },
      {
        id: "aws",
        label: "AWS security & monitoring",
        tag: "Cloud",
        layer: 3,
        description:
          "Cloud hosting context with IAM and security controls and cloud monitoring, part of the Cloud and Network Security focus of the MSc.",
      },
    ],
  },
  "land-quality-api": {
    intro: "The data path from a client request to spatial data in the database.",
    note: generalNote,
    nodes: [
      {
        id: "client",
        label: "API client",
        tag: "Consumer",
        layer: 0,
        description: "Any application or service requesting land-quality information.",
        to: ["api"],
      },
      {
        id: "api",
        label: "REST API",
        tag: "Django",
        layer: 1,
        description: "A Django-based API layer that exposes structured land-quality data.",
        to: ["pg"],
      },
      {
        id: "pg",
        label: "PostgreSQL",
        tag: "Data",
        layer: 2,
        description: "The relational data layer for structured land-quality information.",
        to: ["postgis"],
      },
      {
        id: "postgis",
        label: "PostGIS",
        tag: "Geospatial",
        layer: 3,
        description: "Adds spatial types and queries so location-aware information can be stored and queried.",
      },
    ],
  },
  "mable-admin": {
    intro: "How the frontend and backend are separated by an API boundary.",
    note: generalNote,
    nodes: [
      {
        id: "ui",
        label: "React + TypeScript app",
        tag: "Frontend",
        layer: 0,
        description: "Presents company and user profile features and calls the backend through the API.",
        to: ["api"],
      },
      {
        id: "api",
        label: "API boundary",
        tag: "Integration",
        layer: 1,
        description: "Separates client-side presentation from backend business logic.",
        to: ["laravel"],
      },
      {
        id: "laravel",
        label: "Laravel 12 services",
        tag: "Backend",
        layer: 2,
        description: "Backend business logic and API functionality for company and user profile features.",
      },
    ],
  },
  "ai-workflow-automation": {
    intro: "A typical flow from a business trigger to an AI step and a downstream system.",
    note: generalNote + " The exact automation platform varies by workflow.",
    nodes: [
      {
        id: "trigger",
        label: "Trigger",
        tag: "Event",
        layer: 0,
        description: "A webhook or business event that starts a workflow, such as a new CRM record.",
        to: ["flow"],
      },
      {
        id: "flow",
        label: "Workflow engine",
        tag: "Automation",
        layer: 1,
        description:
          "Orchestrates the steps using tools such as n8n, Make.com, Zapier, Zoho Flow, or Python/Node.js scripts, with validation between steps.",
        to: ["llm", "crm", "backend"],
      },
      {
        id: "llm",
        label: "LLM API",
        tag: "AI",
        layer: 2,
        description: "Performs the AI-assisted step, such as classifying, summarizing, or drafting.",
      },
      {
        id: "crm",
        label: "CRM",
        tag: "Business system",
        layer: 2,
        description: "Receives or supplies records through API and webhook integrations.",
      },
      {
        id: "backend",
        label: "Backend services",
        tag: "Business system",
        layer: 2,
        description: "Internal services connected through REST APIs for validated data transfer.",
      },
    ],
  },
  "shams-free-zone": {
    intro: "How the multilingual website connects to the systems around it.",
    note: generalNote,
    nodes: [
      {
        id: "visitor",
        label: "Visitors",
        tag: "Users",
        layer: 0,
        description: "Founders researching business setup in four languages: English, German, Russian, and Arabic.",
        to: ["edge"],
      },
      {
        id: "edge",
        label: "DNS, SSL & Cloudflare",
        tag: "Delivery",
        layer: 1,
        description: "Domain, DNS, SSL, and Cloudflare configuration, which were coordinated during the zero-downtime migration to shamsfz.ae.",
        to: ["wp"],
      },
      {
        id: "wp",
        label: "Custom WordPress theme & plugins",
        tag: "CMS",
        layer: 2,
        description: "A custom-built WordPress implementation with custom themes and plugins, plus Elementor and WPML-based multilingual support and SEO work.",
        to: ["crm", "analytics"],
      },
      {
        id: "crm",
        label: "CRM & webhooks",
        tag: "Integration",
        layer: 3,
        description: "Forms and lead data flow to business systems through API and webhook workflows, including Zoho Flow.",
      },
      {
        id: "analytics",
        label: "GA4, GTM & Search Console",
        tag: "Analytics",
        layer: 3,
        description: "Marketing analytics and search performance tracking supporting the reported SEO and lead improvements.",
      },
    ],
  },
  "run-your-task": {
    intro: "The confirmed user journey, from discovering a service to starting a conversation.",
    note: generalNote,
    nodes: [
      {
        id: "visitor",
        label: "Visitor abroad",
        tag: "User",
        layer: 0,
        description: "A Kenyan living abroad who needs a task handled in Kenya.",
        to: ["site"],
      },
      {
        id: "site",
        label: "Services website",
        tag: "Web",
        layer: 1,
        description: "Presents the services clearly to an international audience.",
        to: ["quote", "whatsapp"],
      },
      {
        id: "quote",
        label: "Quote request",
        tag: "Flow",
        layer: 2,
        description: "A path for visitors to describe the task they need handled and request a quote.",
      },
      {
        id: "whatsapp",
        label: "WhatsApp contact",
        tag: "Channel",
        layer: 2,
        description: "A direct conversation option for visitors who prefer to chat.",
      },
    ],
  },
};

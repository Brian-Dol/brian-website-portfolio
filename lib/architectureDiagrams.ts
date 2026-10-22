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
    intro: "How a stock request moves through the three services, and where authentication and roles apply.",
    note: "Based on the project's code. The model is a baseline and the cloud deployment is not documented here.",
    nodes: [
      {
        id: "users",
        label: "Investors & admins",
        tag: "Users",
        layer: 0,
        description: "Investors request forecasts and view their history. Administrators manage users and review prediction activity.",
        to: ["react"],
      },
      {
        id: "react",
        label: "React dashboard",
        tag: "Frontend",
        layer: 1,
        description: "Sign-up, login, a ticker and timeframe form, Chart.js visualisation of results, and admin pages for users and predictions.",
        to: ["express"],
      },
      {
        id: "express",
        label: "Node / Express API",
        tag: "Backend",
        layer: 2,
        description:
          "Hashes passwords with bcrypt, issues and verifies JWTs, and protects admin routes by checking the token and an admin flag. It also stores each user's predictions.",
        to: ["mongo", "flask"],
      },
      {
        id: "mongo",
        label: "MongoDB",
        tag: "Data",
        layer: 3,
        description: "Stores user accounts and each user's prediction history.",
      },
      {
        id: "flask",
        label: "Flask ML service",
        tag: "Data science",
        layer: 3,
        description:
          "Exposes a /predict endpoint, maps the requested timeframe to a market data period, and uses pandas preprocessing and a scikit-learn linear regression baseline.",
        to: ["yf"],
      },
      {
        id: "yf",
        label: "yfinance market data",
        tag: "Integration",
        layer: 4,
        description: "External source of historical stock prices used for charts and modelling.",
      },
    ],
  },
  "land-quality-api": {
    intro: "The two Django services: authenticated land records, and coordinate-based analysis.",
    note: "Based on the project's code. The geospatial data retrieval is a prototype using placeholder values.",
    nodes: [
      {
        id: "client",
        label: "API client",
        tag: "Consumer",
        layer: 0,
        description: "Any application or service that manages land records or requests an analysis.",
        to: ["jwt", "analysis"],
      },
      {
        id: "jwt",
        label: "JWT authentication",
        tag: "Security",
        layer: 1,
        description: "Clients obtain and refresh tokens. Every land-records endpoint requires an authenticated user.",
        to: ["records"],
      },
      {
        id: "records",
        label: "Land records API",
        tag: "DRF",
        layer: 2,
        description:
          "ModelViewSets for owners, land parcels and quality assessments, covering pH level, moisture content, nutrient levels and a quality score.",
        to: ["pg"],
      },
      {
        id: "analysis",
        label: "Analysis service",
        tag: "DRF",
        layer: 1,
        description:
          "Accepts latitude and longitude, retrieves vegetation index, land cover and pollution level, and stores each analysis. A tokens app represents land coordinates as tradable tokens.",
        to: ["pg"],
      },
      {
        id: "pg",
        label: "PostgreSQL / PostGIS",
        tag: "Data",
        layer: 3,
        description: "Relational storage with spatial capabilities for location-aware queries.",
      },
      {
        id: "ci",
        label: "Docker & GitHub Actions",
        tag: "Delivery",
        layer: 3,
        description: "The service is containerised with Docker Compose and has a CI/CD workflow for automated testing and deployment.",
      },
    ],
  },
  "mable-admin": {
    intro: "How the admin application and the desktop client work together.",
    note: "A simplified view of the employer-owned product, based on its documented structure.",
    nodes: [
      {
        id: "desktop",
        label: "Electron + React desktop client",
        tag: "Client",
        layer: 0,
        description:
          "Users describe a task in plain language. The client generates a layout and task logic, then renders the tool from a reusable component library.",
        to: ["openai", "api"],
      },
      {
        id: "ui",
        label: "React + TypeScript admin",
        tag: "Frontend",
        layer: 0,
        description: "Inertia-driven pages for dashboard, company, colleagues, profiles, invitations and saved tools.",
        to: ["api"],
      },
      {
        id: "openai",
        label: "LLM provider",
        tag: "AI",
        layer: 1,
        description: "Generates layout and task logic from a constrained system prompt. Generated code is reviewed and tested before use.",
      },
      {
        id: "api",
        label: "Authenticated API",
        tag: "Integration",
        layer: 1,
        description:
          "JSON endpoints for users, companies, tools, prompts and saved apps, protected by session or token authentication and role checks.",
        to: ["laravel"],
      },
      {
        id: "laravel",
        label: "Laravel 12 services",
        tag: "Backend",
        layer: 2,
        description:
          "Business logic with Fortify authentication, two-factor authentication, role and permission middleware, company isolation, invitations and an activity log.",
        to: ["db"],
      },
      {
        id: "db",
        label: "Database",
        tag: "Data",
        layer: 3,
        description: "Stores companies, users, roles, invitations, tools, prompts, saved apps and activity records.",
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

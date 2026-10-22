export type ProjectCaseStudy = {
  slug: string;
  title: string;
  strapline: string;
  category: string;
  technologies: string[];
  overview: string;
  contribution: string[];
  engineeringNotes: string[];
  outcomes?: string[];
  externalUrl?: string;
  sourceUrl?: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "shams-free-zone",
    title: "Shams Free Zone website",
    strapline: "A multilingual digital experience for business setup in Sharjah.",
    category: "Websites & e-commerce",
    technologies: ["WordPress", "Custom themes", "Custom plugins", "Elementor", "WPML", "SEO", "Zoho Flow", "CRM/API integrations"],
    overview:
      "A custom-built production website with custom themes and plugins, presenting free zone licensing, business activities, and visa options, with clear paths for founders looking to set up a UAE company online.",
    contribution: [
      "Built and maintained custom WordPress themes and plugins, with Elementor experiences in English, German, Russian, and Arabic.",
      "Supported CRM integrations, API and webhook workflows, forms, analytics, SEO, and marketing technology.",
      "Migrated startwith.shams.ae to shamsfz.ae, coordinating domain, DNS, SSL, Cloudflare, and application configuration.",
      "Supported WooCommerce, payment integrations, GA4, Google Tag Manager, and Search Console.",
    ],
    engineeringNotes: [
      "Used a multilingual CMS experience to support audiences in four languages.",
      "Connected the website to business systems and marketing workflows through integrations, APIs, and webhooks.",
      "Managed the production domain migration with zero downtime.",
    ],
    outcomes: [
      "Reported SEO improvement of 25% and lead-generation improvement of 18%.",
      "Reported Arabic SEO reach improvement of 30% and webinar registration growth of 20%.",
    ],
    externalUrl: "https://shamsfz.ae/",
  },
  {
    slug: "run-your-task",
    title: "Run Your Task",
    strapline: "A services platform connecting Kenyans abroad with tasks in Kenya.",
    category: "Websites & e-commerce",
    technologies: ["Web development", "Quote request flow", "WhatsApp contact"],
    overview:
      "A services website for Kenyans all over the globe. It helps visitors describe a task and request a quote, or contact the team through WhatsApp.",
    contribution: [
      "Built a clear web experience for presenting services to an international audience.",
      "Provided a quote request path for people to explain the task they need handled.",
      "Included WhatsApp as a direct contact option for visitors.",
    ],
    engineeringNotes: [
      "The core user journey connects service discovery to a quote request or direct conversation.",
      "The public project information does not specify the underlying framework or measured business outcomes, so this case study focuses on the confirmed user experience.",
    ],
    externalUrl: "https://runyourtask.com/",
  },
  {
    slug: "ai-workflow-automation",
    title: "AI workflow automation",
    strapline: "Connecting AI services and business systems to reduce repetitive work.",
    category: "AI & automation",
    technologies: [
      "LLM APIs",
      "REST APIs",
      "Webhooks",
      "CRM integrations",
      "Workflow automation",
    ],
    overview:
      "A set of AI-assisted operational workflows connecting LLM services, backend systems, CRMs, and external business tools to simplify recurring work.",
    contribution: [
      "Designed integrations around operational handoffs between business systems.",
      "Connected services using APIs and webhooks, with attention to validation and reliable data transfer.",
      "Contributed to workflows that automated recurring operational tasks.",
    ],
    engineeringNotes: [
      "Kept workflows maintainable and reviewable rather than treating automation as an opaque sequence of actions.",
      "The broader automation toolkit includes n8n, Make.com, Zapier, and Zoho Flow; the exact platform can vary by workflow.",
    ],
    outcomes: [
      "Relevant automation workflows reduced manual workload by 70%+.",
    ],
  },
  {
    slug: "mable-admin",
    title: "mAble AI Automation Platform",
    strapline:
      "A multi-tenant platform where teams generate and run custom automation tools, with secure company and user management.",
    category: "Full-stack applications",
    technologies: [
      "Laravel 12",
      "React",
      "TypeScript",
      "Inertia",
      "Sanctum",
      "OpenAI",
      "Electron",
      "Jest",
      "GitHub Actions",
    ],
    overview:
      "mAble is an AI-powered automation product for technical professionals. A Laravel 12 and React/TypeScript admin application manages companies, users, roles, invitations, saved tools and prompts, while an Electron and React desktop client turns plain-language requests into runnable automation tools. The product was built for an employer, so the source code is private.",
    contribution: [
      "Built backend and API functionality for company and user profile features, including authenticated endpoints for users, companies, tools, prompts and saved apps.",
      "Integrated LLM providers into production workflows, including request validation, decision routing, fallback handling and structured responses.",
      "Built authenticated REST, webhook and structured-payload integrations with validation and error handling.",
      "Reviewed, debugged and tested AI-generated JavaScript and TypeScript, and built evaluation workflows for accuracy, consistency and edge cases.",
    ],
    engineeringNotes: [
      "Tenant isolation: middleware restricts users to their own company's data, with a dedicated test suite for tool and company isolation.",
      "Access control: Laravel Fortify and Sanctum handle authentication, with two-factor authentication, role and permission checks, active-user checks, and an activity log for auditing.",
      "Invitations: team members join through emailed invitations that are accepted on a dedicated page, rather than open registration alone.",
      "API boundary: Inertia pages and JSON endpoints keep the React interface separate from backend business logic.",
      "Desktop client: a Node main process calls the OpenAI API with a constrained system prompt to generate layout and task logic, then renders the result from a reusable component library (buttons, file pickers, sliders, progress bars, output console).",
      "Delivery: PHPUnit and Jest tests, linting, browser tests and deployment workflows run through GitHub Actions.",
    ],
    outcomes: [
      "Automation and AI-assisted workflows reduced manual workload by 70%+.",
    ],
  },
  {
    slug: "land-quality-api",
    title: "Land Quality API",
    strapline: "Authenticated land records and a coordinate-based land-quality analysis service.",
    category: "Data & geospatial",
    technologies: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "PostGIS",
      "JWT",
      "Docker",
      "GitHub Actions",
    ],
    overview:
      "A pair of Django REST backends for land management. One manages owners, land parcels and quality assessments behind JWT authentication. The other accepts coordinates, retrieves environmental indicators such as vegetation index, land cover and pollution level, and stores the analysis, with a concept for representing land as tradable tokens.",
    contribution: [
      "Modelled owners, land parcels and quality assessments (pH level, moisture content, nutrient levels and a quality score) with relational links between them.",
      "Exposed CRUD REST endpoints with Django REST Framework viewsets, secured by JWT token issue and refresh.",
      "Designed a coordinate-based analysis flow: validate latitude and longitude, retrieve geospatial indicators, and persist each analysis with a timestamp.",
      "Containerised the service with Docker and defined a GitHub Actions workflow for automated testing and deployment.",
    ],
    engineeringNotes: [
      "Every land-records endpoint requires authentication, so data is not exposed publicly by default.",
      "The spatial design targets PostgreSQL with PostGIS, with the analysis flow separated into its own app alongside a tokens app.",
      "The geospatial retrieval step is a prototype that returns placeholder values. Integrations with sources such as OpenStreetMap, NASA Earthdata and Google Earth Engine are planned, not claimed as complete.",
      "Planned next steps include real data source integrations, validation of coordinate ranges, and automated tests for each endpoint.",
    ],
  },
  {
    slug: "secure-financial-forecasting",
    title: "Secure stock forecasting platform",
    strapline: "An MSc capstone: a multi-service forecasting application with authentication and separate admin and investor roles.",
    category: "Full-stack applications",
    technologies: [
      "React",
      "Chart.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Flask",
      "scikit-learn",
      "yfinance",
      "Docker",
    ],
    overview:
      "A stock forecasting application developed as the capstone for the MSc in Cloud and Network Security. Investors enter a ticker and timeframe and see results charted in a React dashboard, while administrators manage users and review prediction activity. The system is split into a React frontend, a Node/Express API with MongoDB, and a Flask service for market data and modelling.",
    contribution: [
      "Built the React dashboard with sign-up, login, a prediction form, Chart.js visualisation of results, and admin pages for user details and prediction history.",
      "Built the Node/Express API with bcrypt-hashed passwords, JWT authentication, password change, and prediction history stored per user in MongoDB.",
      "Implemented role-based access control: admin-only routes verify the token and an admin flag before listing users and predictions or creating other admins.",
      "Built the Flask service that collects market data with yfinance, preprocesses price returns, and applies a scikit-learn linear regression model.",
      "Packaged the frontend, backend and MongoDB as Docker services orchestrated with Docker Compose.",
    ],
    engineeringNotes: [
      "Service separation: authentication and persistence live in Node/Express, while data science work lives in Flask, so each can be changed independently.",
      "Security context: the project was shaped by coursework on cloud security, cryptography, data protection and GDPR, including hashed credentials, token-based access and role separation.",
      "The model is a baseline. The prediction route currently returns recent closing prices from yfinance, and the regression model is a starting point rather than a production-grade forecaster.",
      "Before any real deployment, the hard-coded development secrets and database address should move to environment configuration, and the API needs rate limiting, input validation, and automated tests.",
    ],
    outcomes: [
      "Completed as an MSc capstone for Cloud and Network Security (GPA 4.0 / 4.0).",
    ],
  },
];

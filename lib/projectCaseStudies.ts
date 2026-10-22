export type ProjectCaseStudy = {
  slug: string;
  title: string;
  strapline: string;
  category: string;
  technologies: string[];
  facts?: { label: string; value: string }[];
  overview: string;
  contribution: string[];
  engineeringNotes: string[];
  outcomes?: string[];
  limitations?: string[];
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
    facts: [
      { label: "Role", value: "Senior web developer" },
      { label: "Type", value: "Production multilingual website" },
      { label: "Status", value: "Live at shamsfz.ae" },
      { label: "Source", value: "Client-owned" },
    ],
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
    facts: [
      { label: "Role", value: "Web developer" },
      { label: "Type", value: "Services website" },
      { label: "Status", value: "Live at runyourtask.com" },
      { label: "Source", value: "Not public" },
    ],
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
    facts: [
      { label: "Role", value: "Integration and backend engineer" },
      { label: "Type", value: "Operational automation" },
      { label: "Impact", value: "70%+ less manual workload" },
      { label: "Source", value: "Employer and client systems" },
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
    facts: [
      { label: "Role", value: "Senior full stack engineer" },
      { label: "Type", value: "Multi-tenant AI product" },
      { label: "Impact", value: "70%+ less manual workload" },
      { label: "Source", value: "Private (employer-owned)" },
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
    limitations: [
      "The source code belongs to the employer and is private, so this case study describes the architecture and my contribution rather than linking to a repository.",
      "Descriptions are based on the product's documented structure; internal metrics other than the 70%+ workload reduction are not published.",
    ],
  },
  {
    slug: "land-quality-api",
    title: "Land Quality API",
    strapline: "A JWT-secured REST API for land owners, parcels and soil quality assessments.",
    category: "Data & geospatial",
    technologies: [
      "Django",
      "Django REST Framework",
      "SimpleJWT",
      "PostgreSQL",
      "PostGIS",
      "Docker Compose",
    ],
    facts: [
      { label: "Role", value: "Backend developer" },
      { label: "Type", value: "REST API" },
      { label: "Status", value: "Learning and portfolio project" },
      { label: "Source", value: "Public on GitHub" },
    ],
    sourceUrl: "https://github.com/Brian-Dol/land-quality-api",
    overview:
      "A Django REST backend for land management. It models owners, land parcels and soil quality assessments behind JWT authentication, and ships with environment-based configuration and a Docker Compose setup for the API and its PostgreSQL database. A separate coordinate-analysis prototype, which targets PostGIS and external geospatial data, was explored alongside it and is not part of the published repository.",
    contribution: [
      "Modelled owners, land parcels and quality assessments (pH level, moisture content, nutrient levels and a quality score) with relational links between them.",
      "Exposed CRUD REST endpoints with Django REST Framework viewsets and a router, secured by JWT token issue and refresh.",
      "Moved secrets and database settings into environment variables, with an example configuration file and a Docker Compose stack.",
      "Documented the API with an endpoint reference, data model diagram and quick-start requests in the repository README.",
    ],
    engineeringNotes: [
      "Every land-records endpoint requires authentication, so data is not exposed publicly by default.",
      "Serializers and viewsets keep the API thin: validation and persistence stay in the Django models and DRF layers.",
      "The coordinate-analysis prototype separates analysis and tokens into their own apps. Its geospatial retrieval step returns placeholder values, and integrations with OpenStreetMap, NASA Earthdata and Google Earth Engine are planned, not claimed as complete.",
    ],
    limitations: [
      "No automated tests yet for serializers and permissions.",
      "Any authenticated user can read and change all records; per-owner permissions are still to be added.",
      "No pagination, filtering or generated OpenAPI documentation.",
      "The real geospatial analysis is a prototype and not published.",
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
    ],
    facts: [
      { label: "Role", value: "Full stack developer" },
      { label: "Type", value: "MSc capstone" },
      { label: "Status", value: "Baseline prototype" },
      { label: "Source", value: "Public on GitHub" },
    ],
    sourceUrl: "https://github.com/Brian-Dol/stock-prediction-platform",
    overview:
      "A stock forecasting application developed as the capstone for the MSc in Cloud and Network Security. Investors enter a ticker and timeframe and see results charted in a React dashboard, while administrators manage users and review prediction activity. The system is split into a React frontend, a Node/Express API with MongoDB, and a Flask service for market data and modelling.",
    contribution: [
      "Built the React dashboard with sign-up, login, a prediction form, Chart.js visualisation of results, and admin pages for user details and prediction history.",
      "Built the Node/Express API with bcrypt-hashed passwords, JWT authentication, password change, and prediction history stored per user in MongoDB.",
      "Implemented role-based access control: admin-only routes verify the token and an admin flag before listing users and predictions or creating other admins.",
      "Built the Flask service that collects market data with yfinance and includes pandas preprocessing and a scikit-learn linear regression baseline.",
      "Moved the JWT secret and MongoDB address into environment configuration, added example settings, and published the project with a documented API reference and run instructions.",
    ],
    engineeringNotes: [
      "Service separation: authentication and persistence live in Node/Express, while data science work lives in Flask, so each can be changed independently.",
      "Security context: the project was shaped by coursework on cloud security, cryptography, data protection and GDPR, including hashed credentials, token-based access and role separation.",
      "The model is a baseline. The prediction route currently returns recent closing prices from yfinance, and the regression model is included but not yet wired into that route.",
    ],
    outcomes: [
      "Completed as an MSc capstone for Cloud and Network Security (GPA 4.0 / 4.0).",
    ],
    limitations: [
      "The forecasting model is a baseline and is not yet used by the prediction endpoint.",
      "The API needs token expiry, rate limiting, request validation and automated tests before any real deployment.",
      "API base URLs are still hard-coded in the frontend, and there is no Docker Compose setup in the published repository yet.",
    ],
  },
  {
    slug: "restaurant-reservation-system",
    title: "Restaurant Reservation System",
    strapline: "A Laravel app where guests book a table in two steps and staff run the restaurant from an admin panel.",
    category: "Business applications",
    technologies: ["Laravel 9", "PHP 8", "Breeze", "Tailwind CSS", "Alpine.js", "MySQL", "Laravel Sail", "PHPUnit"],
    facts: [
      { label: "Role", value: "Full stack developer" },
      { label: "Type", value: "Booking and admin application" },
      { label: "Status", value: "Portfolio project" },
      { label: "Source", value: "Public on GitHub" },
    ],
    sourceUrl: "https://github.com/Brian-Dol/Restaurant-Reservation-System-Laravel",
    overview:
      "A restaurant website with a public menu and a reservation flow. Guests choose a date, time and party size, then pick from the tables that are actually free. Staff manage categories, menus, tables and reservations from a protected admin panel.",
    contribution: [
      "Built the two-step reservation flow: guest details and date and time are validated and kept in the session, then the guest chooses from available tables.",
      "Implemented booking rules on the server: reservations within the next week and between 17:00 and 23:00, using custom validation rules.",
      "Filtered table choices by availability, capacity for the party size, and existing bookings for the chosen day.",
      "Built the admin panel with CRUD for categories, menus (with image upload and many-to-many categories), tables and reservations.",
      "Protected the admin area with Laravel Breeze authentication and an admin middleware based on an admin flag.",
    ],
    engineeringNotes: [
      "Business rules live in dedicated validation rule classes, so the same rules apply regardless of which form submits the data.",
      "Tables carry a location (front, inside or outside), a status and a capacity, modelled with PHP enums.",
      "The public site and the admin area use separate controller namespaces and routes, keeping guest-facing and staff-facing code apart.",
      "Laravel Sail provides a Docker-based development environment.",
    ],
    limitations: [
      "No online payments or email confirmations are implemented; reservations are stored only.",
      "Opening hours and the one-week booking window are hard-coded in the validation rules rather than configurable.",
      "The seeded admin account must be replaced before any real deployment.",
    ],
  },
  {
    slug: "employee-management-system",
    title: "Employee Management System",
    strapline: "A Laravel and Splade admin for employee records, locations and role-based access.",
    category: "Business applications",
    technologies: ["Laravel 10", "Splade", "Vue 3", "Tailwind CSS", "Vite", "spatie/laravel-permission", "MySQL", "Laravel Dusk"],
    facts: [
      { label: "Role", value: "Full stack developer" },
      { label: "Type", value: "Internal admin application" },
      { label: "Status", value: "Portfolio project" },
      { label: "Source", value: "Public on GitHub" },
    ],
    sourceUrl: "https://github.com/Brian-Dol/Employee-management-system-Laravel",
    overview:
      "An application that lets an organisation keep and maintain its employee records. The admin area provides searchable, sortable tables and forms for employees, departments and locations, and screens for managing users, roles and permissions.",
    contribution: [
      "Modelled employees with department, country, state and city relationships, plus birth and hire dates.",
      "Built admin resources for employees, departments, countries, states and cities, and for users, roles and permissions.",
      "Implemented role-based access with spatie/laravel-permission, so the whole admin area requires the admin role.",
      "Built data tables with Splade and spatie/laravel-query-builder, with sorting, searching, pagination, bulk actions and exports.",
    ],
    engineeringNotes: [
      "Splade lets Blade views behave like a Vue single-page interface without a separate API layer, which kept the admin quick to build.",
      "Table and form definitions live in their own classes, so each resource stays small and consistent.",
      "Authorization is handled by roles and permissions in the database rather than hard-coded checks.",
      "Dusk browser testing and PHPUnit are configured for the project.",
    ],
    limitations: [
      "The seeder creates sample users and an admin role only; countries, states, cities and departments are added through the admin UI.",
      "The non-admin dashboard is the stock Breeze page; all management features live under the admin area.",
      "Test coverage is limited to the framework's default setup.",
    ],
  },
  {
    slug: "carbon-tracker",
    title: "Carbon Tracker",
    strapline: "A compact full-stack app for logging daily energy use, with JWT authentication and SQLite.",
    category: "Full-stack applications",
    technologies: ["Vue 3", "Vite", "Node.js", "Express 5", "SQLite", "JWT", "bcrypt", "axios"],
    facts: [
      { label: "Role", value: "Full stack developer" },
      { label: "Type", value: "Authenticated web app" },
      { label: "Status", value: "Small portfolio project" },
      { label: "Source", value: "Public on GitHub" },
    ],
    sourceUrl: "https://github.com/Brian-Dol/carbon-tracker",
    overview:
      "A small full-stack application for recording daily electricity consumption in kWh. Users register, log in and keep a personal history of their usage, which is the raw data behind a carbon footprint.",
    contribution: [
      "Built an Express API with registration and login, bcrypt-hashed passwords and JWTs that expire after two hours.",
      "Added endpoints to create and list energy logs, scoped to the authenticated user.",
      "Built the Vue 3 and Vite interface for sign-in and for adding and viewing logs, calling the API through axios.",
      "Used SQLite so the database is created automatically on first run and needs no extra setup.",
    ],
    engineeringNotes: [
      "A deliberately small scope: one API file and one main component, which makes the whole data flow easy to follow.",
      "Every log query is filtered by the user ID from the verified token, so users cannot read each other's data.",
      "The frontend reads the API address from an environment variable, so it can point at any backend.",
    ],
    limitations: [
      "Only raw kWh is stored; CO2 conversion, charts and totals are not implemented yet.",
      "The backend falls back to a built-in JWT secret when none is set, so a secret must be configured outside local development.",
      "The repository still contains committed frontend dependencies that should be removed and git-ignored.",
    ],
  },
];

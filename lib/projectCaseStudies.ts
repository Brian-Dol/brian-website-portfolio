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
  techReasons?: { name: string; reason: string }[];
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
    techReasons: [
      { name: "WordPress with custom themes and plugins", reason: "Marketing and legal teams needed to edit content themselves, while the brand and business rules needed behaviour that off-the-shelf themes could not provide. Custom code gave full control without giving up a familiar editor." },
      { name: "Elementor", reason: "Lets non-developers adjust landing pages quickly without a release, which suited campaign-driven work." },
      { name: "WPML", reason: "The audience spans English, German, Russian and Arabic, so translation, language switching and right-to-left support had to be built into the CMS." },
      { name: "Zoho Flow, APIs and webhooks", reason: "Leads and form data had to reach the CRM reliably, and webhooks avoided manual copying between systems." },
      { name: "GA4, Tag Manager and Search Console", reason: "Measured SEO and lead performance was needed to prove which changes worked." },
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
      { label: "Source", value: "Private (client-owned)" },
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
    techReasons: [
      { name: "A fast, content-focused website", reason: "Visitors are often abroad on varied connections, so the priority was a clear, quick page that explains the services and gets them to act." },
      { name: "Quote request form", reason: "Tasks differ widely, so a form that captures the details up front lets the team price each request properly." },
      { name: "WhatsApp contact", reason: "It is the channel the audience already uses, so visitors who prefer to chat can start a conversation in one tap." },
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
    techReasons: [
      { name: "LLM APIs", reason: "Recurring work such as classifying, summarising and drafting depends on language understanding that fixed rules cannot cover." },
      { name: "REST APIs and webhooks", reason: "They are the common language of CRMs and business tools, so data moves between systems the moment something happens." },
      { name: "n8n, Make.com, Zapier and Zoho Flow", reason: "Visual workflow tools keep automations reviewable and quick to change, with the platform chosen per workflow and the team already using it." },
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
    techReasons: [
      { name: "Laravel 12 with Sanctum and Fortify", reason: "Mature, batteries-included authentication, two-factor support, validation and queues, which suit a multi-tenant product where access control matters most." },
      { name: "React, TypeScript and Inertia", reason: "A typed interface that stays close to the backend without a separate API layer for every page." },
      { name: "OpenAI API", reason: "Turns plain-language requests into runnable tools, with a constrained system prompt to keep output predictable." },
      { name: "Electron", reason: "The tools run on the user's own machine and need file access, which a browser cannot offer." },
      { name: "PHPUnit, Jest and GitHub Actions", reason: "Tenant isolation and AI output both need regression protection, so tests run automatically on every change." },
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
      { label: "Type", value: "REST API, later used by a Kenyan land-sales company" },
      { label: "Status", value: "In use by a company selling land in Kenya" },
      { label: "Source", value: "Base project public; client-modified components private" },
    ],
    sourceUrl: "https://github.com/Brian-Dol/land-quality-api",
    overview:
      "A Django REST backend for land management. It models owners, land parcels and soil quality assessments behind JWT authentication, and ships with environment-based configuration and a Docker Compose setup for the API and its PostgreSQL database. The API was later used by a company that sells land in Kenya. The public repository contains the base project only; the components completed or modified for that company are privately owned and cannot be shared.",
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
    techReasons: [
      { name: "Django and Django REST Framework", reason: "Django's ORM, admin and security defaults give a reliable data layer quickly, and DRF's viewsets and serializers turn models into a consistent REST API with little boilerplate." },
      { name: "SimpleJWT", reason: "Stateless tokens let any client, such as a web or mobile app, authenticate against the API without server-side sessions." },
      { name: "PostgreSQL", reason: "Land, owner and assessment data is relational, and PostgreSQL offers strong integrity guarantees and a path to PostGIS if spatial queries are needed." },
      { name: "Docker Compose", reason: "Runs the API and its database together the same way on every machine, which made handover and deployment simpler." },
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
      { label: "Type", value: "MSc capstone, later adapted into a client project" },
      { label: "Status", value: "Adapted for a client" },
      { label: "Source", value: "Base project public; client-modified components private" },
    ],
    sourceUrl: "https://github.com/Brian-Dol/stock-prediction-platform",
    overview:
      "A stock forecasting application developed as the capstone for the MSc in Cloud and Network Security, and later transformed into a client project. Investors enter a ticker and timeframe and see results charted in a React dashboard, while administrators manage users and review prediction activity. The system is split into a React frontend, a Node/Express API with MongoDB, and a Flask service for market data and modelling. The public repository contains the MSc base project only; the components completed or modified for the client are privately owned and cannot be shared.",
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
    techReasons: [
      { name: "React and Chart.js", reason: "A component-based dashboard makes the sign-in, prediction form and admin screens easy to compose, and Chart.js turns price series into readable charts with little code." },
      { name: "Node.js and Express", reason: "A lightweight API layer for authentication, roles and prediction history, in the same language as the frontend." },
      { name: "MongoDB", reason: "Prediction results vary in shape and are stored per user, which fits a flexible document model." },
      { name: "JWT and bcrypt", reason: "Hashed passwords and stateless signed tokens keep credentials protected and let admin routes verify the caller's role on every request, in line with the security focus of the MSc." },
      { name: "Flask, pandas, yfinance and scikit-learn", reason: "Python is the natural home for market data and modelling, and running it as its own service keeps data science work separate from the web API." },
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
      { label: "Type", value: "Built for a small restaurant chain in the UAE" },
      { label: "Status", value: "Transformed and delivered for a client" },
      { label: "Source", value: "Base project public; client-modified components private" },
    ],
    sourceUrl: "https://github.com/Brian-Dol/Restaurant-Reservation-System-Laravel",
    overview:
      "A restaurant website with a public menu and a reservation flow. Guests choose a date, time and party size, then pick from the tables that are actually free. Staff manage categories, menus, tables and reservations from a protected admin panel. The project was transformed and produced for a small chain of restaurants in the UAE. The public repository contains the base project only; the components completed or modified for the client are privately owned and cannot be shared.",
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
    techReasons: [
      { name: "Laravel 9 and PHP 8", reason: "Routing, validation, Eloquent relationships and authentication are built in, which suits a booking system with strict server-side rules and an admin area, and PHP hosting is easy to find for a small business." },
      { name: "Laravel Breeze", reason: "A lightweight, proven login system for staff, with no need to build authentication from scratch." },
      { name: "Blade, Tailwind CSS and Alpine.js", reason: "Server-rendered pages load fast on any device guests use, and Alpine adds just enough interactivity without a full frontend framework." },
      { name: "MySQL", reason: "Tables, menus and reservations are relational, and availability is calculated by querying existing bookings." },
      { name: "Laravel Sail and PHPUnit", reason: "Docker keeps the development environment identical across machines, and PHPUnit protects the booking rules." },
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
      { label: "Type", value: "Implemented in small companies" },
      { label: "Status", value: "In use to manage employees" },
      { label: "Source", value: "Base project public; client-modified components private" },
    ],
    sourceUrl: "https://github.com/Brian-Dol/Employee-management-system-Laravel",
    overview:
      "An application that lets an organisation keep and maintain its employee records. The admin area provides searchable, sortable tables and forms for employees, departments and locations, and screens for managing users, roles and permissions. It was implemented in small companies to manage their employees. The public repository contains the base project only; the components completed or modified for those companies are privately owned and cannot be shared.",
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
    techReasons: [
      { name: "Laravel 10", reason: "A structured framework with Eloquent relationships, validation and policies, well suited to record-heavy business software that has to stay maintainable." },
      { name: "Splade and Vue 3", reason: "Splade gives Blade pages the feel of a single-page app, with modals, tables and forms, without building and maintaining a separate API and frontend, which kept delivery quick for small companies." },
      { name: "spatie/laravel-permission", reason: "Database-driven roles and permissions mean each company can control who sees and changes employee data without code changes." },
      { name: "spatie/laravel-query-builder", reason: "Provides filtering, sorting and searching on large employee lists in a consistent, safe way." },
      { name: "MySQL, Tailwind CSS and Vite", reason: "A reliable relational store for employee, department and location data, with a fast build pipeline and consistent styling." },
      { name: "Laravel Dusk and PHPUnit", reason: "Browser and unit tests check that critical admin flows keep working as the system changes." },
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
      { label: "Type", value: "Built as an app for an NGO" },
      { label: "Status", value: "Delivered for a client" },
      { label: "Source", value: "Base project public; client-modified components private" },
    ],
    sourceUrl: "https://github.com/Brian-Dol/carbon-tracker",
    overview:
      "A full-stack application made for an NGO to record daily electricity consumption in kWh. Users register, log in and keep a personal history of their usage, which is the raw data behind a carbon footprint. The public repository contains the base project only; the components completed or modified for the client are privately owned and cannot be shared.",
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
    techReasons: [
      { name: "Vue 3 and Vite", reason: "A small reactive interface for entering and reviewing readings, with a fast build and very little overhead for a focused app." },
      { name: "Node.js and Express 5", reason: "A minimal API in the same language as the frontend, enough for authentication and log endpoints without extra framework weight." },
      { name: "SQLite", reason: "Needs no database server, so the NGO could run and back up the app with minimal setup and cost." },
      { name: "JWT and bcrypt", reason: "Hashed passwords and short-lived signed tokens keep each user's readings private and let the API verify who is asking on every request." },
      { name: "axios", reason: "A simple, consistent way for the interface to call the API and attach the token." },
    ],
  },
];

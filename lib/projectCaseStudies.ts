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
    technologies: ["WordPress", "Elementor", "WPML", "SEO", "Zoho Flow", "CRM/API integrations"],
    overview:
      "A production website presenting free zone licensing, business activities, and visa options, with clear paths for founders looking to set up a UAE company online.",
    contribution: [
      "Developed and maintained WordPress and Elementor experiences in English, German, Russian, and Arabic.",
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
    title: "mAble Admin",
    strapline: "Backend and API functionality for company and user profile features.",
    category: "Full-stack applications",
    technologies: ["Laravel 12", "React", "TypeScript", "API integration"],
    overview:
      "Company and user profile capabilities in a full-stack product, with frontend presentation separated from backend business logic through an API-based integration.",
    contribution: [
      "Contributed backend and API functionality for company and user profile features.",
      "Worked across Laravel services and a React/TypeScript application.",
      "Reviewed, debugged, and validated implementation quality and production readiness.",
    ],
    engineeringNotes: [
      "The API boundary separates client-side presentation from backend business logic.",
      "Public project information does not provide specific performance metrics or detailed system architecture, so none are inferred here.",
    ],
  },
  {
    slug: "land-quality-api",
    title: "Land Quality API",
    strapline: "Structured land-quality data with geospatial capabilities.",
    category: "Data & geospatial",
    technologies: ["Django", "PostgreSQL", "PostGIS", "REST API"],
    overview:
      "A data-focused API for managing structured land-quality information and supporting geospatial functionality.",
    contribution: [
      "Applied backend engineering to a data-management and geospatial use case.",
      "Worked with Django and PostgreSQL/PostGIS to support structured and spatial data.",
    ],
    engineeringNotes: [
      "Combines a relational data layer with spatial database capabilities for location-aware information.",
      "The available project description does not document specific endpoints, datasets, or performance outcomes.",
    ],
  },
  {
    slug: "secure-financial-forecasting",
    title: "Secure financial forecasting",
    strapline: "A cloud-based forecasting capstone with distinct administrator and investor roles.",
    category: "Cloud & security",
    technologies: ["React", "Django", "PostgreSQL", "AWS", "RBAC", "TLS"],
    overview:
      "A secure cloud-based financial forecasting application developed as an MSc capstone, with separate functionality for administrators and investors.",
    contribution: [
      "Applied software engineering and cloud and network security concepts to a full-stack forecasting application.",
      "Developed frontend and backend functionality using React, Django, and PostgreSQL.",
      "Worked with role-based access control and cloud security considerations.",
    ],
    engineeringNotes: [
      "Separated administrator and investor capabilities.",
      "The project profile also records TLS, IAM/security controls, cloud monitoring, and external financial data APIs as part of the security and integration context.",
    ],
    outcomes: ["MSc capstone project for Cloud and Network Security."],
  },
];

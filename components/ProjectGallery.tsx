"use client";

import { useMemo, useState } from "react";

const projects = [
  {
    title: "Shams Free Zone website",
    category: "Websites & e-commerce",
    description:
      "Corporate website for Shams, Sharjah's digital-first free zone, helping businesses set up a UAE company fully online.",
    technologies: ["WORDPRESS", "CUSTOM THEMES", "CUSTOM PLUGINS", "ELEMENTOR", "WPML", "SEO"],
    art: "project-art-site",
    artLabel: "WORDPRESS / MULTILINGUAL",
    siteName: "shamsfz.ae",
    image: "/projects/shams.jpg",
    href: "https://shamsfz.ae/",
    caseStudyUrl: "/work/shams-free-zone",
    details:
      "A custom-built multilingual WordPress site with custom themes and plugins, using Elementor, that presents free zone licensing, business activities and visa options, with a focus on clear conversion paths for founders setting up a company online.",
  },
  {
    title: "Run Your Task",
    category: "Websites & e-commerce",
    description:
      "Services platform for Kenyans all over the globe, with a quote request flow and WhatsApp contact.",
    technologies: ["WEB DEVELOPMENT", "QUOTE FORMS", "WHATSAPP"],
    art: "project-art-site",
    artLabel: "SERVICES / GLOBAL",
    siteName: "runyourtask.com",
    image: "/projects/runyourtask.jpg",
    href: "https://runyourtask.com/",
    caseStudyUrl: "/work/run-your-task",
    details:
      "A services website that lets customers request a quote through a contact form or reach the team directly on WhatsApp, making it easy for people abroad to get tasks done in Kenya.",
  },
  {
    title: "AI workflow automation",
    category: "AI & automation",
    description:
      "Connected LLM APIs, backend services, CRMs, and business systems to simplify recurring operational work.",
    technologies: ["LLM APIS", "INTEGRATIONS", "WORKFLOW AUTOMATION"],
    outcome: "Automations reduced manual workload by 70%+ in relevant workflows.",
    art: "project-art-automation",
    image: "/projects/ai.jpg",
    artLabel: "AI / AUTOMATION",
    caseStudyUrl: "/work/ai-workflow-automation",
    details:
      "Designed integrations around real operational handoffs, using APIs and webhooks to move information between business systems. The focus was to reduce repetitive work while keeping the workflows maintainable and reviewable.",
  },
  {
    title: "AI-Powered Engineering Portfolio",
    category: "Full-stack applications",
    description:
      "A serverless portfolio with a conversational AI assistant, custom API endpoints, and automated Cloudflare deployments.",
    technologies: [
      "NEXT.JS 16",
      "REACT 19",
      "TYPESCRIPT",
      "VINEXT",
      "VITE 8",
      "CLOUDFLARE WORKERS",
      "WORKERS AI",
      "LLAMA 3.1",
    ],
    art: "project-art-portfolio",
    artLabel: "AI / SERVERLESS",
    details:
      "Designed and implemented the portfolio, project gallery, experience timeline, interactive UI, health endpoint, and AI chatbot. The main page is server-rendered, with client-side React state used where interaction is needed. The chat endpoint validates messages, limits conversation history, and calls Llama 3.1 through a Cloudflare Workers AI binding. The health endpoint returns application status and a timestamp.",
    highlights: [
      "Responsive hand-written CSS interface with project filters, scroll-reactive timeline effects, and reduced-motion support for applicable animations.",
      "GitHub pushes trigger Cloudflare Workers Builds for automated builds and releases (not GitHub Actions).",
    ],
    tradeoffs:
      "The chatbot uses a grounded system prompt rather than a vector database or retrieval pipeline because its knowledge base is small. Current opportunities include API rate limiting, automated tests, streamed responses, and improved chatbot accessibility. Key package versions are Next.js ^16.0.0, React ^19.0.0, vinext ^1.2.1, Vite ^8.3.0, and @vinext/cloudflare ^1.1.1; the version ranges and Cloudflare runtime adapter should be revalidated when upgrading.",
    liveUrl: "https://portfolio.dol-brian23.workers.dev/",
    sourceUrl: "https://github.com/Brian-Dol/brian-website-portfolio",
    caseStudyUrl: "/work/ai-powered-portfolio",
  },
  {
    title: "mAble AI Automation Platform",
    category: "Full-stack applications",
    description:
      "Backend, API and AI-integration work on a multi-tenant platform where teams generate and run custom automation tools.",
    technologies: ["LARAVEL 12", "REACT", "TYPESCRIPT", "OPENAI", "ELECTRON"],
    art: "project-art-admin",
    image: "/projects/admin.jpg",
    artLabel: "LARAVEL / REACT / AI",
    caseStudyUrl: "/work/mable-admin",
    details:
      "An AI-powered product made of a Laravel 12 and React/TypeScript admin application and an Electron and React desktop client that turns plain-language requests into runnable automation tools. I worked on company and user profile APIs, authenticated integrations, and LLM-powered workflows, helping reduce manual workload by 70%+.",
  },
  {
    title: "Land Quality API",
    category: "Data & geospatial",
    description:
      "A JWT-secured Django REST API for land owners, parcels and soil-quality assessments, backed by PostgreSQL.",
    technologies: ["DJANGO", "DRF", "SIMPLEJWT", "POSTGRESQL", "DOCKER COMPOSE"],
    art: "project-art-land",
    image: "/projects/land.jpg",
    artLabel: "DJANGO / POSTGRESQL",
    sourceUrl: "https://github.com/Brian-Dol/land-quality-api",
    caseStudyUrl: "/work/land-quality-api",
    details:
      "Modelled owners, land parcels and quality assessments (pH, moisture, nutrients, score) behind JWT-protected REST endpoints on PostgreSQL, with a Docker Compose stack and environment-based configuration.",
  },
  {
    title: "Secure stock forecasting platform",
    category: "Full-stack applications",
    description:
      "MSc capstone: React, Node.js and Flask platform for stock forecasts with JWT authentication and separate admin and investor roles.",
    technologies: ["REACT", "NODE.JS", "EXPRESS", "FLASK", "MONGODB", "SCIKIT-LEARN"],
    art: "project-art-forecast",
    image: "/projects/forecast.jpg",
    artLabel: "REACT / FLASK ML",
    sourceUrl: "https://github.com/Brian-Dol/stock-prediction-platform",
    caseStudyUrl: "/work/secure-financial-forecasting",
    details:
      "A multi-service application: a React dashboard with Chart.js, a Node/Express API with bcrypt and JWT authentication and role-protected admin routes on MongoDB, and a Flask service that fetches yfinance market data. A scikit-learn baseline is included but not yet wired into the prediction route.",
  },
  {
    title: "Restaurant Reservation System",
    category: "Business applications",
    description:
      "A Laravel app where guests book a table in two steps and staff manage menus, tables and reservations.",
    technologies: ["LARAVEL 9", "PHP 8", "BREEZE", "TAILWIND", "ALPINE.JS", "MYSQL"],
    art: "project-art-site",
    artLabel: "LARAVEL / BOOKINGS",
    siteName: "reservations",
    sourceUrl: "https://github.com/Brian-Dol/Restaurant-Reservation-System-Laravel",
    caseStudyUrl: "/work/restaurant-reservation-system",
    details:
      "Guests browse the menu and reserve from tables that are free for their date, time and party size, with booking rules enforced on the server. An admin panel manages categories, menus with images, tables and reservations. Online payments are not implemented.",
  },
  {
    title: "Employee Management System",
    category: "Business applications",
    description:
      "A Laravel and Splade admin for employee records, locations, and role-based access.",
    technologies: ["LARAVEL 10", "SPLADE", "VUE 3", "TAILWIND", "SPATIE PERMISSION", "MYSQL"],
    art: "project-art-admin",
    artLabel: "LARAVEL / SPLADE",
    sourceUrl: "https://github.com/Brian-Dol/Employee-management-system-Laravel",
    caseStudyUrl: "/work/employee-management-system",
    details:
      "Searchable, sortable tables and forms for employees, departments, countries, states and cities, plus user, role and permission management. The whole admin area is restricted to the admin role.",
  },
  {
    title: "Carbon Tracker",
    category: "Full-stack applications",
    description:
      "A compact Vue 3 and Express app for logging daily energy use, with JWT authentication and SQLite.",
    technologies: ["VUE 3", "VITE", "EXPRESS 5", "SQLITE", "JWT", "BCRYPT"],
    art: "project-art-forecast",
    artLabel: "VUE / EXPRESS",
    chartTop: "ENERGY LOG",
    chartBottom: "KWH PER DAY",
    sourceUrl: "https://github.com/Brian-Dol/carbon-tracker",
    caseStudyUrl: "/work/carbon-tracker",
    details:
      "Users register, sign in and keep a personal history of daily kWh readings. Passwords are hashed, tokens expire after two hours, and every query is scoped to the signed-in user. CO2 conversion and charts are not implemented yet.",
  },
];

const categories = ["All", ...new Set(projects.map((project) => project.category))];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <div className="project-filters" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            className={`project-filter${activeCategory === category ? " is-active" : ""}`}
            type="button"
            aria-pressed={activeCategory === category}
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">
        {filteredProjects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className={`project-art ${project.art}`} aria-hidden="true">
              {project.art === "project-art-automation" && !project.image && (
                <div className="workflow">
                  <span className="workflow-node">REQUEST</span>
                  <span className="workflow-connector" />
                  <span className="workflow-node workflow-node-accent">AI + RULES</span>
                  <span className="workflow-connector" />
                  <span className="workflow-node">ACTION</span>
                </div>
              )}
              {project.art === "project-art-portfolio" && (
                <div className="portfolio-preview">
                  <div className="portfolio-preview-bar">
                    <i />
                    <i />
                    <i />
                    <span>portfolio.dol-brian23.workers.dev</span>
                  </div>
                  <div className="portfolio-preview-content">
                    <span className="portfolio-preview-label">FULL STACK · AI · CLOUD</span>
                    <strong>Engineering useful software<br />for real work.</strong>
                    <span className="portfolio-preview-line" />
                    <div className="portfolio-preview-api">
                      <span>POST</span> /api/chat <i>AI ONLINE</i>
                    </div>
                  </div>
                </div>
              )}
              {project.art === "project-art-admin" && !project.image && (
                <div className="admin-window">
                  <div className="admin-sidebar" />
                  <div className="admin-content">
                    <span className="admin-title" />
                    <span className="admin-row" />
                    <span className="admin-row" />
                    <span className="admin-row" />
                  </div>
                </div>
              )}
              {project.art === "project-art-land" && !project.image && (
                <div className="map-contours">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {project.art === "project-art-forecast" && !project.image && (
                <div className="forecast-panel">
                  <span className="forecast-label">{project.chartTop ?? "FORECAST"}</span>
                  <svg viewBox="0 0 300 150" role="presentation">
                    <path className="chart-grid" d="M0 30H300M0 75H300M0 120H300" />
                    <path
                      className="chart-line"
                      d="M5 112C34 104 42 72 72 83S113 116 145 80 184 51 210 66 250 30 295 24"
                    />
                    <circle cx="295" cy="24" r="5" />
                  </svg>
                  <span className="forecast-label">{project.chartBottom ?? "SCENARIO → OUTLOOK"}</span>
                </div>
              )}
              {project.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="project-thumb" src={project.image} alt="" loading="lazy" />
              )}
              {project.art === "project-art-site" && !project.image && (
                <div className="site-window">
                  <div className="site-bar">
                    <i />
                    <i />
                    <i />
                    <span>{project.siteName}</span>
                  </div>
                  <div className="site-body">
                    <span className="site-hero" />
                    <span className="site-line" />
                    <span className="site-line short" />
                  </div>
                </div>
              )}
              <span className="art-index">
                {String(index + 1).padStart(2, "0")} / {project.artLabel}
              </span>
            </div>
            <div className="project-meta">
              <div>
                <h3>
                  {project.href ? (
                    <a
                      className="project-title-link"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title} <span aria-hidden="true">↗</span>
                    </a>
                  ) : project.caseStudyUrl ? (
                    <a className="project-title-link" href={project.caseStudyUrl}>
                      {project.title} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p>{project.description}</p>
              </div>
            </div>
            <div className="project-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            {project.outcome && <p className="project-outcome">{project.outcome}</p>}
            <details className="project-details">
              <summary>Project details <span aria-hidden="true">＋</span></summary>
              <p>{project.details}</p>
              {project.caseStudyUrl && (
                <a className="project-visit" href={project.caseStudyUrl}>
                  Read the engineering case study →
                </a>
              )}
              {project.highlights && (
                <>
                  <h4 className="project-detail-heading">Engineering highlights</h4>
                  <ul className="project-detail-list">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </>
              )}
              {project.tradeoffs && (
                <>
                  <h4 className="project-detail-heading">Engineering trade-offs</h4>
                  <p>{project.tradeoffs}</p>
                </>
              )}
              {project.liveUrl && (
                <div className="project-detail-links">
                  <a className="project-visit" href={project.caseStudyUrl}>
                    Read the engineering case study →
                  </a>
                  <a className="project-visit" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Explore the live portfolio ↗
                  </a>
                  <a className="project-visit" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    View source code on GitHub ↗
                  </a>
                </div>
              )}
              {!project.liveUrl && project.sourceUrl && (
                <a className="project-visit" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  View source code on GitHub ↗
                </a>
              )}
              {project.href && (
                <a className="project-visit" href={project.href} target="_blank" rel="noopener noreferrer">
                  Visit live site ↗
                </a>
              )}
            </details>
          </article>
        ))}
      </div>
      <p className="project-count" aria-live="polite">
        Showing {filteredProjects.length} of {projects.length} selected projects
      </p>
    </>
  );
}

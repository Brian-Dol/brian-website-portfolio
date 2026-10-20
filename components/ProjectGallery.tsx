"use client";

import { useMemo, useState } from "react";

const projects = [
  {
    title: "AI workflow automation",
    category: "AI & automation",
    description:
      "Connected LLM APIs, backend services, CRMs, and business systems to simplify recurring operational work.",
    technologies: ["LLM APIS", "INTEGRATIONS", "WORKFLOW AUTOMATION"],
    outcome: "Automations reduced manual workload by 70%+ in relevant workflows.",
    art: "project-art-automation",
    artLabel: "AI / AUTOMATION",
    details:
      "Designed integrations around real operational handoffs, using APIs and webhooks to move information between business systems. The focus was to reduce repetitive work while keeping the workflows maintainable and reviewable.",
  },
  {
    title: "mAble Admin",
    category: "Full-stack applications",
    description:
      "Contributed backend and API functionality for company and user profile features in a React and TypeScript product.",
    technologies: ["LARAVEL 12", "REACT", "TYPESCRIPT"],
    art: "project-art-admin",
    artLabel: "LARAVEL / REACT",
    details:
      "Worked on company and user profile capabilities, keeping frontend presentation separate from backend business logic through an API-based integration.",
  },
  {
    title: "Land Quality API",
    category: "Data & geospatial",
    description:
      "A data-focused API project for structured land-quality information and geospatial functionality.",
    technologies: ["DJANGO", "POSTGRESQL", "POSTGIS"],
    art: "project-art-land",
    artLabel: "DJANGO / POSTGIS",
    details:
      "Built around structured data management and spatial database capabilities, applying backend engineering and PostgreSQL/PostGIS integration to a geospatial use case.",
  },
  {
    title: "Secure financial forecasting",
    category: "Cloud & security",
    description:
      "Cloud-based forecasting capstone with separate administrative and investor roles.",
    technologies: ["REACT", "DJANGO", "POSTGRESQL"],
    art: "project-art-forecast",
    artLabel: "CLOUD / SECURITY",
    details:
      "Applied cloud and network security principles to a full-stack financial forecasting application, with distinct roles for administrators and investors.",
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
              {project.art === "project-art-automation" && (
                <div className="workflow">
                  <span className="workflow-node">REQUEST</span>
                  <span className="workflow-connector" />
                  <span className="workflow-node workflow-node-accent">AI + RULES</span>
                  <span className="workflow-connector" />
                  <span className="workflow-node">ACTION</span>
                </div>
              )}
              {project.art === "project-art-admin" && (
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
              {project.art === "project-art-land" && (
                <div className="map-contours">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {project.art === "project-art-forecast" && (
                <div className="forecast-panel">
                  <span className="forecast-label">FORECAST</span>
                  <svg viewBox="0 0 300 150" role="presentation">
                    <path className="chart-grid" d="M0 30H300M0 75H300M0 120H300" />
                    <path
                      className="chart-line"
                      d="M5 112C34 104 42 72 72 83S113 116 145 80 184 51 210 66 250 30 295 24"
                    />
                    <circle cx="295" cy="24" r="5" />
                  </svg>
                  <span className="forecast-label">SCENARIO → OUTLOOK</span>
                </div>
              )}
              <span className="art-index">
                {String(index + 1).padStart(2, "0")} / {project.artLabel}
              </span>
            </div>
            <div className="project-meta">
              <div>
                <h3>{project.title}</h3>
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

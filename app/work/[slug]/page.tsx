import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import SiteHeader from "@/components/SiteHeader";
import { architectureDiagrams } from "@/lib/architectureDiagrams";
import { projectCaseStudies } from "@/lib/projectCaseStudies";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectCaseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectCaseStudies.find((item) => item.slug === slug);
  if (!project) return { title: "Case study not found | Brian Dol" };

  return {
    title: `${project.title} | Engineering Case Study | Brian Dol`,
    description: project.strapline,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectCaseStudies.find((item) => item.slug === slug);
  if (!project) notFound();
  const diagram = architectureDiagrams[project.slug];
  const n = (value: number) => String(value).padStart(2, "0");
  let section = 1;
  const overviewNo = section++;
  const diagramNo = diagram ? section++ : 0;
  const contributionNo = section++;
  const engineeringNo = section++;
  const limitationsNo = project.limitations ? section++ : 0;
  const outcomesNo = project.outcomes ? section++ : 0;

  return (
    <>
      <SiteHeader />
      <main className="case-study page-wrap">
        <Link className="case-back" href="/#work">
          <span aria-hidden="true">←</span> Back to selected work
        </Link>

        <header className="case-hero">
          <p className="eyebrow">ENGINEERING CASE STUDY · {project.category.toUpperCase()}</p>
          <h1>
            {project.title}
            <br />
            <span>Engineering case study.</span>
          </h1>
          <p className="case-stack">{project.technologies.join(" · ").toUpperCase()}</p>
          <p className="case-lede">{project.strapline}</p>
          <div className="case-actions">
            {project.externalUrl && (
              <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                Explore the live project ↗
              </a>
            )}
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                View source on GitHub ↗
              </a>
            )}
            <Link href="/#work">Back to all selected work ↓</Link>
          </div>
          {project.facts && (
            <dl className="case-facts">
              {project.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </header>

        <section className="case-section">
          <p className="eyebrow">{n(overviewNo)} / OVERVIEW</p>
          <div className="case-content">
            <h2>The project</h2>
            <p>{project.overview}</p>
          </div>
        </section>

        {diagram && (
          <section className="case-section">
            <p className="eyebrow">{n(diagramNo)} / ARCHITECTURE</p>
            <div className="case-content">
              <h2>How it fits together</h2>
              <ArchitectureDiagram diagram={diagram} />
            </div>
          </section>
        )}

        <section className="case-section">
          <p className="eyebrow">{n(contributionNo)} / CONTRIBUTION</p>
          <div className="case-content">
            <h2>My contribution</h2>
            <ul className="case-list">
              {project.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">{n(engineeringNo)} / ENGINEERING</p>
          <div className="case-content">
            <h2>Engineering notes</h2>
            <ul className="case-list">
              {project.engineeringNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {project.limitations && (
          <section className="case-section">
            <p className="eyebrow">{n(limitationsNo)} / LIMITATIONS</p>
            <div className="case-content">
              <h2>Limitations and next steps</h2>
              <ul className="case-list">
                {project.limitations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {project.outcomes && (
          <section className="case-section">
            <p className="eyebrow">{n(outcomesNo)} / OUTCOMES</p>
            <div className="case-content">
              <h2>Outcomes and context</h2>
              <ul className="case-list">
                {project.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="case-result">
          <p className="eyebrow">TECHNOLOGY</p>
          <h2>Tools selected for the work.</h2>
          <div className="project-tags case-tech-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <p>
            This case study describes the work using the details available in the project
            portfolio and professional experience. Where implementation specifics or measured
            outcomes are not documented, they are intentionally not assumed.
          </p>
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

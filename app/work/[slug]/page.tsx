import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
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
            <Link href="/#work">Back to all selected work ↓</Link>
          </div>
        </header>

        <section className="case-section">
          <p className="eyebrow">01 / OVERVIEW</p>
          <div className="case-content">
            <h2>The project</h2>
            <p>{project.overview}</p>
          </div>
        </section>

        <section className="case-section">
          <p className="eyebrow">02 / CONTRIBUTION</p>
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
          <p className="eyebrow">03 / ENGINEERING</p>
          <div className="case-content">
            <h2>Engineering notes</h2>
            <ul className="case-list">
              {project.engineeringNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {project.outcomes && (
          <section className="case-section">
            <p className="eyebrow">04 / OUTCOMES</p>
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

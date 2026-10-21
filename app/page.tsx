import ApiStatus from "@/components/ApiStatus";
import Chatbot from "@/components/Chatbot";
import { CV_URL } from "@/lib/profile";
import ProjectGallery from "@/components/ProjectGallery";
import SiteHeader from "@/components/SiteHeader";
import TechPopups from "@/components/TechPopups";
import Timeline from "@/components/Timeline";

const skills = [
  {
    title: "Frontend",
    tools:
      "React, Next.js, Vue, Angular, JavaScript, TypeScript, HTML, CSS, Tailwind, Redux, Vite",
  },
  {
    title: "Backend & APIs",
    tools:
      "PHP, Laravel, Node.js, NestJS, Python, Django, Flask, FastAPI, Java, Spring Boot, C#/.NET, REST, GraphQL",
  },
  {
    title: "CMS & commerce",
    tools:
      "WordPress, WooCommerce, custom themes and plugins, Elementor, Gutenberg, Shopify, Magento, Webflow",
  },
  {
    title: "AI & automation",
    tools:
      "LLM APIs, workflow automation, webhooks, CRM integrations, Python and Node.js automation",
  },
  {
    title: "Data & infrastructure",
    tools:
      "PostgreSQL, MySQL, MongoDB, Redis, DynamoDB, PostGIS, Kafka, RabbitMQ, WebSockets, AWS, Azure, GCP, Docker, Kubernetes, Terraform, CI/CD",
  },
  {
    title: "Quality & delivery",
    tools:
      "Playwright, Jest, Cypress, PHPUnit, OAuth, JWT, Git, technical planning, QA, deployment, production support",
  },
];

const experience = [
  {
    date: "AUG 2025, AUG 2026",
    title: "Senior Full Stack Engineer · AI Systems Product Developer",
    company: "mAble",
    location: "Remote",
    description:
      "Built AI-enabled applications and API/webhook integrations across LLM services, backend systems, CRMs, and external business tools. Reviewed implementation quality and production readiness.",
    highlight: "Automations reduced manual effort by 70%+ in relevant workflows.",
  },
  {
    date: "MAR 2025, AUG 2025",
    title: "Senior Web Developer · Growth & Digital Solutions Engineer",
    company: "FZ SHAMS, SHAMS Services",
    location: "Sharjah, UAE",
    description:
      "Developed WordPress experiences, multilingual sites, and Zoho/CRM integrations. Migrated startwith.shams.ae to shamsfz.ae with zero downtime and contributed to SEO and lead-generation improvements.",
    highlight: "Reported outcomes included +25% SEO improvement and +18% leads.",
  },
  {
    date: "JAN 2020, FEB 2025",
    title: "Senior Software Engineer · Project Manager",
    company: "Third World Nerds",
    location: "Dubai, UAE / Remote",
    description:
      "Founded and ran a remote software agency delivering websites, APIs, e-commerce, and custom platforms. Led technical planning, engineering, QA, delivery, and client communication across approximately 10 to 20 client accounts.",
  },
  {
    date: "JUN 2017, DEC 2019",
    title: "Software Engineer · Web Developer",
    company: "DolTech Software Solutions",
    location: "Nairobi, Kenya",
    description:
      "Built and maintained websites, WordPress/WooCommerce solutions, custom themes and plugins, database-backed features, and third-party integrations. Supported hosting, DNS, SSL, deployment, and maintenance.",
  },
];

const education = [
  {
    date: "2023, 2024",
    title: "MSc, Cloud and Network Security",
    school: "University of Bolton, UAE",
    result: "GPA 4.0 / 4.0",
    detail:
      "Focus: cloud security, cryptography, DevOps, GDPR, and ISO 27001. Capstone: secure cloud-based financial forecasting application.",
  },
  {
    date: "2020, 2023",
    title: "BEng, Software Engineering",
    school: "University of Bolton, UAE",
    result: "Upper Second-Class Honours",
    detail: "GPA 3.6 / 4.0 · Dean's List recipient.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero page-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> FULL STACK · AI · DIGITAL SOLUTIONS
            </p>
            <h1>
              Engineering
              <br />
              useful software
              <br />
              <span>for real work.</span>
            </h1>
            <p className="hero-intro">
              I&apos;m Brian Dol, a senior full stack engineer with 9+ years building web
              applications, APIs, e-commerce platforms, and AI-enabled workflows from idea
              through production.
            </p>
            <a className="text-link" href="#work">
              Explore selected work <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link cv-link" href={CV_URL} target="_blank" rel="noopener noreferrer">
              Download my CV <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-ring ring-one" />
            <div className="art-ring ring-two" />
            <div className="art-ring ring-three" />
            <div className="art-sun" />
            <TechPopups />
            <span className="art-cross">+</span>
          </div>
          <div className="hero-footer">
            <span>9+ YEARS IN SOFTWARE</span>
            <span>SHARJAH, UAE</span>
            <span>FULL STACK / AI / CLOUD</span>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="page-wrap">
            <div className="about-grid">
              <p className="eyebrow section-label">01 / ABOUT</p>
              <div>
                <h2>
                  From first idea
                  <br />
                  <span>to production-ready.</span>
                </h2>
                <p className="about-copy">
                  I work across the software lifecycle: understanding the problem, shaping a
                  maintainable solution, building the product, and supporting it in production.
                  My background spans full stack engineering, WordPress and e-commerce, cloud
                  platforms, integrations, and practical AI automation.
                </p>
                <p className="about-copy">
                  I enjoy making complex systems work together and turning repetitive processes
                  into reliable, useful tools for the people who depend on them.
                </p>
              </div>
            </div>
            <div className="skills-block">
              <div className="skills-heading">
                <p className="eyebrow section-label">CORE SKILLS</p>
                <p className="section-aside">A broad toolkit, applied to the problem at hand.</p>
              </div>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <article className="skill-card" key={skill.title}>
                    <h3>{skill.title}</h3>
                    <p>{skill.tools}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work">
          <div className="page-wrap">
            <div className="section-heading">
              <p className="eyebrow section-label">02 / SELECTED WORK</p>
              <p className="section-aside">A few problems solved with software.</p>
            </div>
            <ProjectGallery />
          </div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="page-wrap experience-grid">
            <p className="eyebrow section-label">03 / EXPERIENCE</p>
            <div>
              <div className="section-heading experience-heading">
                <h2>
                  Building across
                  <br />
                  <span>teams and time zones.</span>
                </h2>
                <p className="section-aside">2017, 2026</p>
              </div>
              <Timeline roles={experience} />
            </div>
          </div>
        </section>

        <section className="education section-pad">
          <div className="page-wrap education-grid">
            <p className="eyebrow section-label">04 / EDUCATION</p>
            <div className="education-list">
              {education.map((item) => (
                <article className="education-item" key={item.title}>
                  <p className="timeline-date">{item.date}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      {item.school} <span>· {item.result}</span>
                    </p>
                    <p className="education-note">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="page-wrap contact-inner">
            <p className="eyebrow section-label">05 / GET IN TOUCH</p>
            <h2>
              Let&apos;s build
              <br />
              something useful.
            </h2>
            <p>Have a project, a technical challenge, or an opportunity in mind? Get in touch.</p>
            <a className="contact-button" href="mailto:dol.brian23@gmail.com">
              Email Brian <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-email" href="mailto:dol.brian23@gmail.com">
              dol.brian23@gmail.com
            </a>
            <a className="contact-email" href={CV_URL} target="_blank" rel="noopener noreferrer">
              Download CV ↓
            </a>
          </div>
          <div className="contact-orbit orbit-a" aria-hidden="true" />
          <div className="contact-orbit orbit-b" aria-hidden="true" />
        </section>
        <div className="api-status-wrap">
          <ApiStatus />
        </div>
      </main>
      <footer className="site-footer page-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            b.
          </span>
          <span>BRIAN DOL · SOFTWARE ENGINEER</span>
        </a>
        <span>© {new Date().getFullYear()} BRIAN DOL</span>
        <a className="back-top" href="#home">
          BACK TO TOP ↑
        </a>
      </footer>
      <Chatbot />
    </>
  );
}

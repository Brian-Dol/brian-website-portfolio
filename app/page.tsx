import ApiStatus from "@/components/ApiStatus";
import Chatbot from "@/components/Chatbot";
import { CV_URL } from "@/lib/profile";
import ProjectGallery from "@/components/ProjectGallery";
import SiteHeader from "@/components/SiteHeader";
import TechPopups from "@/components/TechPopups";
import Timeline from "@/components/Timeline";

const LOCATION = "Sharjah, UAE (also work from Nairobi, Kenya)";
const LINKEDIN_URL = "https://linkedin.com/in/brian-dol-31a06115a/";
const GITHUB_URL = "https://github.com/Brian-Dol";

const skills = [
  {
    title: "Frontend Engineering",
    tools: "React, Next.js, Vue.js, Angular, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Redux, Vite.",
  },
  {
    title: "Backend Engineering & APIs",
    tools:
      "PHP, Laravel, Node.js, NestJS, Python, Django, Flask, FastAPI, Java, Spring Boot, C#/.NET, REST APIs, GraphQL.",
  },
  {
    title: "CMS & E-commerce",
    tools:
      "WordPress, WooCommerce, custom themes and plugins, Elementor, Gutenberg, Shopify, Magento, Webflow, Drupal.",
  },
  {
    title: "AI Systems & Automation",
    tools:
      "LLM API integrations, AI-assisted development, workflow automation, webhooks, CRM integrations, Python and Node.js automation.",
  },
  {
    title: "Data, Cloud & DevOps",
    tools:
      "PostgreSQL, MySQL, MongoDB, Redis, DynamoDB, PostGIS, Kafka, RabbitMQ, WebSockets, AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform, CI/CD, GitHub Actions.",
  },
  {
    title: "Quality, Security & Delivery",
    tools:
      "Playwright, Jest, Cypress, PHPUnit, OAuth, JWT, API testing, Git, technical planning, QA, troubleshooting, deployment, and production support.",
  },
];

const icons = {
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
  layers: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  check: "M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4 12 14l-3-3",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  target: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  message: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  refresh: "M21 12a9 9 0 0 1-15.5 6.3L3 16M3 12A9 9 0 0 1 18.5 5.7L21 8M21 3v5h-5M3 21v-5h5",
};

type IconName = keyof typeof icons;

function StepIcon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={icons[name]} />
    </svg>
  );
}

function StepsPanel({
  label,
  heading,
  items,
}: {
  label: string;
  heading: string;
  items: { icon: IconName; title: string; text: string; tag: string }[];
}) {
  return (
    <div className="steps-panel">
      <div className="steps-intro">
        <p className="eyebrow">{label}</p>
        <h3>{heading}</h3>
      </div>
      <div className="steps-grid">
        {items.map((item) => (
          <article className="step" key={item.title}>
            <span className="step-icon">
              <StepIcon name={item.icon} />
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
            <span className="step-tag">{item.tag}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

const howIWork: { icon: IconName; title: string; text: string; tag: string }[] = [
  {
    icon: "search",
    title: "Understand the problem",
    text: "Clarify requirements, constraints, and the outcome the software needs to achieve.",
    tag: "REQUIREMENTS",
  },
  {
    icon: "layers",
    title: "Design for maintainability",
    text: "Choose appropriate technologies, define system boundaries, and keep components understandable.",
    tag: "ARCHITECTURE",
  },
  {
    icon: "code",
    title: "Build and integrate",
    text: "Develop the application, connect APIs and external services, and handle real-world data and failure scenarios.",
    tag: "APIS + DATA",
  },
  {
    icon: "check",
    title: "Test and deliver",
    text: "Validate functionality, troubleshoot issues, support deployment, and improve the solution based on results.",
    tag: "QA + RELEASE",
  },
];

const experience = [
  {
    date: "AUG 2025, AUG 2026",
    title: "Senior Full Stack Engineer · AI Systems Product Developer",
    company: "mAble / AI Systems Development",
    location: "Remote",
    description:
      "Built AI-enabled applications and API/webhook integrations across LLM services, backend systems, and business tools, and prepared them for production.",
    bullets: ["Automations cut manual workload by 70%+ in relevant processes."],
  },
  {
    date: "MAR 2025, AUG 2025",
    title: "Senior Web Developer · Growth & Digital Solutions Engineer",
    company: "FZ SHAMS, SHAMS Services",
    location: "Sharjah, UAE",
    description:
      "Delivered multilingual WordPress/Elementor sites (English, German, Russian, Arabic) and CRM integrations. Migrated startwith.shams.ae to shamsfz.ae with zero downtime.",
    bullets: [
      "SEO up 25%, leads up 18%, Arabic SEO reach up 30%, webinar registrations up 20%.",
    ],
  },
  {
    date: "JAN 2020, FEB 2025",
    title: "Senior Software Engineer · Project Manager",
    company: "Third World Nerds",
    location: "Remote",
    description:
      "Founded and ran a remote software agency delivering web apps, APIs, e-commerce, and custom platforms, covering technical planning, QA, delivery, and client communication.",
    bullets: [
      "Managed 10 to 20 client accounts with 85%+ retention.",
      "Real-time systems (WebSockets, Kafka) under 200 ms latency; deployment cycles about 75% faster.",
    ],
  },
  {
    date: "JUN 2017, DEC 2019",
    title: "Software Engineer · Web Developer",
    company: "DolTech Software Solutions",
    location: "Nairobi, Kenya",
    description:
      "Built websites, WordPress/WooCommerce solutions, custom themes and plugins, and third-party integrations, and supported hosting, DNS, SSL, and deployment.",
  },
];

const approach: { icon: IconName; title: string; text: string; tag: string }[] = [
  {
    icon: "shield",
    title: "Ownership",
    text: "I take responsibility for understanding the problem and moving work toward a usable outcome.",
    tag: "END TO END",
  },
  {
    icon: "target",
    title: "Practical problem-solving",
    text: "I focus on the underlying cause, not just the visible symptom.",
    tag: "ROOT CAUSE",
  },
  {
    icon: "message",
    title: "Clear communication",
    text: "I work across technical and non-technical teams to keep requirements, decisions, and delivery aligned.",
    tag: "ALIGNMENT",
  },
  {
    icon: "refresh",
    title: "Continuous improvement",
    text: "I look for opportunities to simplify systems, improve reliability, and reduce unnecessary manual work.",
    tag: "RELIABILITY",
  },
];

const education = [
  {
    date: "2023, 2024",
    title: "MSc, Cloud and Network Security",
    school: "University of Bolton, UAE",
    result: "GPA: 4.0 / 4.0",
    detail:
      "Focused on cloud security, cryptography, DevOps, GDPR, and ISO 27001. Capstone: secure cloud-based financial forecasting application with separate administrator and investor roles.",
  },
  {
    date: "2020, 2023",
    title: "BEng, Software Engineering",
    school: "University of Bolton, UAE",
    result: "GPA: 3.6 / 4.0 · Upper Second-Class Honours",
    detail: "Dean's List recipient, with a foundation in software engineering, application development, and database systems.",
  },
];
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero page-wrap" id="home">
          <div className="hero-copy">
            <p className="hero-role">
              <span className="status-dot" /> Senior Full Stack Engineer · AI Systems · Cloud &amp; Integrations
            </p>
            <h1>
              Engineering
              <br />
              useful software
              <br />
              <span>for real work.</span>
            </h1>
            <p className="hero-intro">
              I design, build, and ship web applications, APIs, and AI-powered workflows that
              solve practical business problems. With 9+ years of experience across full-stack
              engineering, backend systems, cloud infrastructure, and digital platforms, I take
              products from initial requirements to production-ready solutions.
            </p>
            <div className="hero-actions">
              <a className="text-link" href="#work">
                Explore My Work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                View GitHub <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link cv-link" href={CV_URL} target="_blank" rel="noopener noreferrer">
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
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
            <span>{LOCATION.toUpperCase()}</span>
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
                  I build software that connects people, data, and business processes. My work
                  spans full stack application development, backend systems, WordPress and
                  e-commerce platforms, cloud technologies, third-party integrations, and
                  practical AI automation.
                </p>
                <p className="about-copy">
                  Over the course of my career, I&apos;ve worked with distributed teams and
                  international clients across diverse technical environments; from developing
                  custom web applications and APIs to connecting business systems and improving
                  operational workflows.
                </p>
                <p className="about-copy">
                  I enjoy the engineering work behind the interface: designing APIs, structuring
                  data, troubleshooting integrations, improving reliability, and making sure the
                  pieces of a system work together.
                </p>
                <p className="about-copy">
                  My approach is practical and ownership-driven. I aim to understand the problem
                  before choosing the tools, keep implementations maintainable, and deliver
                  solutions that can be tested, deployed, and supported beyond the initial
                  release.
                </p>
              </div>
            </div>
            <div className="skills-block">
              <div className="skills-heading">
                <p className="eyebrow section-label">CORE SKILLS</p>
                <p className="section-aside">A broad technical toolkit, applied to the problem at hand.</p>
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
            <StepsPanel label="HOW I WORK" heading="A clear process, from idea to release." items={howIWork} />
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
              <p className="about-copy experience-intro">
                My experience spans web development, full stack engineering, digital product
                development, integrations, automations, and technical project delivery; from
                running a remote software agency to building AI-enabled workflows and supporting
                business-critical web platforms.
              </p>
              <Timeline roles={experience} />
              <StepsPanel
                label="HOW I APPROACH ENGINEERING"
                heading="Principles behind the work."
                items={approach}
              />
            </div>
          </div>
        </section>

        <section className="education section-pad">
          <div className="page-wrap education-grid">
            <p className="eyebrow section-label">04 / EDUCATION</p>
            <div>
              <h2>
                Engineering backed by
                <br />
                <span>technical foundations.</span>
              </h2>
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
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="page-wrap contact-inner">
            <p className="eyebrow section-label">05 / CAREER OPPORTUNITIES</p>
            <h2>
              Let&apos;s build
              <br />
              something meaningful.
            </h2>
            <p>
              I&apos;m seeking a <strong>full-time, permanent opportunity</strong> where I can
              contribute my experience in software engineering, full stack development,
              AI-powered systems, cloud platforms, and integrations as part of a long-term team.
            </p>
            <p>
              With experience building and maintaining production applications, connecting
              business systems, and solving complex technical problems, I bring a practical,
              ownership-driven approach to engineering. I&apos;m looking to join an organization
              where I can take responsibility, collaborate with talented people, contribute to
              meaningful products, and continue growing over the long term.
            </p>
            <p>
              <strong>
                If you&apos;re looking for an engineer who can contribute beyond individual tasks
                and grow with your team, I&apos;d welcome the conversation.
              </strong>
            </p>
            <dl className="contact-details">
              <div>
                <dt>EMAIL</dt>
                <dd>
                  <a href="mailto:dol.brian23@gmail.com">dol.brian23@gmail.com</a>
                </dd>
              </div>
              <div>
                <dt>LOCATION</dt>
                <dd>Sharjah, United Arab Emirates · Open to remote opportunities</dd>
              </div>
              <div>
                <dt>CONNECT</dt>
                <dd>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>{" "}
                  ·{" "}
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </dd>
              </div>
            </dl>
            <a className="contact-button" href="mailto:dol.brian23@gmail.com">
              Discuss a Full-Time Opportunity <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-email" href={CV_URL} target="_blank" rel="noopener noreferrer">
              Download My CV ↓
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
          <span>BRIAN DOL · SENIOR SOFTWARE ENGINEER</span>
        </a>
        <span>Seeking a long-term role in software engineering and digital product development.</span>
        <span>© {new Date().getFullYear()} BRIAN DOL.</span>
        <a className="back-top" href="#home">
          BACK TO TOP ↑
        </a>
      </footer>
      <Chatbot />
    </>
  );
}

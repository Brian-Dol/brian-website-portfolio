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
    title: "Data & Messaging",
    tools: "PostgreSQL, MySQL, MongoDB, Redis, DynamoDB, PostGIS, Kafka, RabbitMQ, WebSockets.",
  },
  {
    title: "Cloud & DevOps",
    tools: "AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform, CI/CD, GitHub Actions, deployment automation.",
  },
  {
    title: "Quality, Security & Delivery",
    tools:
      "Playwright, Jest, Cypress, PHPUnit, OAuth, JWT, API testing, Git, technical planning, QA, troubleshooting, deployment, and production support.",
  },
];

const howIWork = [
  {
    title: "Understand the problem.",
    text: "Clarify requirements, constraints, and the outcome the software needs to achieve.",
  },
  {
    title: "Design for maintainability.",
    text: "Choose appropriate technologies, define system boundaries, and keep components understandable.",
  },
  {
    title: "Build and integrate.",
    text: "Develop the application, connect APIs and external services, and handle real-world data and failure scenarios.",
  },
  {
    title: "Test and deliver.",
    text: "Validate functionality, troubleshoot issues, support deployment, and improve the solution based on results.",
  },
];

const experience = [
  {
    date: "AUG 2025, AUG 2026",
    title: "Senior Full Stack Engineer · AI Systems Product Developer",
    company: "mAble / AI Systems Development",
    location: "Remote",
    description:
      "Built and integrated application functionality across backend services, APIs, LLM-powered features, and external business systems. Focused on connecting services reliably, reviewing implementation quality, and preparing software for production use.",
    bullets: [
      "Developed AI-enabled application functionality and backend integrations.",
      "Connected APIs, webhooks, and business tools to automate recurring operational workflows.",
      "Applied AI-assisted development with code review, debugging, and validation to improve implementation quality.",
      "Contributed to automation workflows that reduced manual workload by more than 70% in relevant processes.",
    ],
  },
  {
    date: "MAR 2025, AUG 2025",
    title: "Senior Web Developer · Growth & Digital Solutions Engineer",
    company: "FZ SHAMS, SHAMS Services",
    location: "Sharjah, UAE",
    description:
      "Delivered WordPress development, multilingual web experiences, CRM integrations, and website improvements supporting SHAMS' digital presence and lead-generation activities.",
    bullets: [
      "Developed and maintained WordPress and Elementor experiences across 4 languages: English, German, Russian, and Arabic.",
      "Supported CRM integrations, API and webhook workflows, and marketing analytics implementations.",
      "Migrated startwith.shams.ae to shamsfz.ae with zero downtime.",
      "Contributed to reported improvements of 25% in SEO and 18% in leads, alongside a 30% gain in Arabic SEO reach and 20% more webinar registrations.",
    ],
  },
  {
    date: "JAN 2020, FEB 2025",
    title: "Senior Software Engineer · Project Manager",
    company: "Third World Nerds",
    location: "Remote",
    description:
      "Founded and operated a remote software agency delivering web applications, APIs, e-commerce platforms, and custom digital solutions for multiple clients.",
    bullets: [
      "Led technical planning, implementation, QA, delivery coordination, and client communication across approximately 10 to 20 client accounts, with 85%+ client retention.",
      "Built and maintained full stack applications, backend services, APIs, and third-party integrations.",
      "Worked on real-time application functionality using WebSockets and Kafka, with reported latency below 200 ms in relevant workloads.",
      "Improved deployment and delivery processes by approximately 75%, while balancing technical requirements, project timelines, and client needs.",
    ],
  },
  {
    date: "JUN 2017, DEC 2019",
    title: "Software Engineer · Web Developer",
    company: "DolTech Software Solutions",
    location: "Nairobi, Kenya",
    description:
      "Developed and maintained websites, e-commerce functionality, and custom web solutions, with responsibilities spanning implementation, integration, and ongoing technical support.",
    bullets: [
      "Built websites and WordPress/WooCommerce solutions, including custom themes, plugins, and database-backed features.",
      "Integrated third-party services and developed application functionality using PHP, JavaScript, and MySQL.",
      "Supported hosting configuration, DNS, SSL, deployment, troubleshooting, and website maintenance.",
      "Worked across implementation and support activities to keep client-facing websites functional and maintainable.",
    ],
  },
];

const approach = [
  {
    title: "Ownership:",
    text: "I take responsibility for understanding the problem and moving work toward a usable outcome.",
  },
  {
    title: "Practical problem-solving:",
    text: "I focus on the underlying cause, not just the visible symptom.",
  },
  {
    title: "Clear communication:",
    text: "I work across technical and non-technical teams to keep requirements, decisions, and delivery aligned.",
  },
  {
    title: "Continuous improvement:",
    text: "I look for opportunities to simplify systems, improve reliability, and reduce unnecessary manual work.",
  },
];

const education = [
  {
    date: "2023, 2024",
    title: "MSc, Cloud and Network Security",
    school: "University of Bolton, UAE",
    result: "GPA: 4.0 / 4.0",
    detail:
      "Focused on cloud security, cryptography, DevOps, data protection, GDPR, and ISO 27001 principles.",
    capstone: {
      title: "Secure Cloud-Based Financial Forecasting Application.",
      text: "Applied software engineering and security concepts to a cloud-based financial forecasting system with separate administrative and investor roles.",
    },
  },
  {
    date: "2020, 2023",
    title: "BEng, Software Engineering",
    school: "University of Bolton, UAE",
    result: "GPA: 3.6 / 4.0 · Upper Second-Class Honours",
    detail:
      "Recognized on the Dean's List. Developed a foundation in software engineering principles, application development, database systems, and structured problem-solving.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero page-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-name">
              <span className="status-dot" /> BRIAN DOL
            </p>
            <p className="hero-role">Senior Full Stack Engineer · AI Systems · Cloud &amp; Integrations</p>
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
            <p className="hero-intro">
              I care about more than getting software to work. I care about making it reliable,
              maintainable, secure, and genuinely useful.
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
            <div className="skills-block">
              <div className="skills-heading">
                <p className="eyebrow section-label">HOW I WORK</p>
              </div>
              <div className="skills-grid">
                {howIWork.map((step, index) => (
                  <article className="skill-card" key={step.title}>
                    <h3>
                      {String(index + 1).padStart(2, "0")} {step.title}
                    </h3>
                    <p>{step.text}</p>
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
              <p className="about-copy experience-intro">
                My experience spans web development, full stack engineering, digital product
                development, integrations, automations, and technical project delivery; from
                running a remote software agency to building AI-enabled workflows and supporting
                business-critical web platforms.
              </p>
              <Timeline roles={experience} />
              <div className="skills-block approach-block">
                <div className="skills-heading">
                  <p className="eyebrow section-label">HOW I APPROACH ENGINEERING</p>
                </div>
                <div className="skills-grid">
                  {approach.map((item) => (
                    <article className="skill-card" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
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
                      {item.capstone && (
                        <div className="education-capstone">
                          <p className="eyebrow">CAPSTONE PROJECT</p>
                          <p>
                            <strong>{item.capstone.title}</strong> {item.capstone.text}
                          </p>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
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
            <p>
              Have a product to build, a technical challenge to solve, or an engineering
              opportunity in mind?
            </p>
            <p>
              I&apos;m interested in work involving web development, full stack applications,
              backend systems, AI-powered workflows, cloud platforms, and integrations.
            </p>
            <p>
              If you value practical problem-solving, thoughtful engineering, and software built
              for real-world use, let&apos;s talk.
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
                <dd>{LOCATION}</dd>
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
              Email Me <span aria-hidden="true">↗</span>
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
        <span>© {new Date().getFullYear()} BRIAN DOL.</span>
        <a className="back-top" href="#home">
          BACK TO TOP ↑
        </a>
      </footer>
      <Chatbot />
    </>
  );
}

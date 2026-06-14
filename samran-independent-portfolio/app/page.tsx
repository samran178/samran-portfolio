import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { RequirementForm } from "@/components/RequirementForm";
import { profile, projects, services, skills, stats, timeline } from "@/data/profile";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <Header />
      <main>
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="status-pill"><span /> Available for remote software projects</div>
            <h1>{profile.name}</h1>
            <h2>{profile.headline}</h2>
            <p>{profile.value}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">Start a project</a>
              <a className="btn secondary" href={profile.github} target="_blank" rel="noreferrer">View GitHub</a>
            </div>
            <div className="social-row" aria-label="Social links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Profile card">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="profile-card">
              <div className="profile-ring">
                <Image src="/profile.png" alt={profile.name} width={260} height={260} priority />
              </div>
              <div className="profile-meta">
                <span>{profile.role}</span>
                <strong>{profile.location}</strong>
              </div>
            </div>
            <div className="floating-card card-a">AI Automation</div>
            <div className="floating-card card-b">Full-stack Systems</div>
          </div>
        </section>

        <section className="stats-grid section-narrow" aria-label="Portfolio stats">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="work" className="section-pad">
          <SectionTitle
            eyebrow="Selected Work"
            title="Projects built around AI, systems, and practical product delivery."
            copy="The portfolio focuses on real engineering signals: shipped code, full-stack thinking, responsive UI, and backend-aware architecture."
          />
          <div className="project-grid">
            {featured.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
          <div className="center-action">
            <a className="btn secondary" href={profile.github} target="_blank" rel="noreferrer">See all repositories</a>
          </div>
        </section>

        <section id="services" className="section-pad split-section">
          <div>
            <SectionTitle
              eyebrow="What I Build"
              title="Not only design — complete working products."
              copy="A portfolio should not just look animated. It should prove the developer can ship useful systems with clean structure."
            />
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad skills-section">
          <SectionTitle eyebrow="Stack" title="A practical, employable engineering toolkit." />
          <div className="skill-cloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="experience" className="section-pad split-section">
          <SectionTitle
            eyebrow="Experience"
            title="Academic foundation plus freelance delivery."
            copy={`${profile.education}. Current focus: full-stack applications, AI automation, and client-ready deployments.`}
          />
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.title}`}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <strong>{item.org}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="contact-copy">
            <SectionTitle
              eyebrow="Contact"
              title="Need a developer portfolio, business website, AI tool, or full-stack system?"
              copy="Use the quick message form for simple contact, or the requirement form if you already know what you want built."
            />
            <div className="contact-direct">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>
            </div>
          </div>
          <div className="forms-stack">
            <ContactForm />
            <RequirementForm />
          </div>
        </section>

        <section className="section-narrow cta-band">
          <p className="eyebrow">Independent Deployment</p>
          <h2>This project is not tied to Replit.</h2>
          <p>Upload it to GitHub, import it into Vercel, add your domain, set email environment variables, and it can run as a normal independent portfolio.</p>
          <Link className="btn primary" href="/projects/papersbot">View flagship case study</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

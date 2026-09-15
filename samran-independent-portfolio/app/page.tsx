import Image from "next/image";
import { Header } from "@/components/Header";
import { HeroSceneLoader } from "@/components/HeroSceneLoader";
import { SectionScene } from "@/components/SectionScene";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { RequirementForm } from "@/components/RequirementForm";
import { profile, projects, services, skillGroups, stats, timeline } from "@/data/profile";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <Header />
      <main>
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="status-pill"><span /> Open to remote roles and relocation</div>
            <h1>{profile.name}</h1>
            <h2>{profile.headline}</h2>
            <p>{profile.value}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">Discuss a role</a>
              <a className="btn secondary" href={profile.github} target="_blank" rel="noreferrer">View GitHub</a>
              <a className="btn secondary" href={profile.resume} target="_blank" rel="noreferrer">Open Resume</a>
            </div>
            <div className="social-row" aria-label="Social links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.emailHref}>Email</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Interactive engineering systems visual">
            <HeroSceneLoader />
            <div className="wireframe wireframe-one" />
            <div className="wireframe wireframe-two" />
            <div className="data-orbit orbit-one" />
            <div className="data-orbit orbit-two" />
            <div className="system-node node-one">DB</div>
            <div className="system-node node-two">AI</div>
            <div className="system-node node-three">API</div>
            <div className="profile-card">
              <div className="profile-ring">
                <Image src="/profile.png" alt={profile.name} width={260} height={260} priority />
              </div>
              <div className="profile-meta">
                <span>{profile.role}</span>
                <strong>Production systems · AI workflows · Data</strong>
              </div>
            </div>
            <div className="floating-card card-a">LIVE / MARSOS PLATFORM</div>
            <div className="floating-card card-b">RAG · MULTI-AGENT · REALTIME</div>
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
            title="Systems that hold up under real constraints."
            copy="Selected work across production platforms, source-grounded AI, long-running workflows, and realtime interfaces."
          />
          <div className="project-grid">
            {featured.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
          <div className="center-action">
            <a className="btn secondary" href={profile.github} target="_blank" rel="noreferrer">See all repositories</a>
          </div>
        </section>

        <section id="services" className="section-pad split-section">
          <SectionScene variant="capabilities" />
          <div>
            <SectionTitle
              eyebrow="What I Build"
              title="From data model to shipped interface."
              copy="I work across the layers that make software dependable: product framing, component systems, APIs, databases, AI orchestration, and deployment."
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
          <SectionTitle eyebrow="Stack" title="Tools organized by the work they support." />
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <div className="skill-cloud">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section-pad split-section">
          <SectionScene variant="experience" />
          <SectionTitle
            eyebrow="Experience"
            title="Academic foundation plus freelance delivery."
            copy={`${profile.education}. Current focus: production data systems, full-stack applications, and AI automation.`}
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
          <SectionScene variant="contact" />
          <div className="contact-copy">
            <SectionTitle
              eyebrow="Contact"
              title="Hiring for a system that needs to work?"
              copy="Send a role, technical problem, or product brief. I’m open to remote engineering work, relocation, and carefully scoped independent delivery."
            />
            <div className="contact-direct">
              <a href={profile.emailHref}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>
            </div>
          </div>
          <div className="forms-stack">
            <ContactForm />
            <RequirementForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

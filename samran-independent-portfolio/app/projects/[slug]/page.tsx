import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects, profile } from "@/data/profile";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${profile.name}`,
      description: project.summary
    }
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="project-page section-pad">
        <Link className="back-link" href="/#work">← Back to work</Link>
        <section className="project-hero-detail">
          <div>
            <p className="eyebrow">{project.category} · {project.year}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="hero-actions">
              <a className="btn primary" href={project.repo} target="_blank" rel="noreferrer">Open repository</a>
              {project.live ? <a className="btn secondary" href={project.live} target="_blank" rel="noreferrer">Live project</a> : null}
            </div>
          </div>
          <aside className="project-sidebar">
            <h2>Tech stack</h2>
            <div className="chip-row">
              {project.tech.map((tech) => <span className="chip" key={tech}>{tech}</span>)}
            </div>
          </aside>
        </section>

        <section className="case-grid">
          <article>
            <span>01</span>
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </article>
          <article>
            <span>02</span>
            <h2>Solution</h2>
            <p>{project.solution}</p>
          </article>
          <article>
            <span>03</span>
            <h2>Impact</h2>
            <ul>
              {project.impact.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </section>

        <section className="section-narrow related-projects">
          <p className="eyebrow">More Projects</p>
          <div className="related-grid">
            {related.map((item) => (
              <Link className="related-card" href={`/projects/${item.slug}`} key={item.slug}>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

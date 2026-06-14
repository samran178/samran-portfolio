import Link from "next/link";
import type { Project } from "@/data/profile";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="chip-row">
        {project.tech.slice(0, 5).map((tech) => <span className="chip" key={tech}>{tech}</span>)}
      </div>
      <div className="card-actions">
        <Link href={`/projects/${project.slug}`}>Case study</Link>
        <a href={project.repo} target="_blank" rel="noreferrer">Repository</a>
      </div>
    </article>
  );
}

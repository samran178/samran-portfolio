import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{profile.name}</strong>
        <p>Full-stack portfolio built with Next.js, API routes, responsive UI, and deployment-ready structure.</p>
      </div>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.emailHref}>Email</a>
      </div>
    </footer>
  );
}

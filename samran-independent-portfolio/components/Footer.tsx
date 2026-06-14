import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{profile.name}</strong>
        <p>Independent portfolio built with Next.js. No Replit runtime, no Replit storage, no hidden platform lock-in.</p>
      </div>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </footer>
  );
}

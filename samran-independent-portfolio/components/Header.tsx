import Link from "next/link";
import { profile } from "@/data/profile";

export function Header() {
  return (
    <header className="topbar">
      <Link href="/" className="brand" aria-label={`${profile.name} home`}>
        <span className="brand-mark">S</span>
        <span>{profile.name}</span>
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="/#work">Work</a>
        <a href="/#services">Services</a>
        <a href="/#experience">Experience</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a className="nav-cta" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
    </header>
  );
}

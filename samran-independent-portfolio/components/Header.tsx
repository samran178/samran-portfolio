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
        <a href="/#services">Capabilities</a>
        <a href="/#experience">Experience</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">Discuss a role</a>
    </header>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found section-pad">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you opened does not exist or has been moved.</p>
      <Link className="btn primary" href="/">Back to homepage</Link>
    </main>
  );
}

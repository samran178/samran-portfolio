# Content Editing Guide

## Change name, email, socials, education

Open:

```text
data/profile.ts
```

Edit the `profile` object.

## Add a new project

Open:

```text
data/profile.ts
```

Add another object to the `projects` array:

```ts
{
  slug: "new-project",
  title: "New Project",
  category: "AI Web App",
  year: "2026",
  summary: "Short summary shown on the homepage.",
  problem: "The problem this project solves.",
  solution: "How the project solves it.",
  impact: ["Impact point 1", "Impact point 2"],
  tech: ["React", "Next.js", "PostgreSQL"],
  repo: "https://github.com/username/repo",
  live: "https://live-demo.com"
}
```

The project page will be generated automatically at:

```text
/projects/new-project
```

## Replace profile photo

Replace:

```text
public/profile.png
```

Use the same filename or update the image path in `app/page.tsx`.

## Replace resume

Replace:

```text
public/Samran_Taimoor_Resume.pdf
```

The Resume button uses the link saved in `data/profile.ts`.

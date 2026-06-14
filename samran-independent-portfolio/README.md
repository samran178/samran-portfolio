# Samran Taimoor — Independent Full-Stack Portfolio

A clean, independent, production-ready portfolio project built from scratch with **Next.js**, **TypeScript**, custom CSS, and backend **API routes** for contact/project requirement forms.

This project is intentionally **not tied to Replit**. It does not include `.replit`, `.local`, Replit object storage, hidden cache folders, or a Replit deployment dependency.

## What is included

- Professional landing page
- Profile image and resume PDF
- Selected project cards
- Dynamic project case-study pages
- Contact form backend: `/api/contact`
- Project requirement backend: `/api/requirements`
- Health check backend: `/api/health`
- SMTP email support through environment variables
- SEO metadata
- Sitemap and robots routes
- Security headers
- Custom 404 page
- Vercel deployment config
- Full deployment guide

## Tech stack

- Next.js App Router
- React
- TypeScript
- Nodemailer
- Custom responsive CSS
- Serverless API routes

## Local setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build check

```bash
npm run build
npm run start
```

## Email setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then fill these values:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_TO=samrantaimoor35@gmail.com
CONTACT_FROM="Samran Portfolio <your-email@gmail.com>"
```

Without SMTP variables, the forms still validate and accept the message, but emails will not be sent. In production, add the same environment variables inside your hosting platform dashboard.

## Editing your data

All portfolio content is inside:

```text
data/profile.ts
```

Update this file to edit:

- Name
- Email / phone
- Social links
- Skills
- Services
- Timeline
- Projects
- Project case-study details

Replace these files when needed:

```text
public/profile.png
public/Samran_Taimoor_Resume.pdf
```

## Deployment

Read the complete guide:

```text
docs/DEPLOYMENT.md
```

Recommended simple path:

1. Create a GitHub repository.
2. Upload this project.
3. Import the repository into Vercel.
4. Add environment variables.
5. Add your custom domain.
6. Update `SITE_URL` and `NEXT_PUBLIC_SITE_URL` to the final domain.

## Folder structure

```text
app/
  api/
    contact/route.ts
    requirements/route.ts
    health/route.ts
  projects/[slug]/page.tsx
  layout.tsx
  page.tsx
  globals.css
components/
  ContactForm.tsx
  Footer.tsx
  Header.tsx
  ProjectCard.tsx
  RequirementForm.tsx
  SectionTitle.tsx
data/
  profile.ts
lib/
  mail.ts
  validators.ts
public/
  profile.png
  Samran_Taimoor_Resume.pdf
  favicon.svg
docs/
  DEPLOYMENT.md
```

## Important note

A domain purchase is separate from website hosting. This project can be deployed independently, but you still need a hosting account and domain DNS access to connect your own domain.

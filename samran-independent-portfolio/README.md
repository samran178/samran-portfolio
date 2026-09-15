# Samran Taimoor — Full-Stack Portfolio

A clean, production-ready portfolio project built with **Next.js**, **TypeScript**, custom CSS, and backend **API routes** for contact/project requirement forms.

## What is included

- Professional responsive landing page
- Profile image and current resume PDF
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
https://samrantaimoor.com
```

## Build check

```bash
npm run build
npm run start
```

## Email setup

Copy `.env.example` to `.env.local`:

```bash
copy .env.example .env.local
```

Then fill these values:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=samrantaimoor35@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_TO=samrantaimoor35@gmail.com
CONTACT_FROM="Samran Portfolio <samrantaimoor35@gmail.com>"
```

Without SMTP variables, the forms will show an error instead of pretending the email was sent. In production, add the same environment variables inside your hosting platform dashboard.

## Editing your data

All portfolio content is inside:

```text
data/profile.ts
```

Replace these files when needed:

```text
public/profile.png
public/Samran_Taimoor_Resume.pdf
```

## Deployment

Read:

```text
docs/DEPLOYMENT.md
```

Recommended path:

1. Commit this project to GitHub.
2. Import the repository into Vercel.
3. Add environment variables.
4. Add your custom domain.
5. Update `SITE_URL` and `NEXT_PUBLIC_SITE_URL` to the final domain.

## Folder structure

```text
app/
  api/
  projects/[slug]/page.tsx
  layout.tsx
  page.tsx
  globals.css
components/
data/
lib/
public/
docs/
```

## Important note

A domain purchase is separate from website hosting. This project can run independently, but you still need hosting and domain DNS access to connect your own domain.
